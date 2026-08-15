let apiCall = new Promise(function(resolve, reject){
    reject({status: 201, body: "Valid Response"});

})

apiCall.then(function(data){
    console.log(data);
}) .catch(function(error){
    console.log(error); 
}).finally(function(){
    console.log("I will be executed anyhow");
})