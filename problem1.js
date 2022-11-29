let promise = new Promise((resolve, reject)=>{
    setTimeout(function() {
        resolve('Promise Resolved!');
    }, 1000);
});

promise.then((result)=>{
    console.log(result)
});