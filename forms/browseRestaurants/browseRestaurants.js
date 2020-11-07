let req = ""
let query = ""
let results3 = ""
let resultstate = ""
let pw = "Bluejay1!"  // database password 


browseRestaurants.onshow=function(){
   query = "SELECT ResName FROM yelp_restaurants"
    req = 
    Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=aec83928&pass=" + pw + "&database=aec83928&query=" + query)
    if (req.status == 200) { //transit worked.
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i] + "\n"
           Textarea1.value = message
        
            // names now in results array - load names into the dropdown
            drpRestaurants.clear()
            for (i = 0; i <= results.length - 1; i++)
              drpRestaurants.addItem(results[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}
