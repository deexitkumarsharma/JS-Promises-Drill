let secondPromise = new Promise(function (resolve, reject) {
  resolve("Second!");
});
let firstPromise = new Promise(function (resolve, reject) {
  resolve(secondPromise);
});

firstPromise.then((value) => console.log(value));
