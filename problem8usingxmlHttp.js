// Use this data endpoint to get the data and console the each house names and handle the error as well.
// [ENDPOINT](https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json)

//- Use fetch to get data.
//- Handle if the user is not connected to internet.
//- Handle error that may occure while fetching data.

let XMLHttpRequest = require("xhr2");
let xmlHttpReq = new XMLHttpRequest();
xmlHttpReq.open(
  "GET",
  "https://raw.githubusercontent.com/nnnkit/json-data-collections/master/got-houses.json"
);
xmlHttpReq.onload = () => {
  let result = xmlHttpReq.response;
  console.log(JSON.parse(result).houses.map((ele) => ele.name));
};
xmlHttpReq.send();
