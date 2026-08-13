let apiCall = new Promise(function(resolve, reject) {
  resolve({ status: 200, body: "User data" });
});

apiCall.then((result) => {
 // console.log(result);
  console.log(apiCall);
});

