let apiCall = new Promise(function(resolve, reject) {
  resolve({ status: 200, body: "User data" });
  reject({status: 500, body: "Server Error"});
});

apiCall.then((result) => {
  console.log(result);
  console.log(apiCall);
});

apiCall.then(function(response){
  console.log(response.status);
  console.log(response.body);
  console.log(response.resolve);
  console.log(response.reject);
  
});


