let promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});
let promise2 = new Promise((resolve, reject) => {
  reject("Promise 2");
  // resolve("Promise 2");
});
let promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});

let promiseAll = (inputPromises) => {
  let resolvedPromises = [];
  return new Promise((resolve, reject) => {
    for (let promise of inputPromises) {
      promise
        .then((value) => {
          resolvedPromises.push(value);
          if (resolvedPromises.length === inputPromises.length) {
            resolve(resolvedPromises);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

promiseAll([promise1, promise2, promise3])
  .then((val) => console.log(val))
  .catch((val) => console.log(`${val} is rejected`));
