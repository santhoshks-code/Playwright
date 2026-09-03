async function  getTestResults() {
return "Pass";
}

//Any Async function returns promise and use await also

getTestResults().then(function(results){
    console.log(results)
});

async function runTest(){

let result = await Promise.resolve("Login test passed")
console.log(results);
}

runTest();