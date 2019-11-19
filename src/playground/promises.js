const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve("Passed");
    }, 1500);
})

console.log("Before");

promise.then((data)=>{
    console.log(data)
})

console.log("After");