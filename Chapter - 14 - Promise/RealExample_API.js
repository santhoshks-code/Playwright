let apiCall = new Promise(function (resolveok, rejectnok){
    rejectnok({status: 500, body: "Server Error" });
});

apiCall.then(function(data){
    console.log("Data is Success")
}).catch(function(error) {
    console.log(error)
});

//then() called when its completed
// atch() runs only when promise is rejected 
