let promise = new Promise((resolve, reject)=>{
    reject('Rejected Promise!')
})
promise.catch((error)=>{
console.log(error);
})
.finally(()=>{
console.log("Promise Settled!");
})