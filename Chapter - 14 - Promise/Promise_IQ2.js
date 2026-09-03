

Promise.resolve("Start")
.then(function (val) {
    console.log(val);
    throw new Error ("Broke at step 2");
})
.then(function(){
    console.log("This will NOT run");
})
.catch(function (err){
    console.log("caught:", err.message);
});