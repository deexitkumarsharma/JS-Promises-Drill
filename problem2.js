let promise = new Promise((resolve, reject)=>{
    reject('Rejected Promise!');
})

promise.catch((result)=>{
console.log(result);
});