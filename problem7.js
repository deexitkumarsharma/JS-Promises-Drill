let promise1 = new Promise(function (resolve, reject) {
    resolve("Promise 1");
});
  
let promise2 = new Promise(function (resolve, reject) {
    //resolve("Promise 2");
    reject(new Error("I am rejected"));
});
  
let promise3 = new Promise(function (resolve, reject) {
    resolve("Promise 3");
});
let promise_all = Promise.all([promise1, promise2, promise3])
.then((res)=>console.log(res))
.catch((err)=>{
    console.log("Error");
    console.log(err);
});

