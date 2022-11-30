let promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

let promise2 = new Promise((resolve, reject) => {
  reject(("Promise 2"));
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});

let promisesArray = [promise1, promise2, promise3];
//console.log(promisesArray);

let Promise_All = (promisesArray) => {
    Promise.all(promisesArray).then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error + " " + "rejected");
  });
}
Promise_All(promisesArray);

