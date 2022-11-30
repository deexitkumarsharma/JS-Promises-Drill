let promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("Promise Resolved!");
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});
