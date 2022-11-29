// Use this data endpoint to get the data and console the each house names and handle the error as well.
// [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

//- Use fetch to get data.
//- Handle if the user is not connected to internet.
//- Handle error that may occure while fetching data.

let fetch = require('cross-fetch')
let getData = "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"


// check if online/offline
// http://www.kirupa.com/html5/check_if_internet_connection_exists_in_javascript.htm


// function for handleError
let handleError = function(response){
    if(!response.ok){
        throw error("Offline");
    }
    return response;
}

fetch(getData)
.then(handleError)
.then((response) => {
    console.log(response.status)
    // console.log(response.ok)
    // console.log("works");
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log("Error");
    console.log(err);
});




