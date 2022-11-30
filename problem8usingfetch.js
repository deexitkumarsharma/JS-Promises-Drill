// Use this data endpoint to get the data and console the each house names and handle the error as well.
// [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

//- Use fetch to get data.
//- Handle if the user is not connected to internet.
//- Handle error that may occure while fetching data.

let fetch = require("cross-fetch");
let getData =
  "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json";

fetch(getData)
  .then((data) => {
    //console.log(data);
    return data.json();
  })
  .then((data) => {
    console.log(data.houses.map((elem) => elem.name));
  })
  .catch((error) => {
    console.log("-" + error + "-");
  });
