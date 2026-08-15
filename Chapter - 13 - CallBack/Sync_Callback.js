let testResults = ["PASS", "FAIL", "NOTRUN", "SKIP"];

testResults.forEach(function(result, index){
    console.log("Test "+ index +" -> " + result)
});