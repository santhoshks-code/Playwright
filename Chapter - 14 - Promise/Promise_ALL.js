let checkAuth = Promise.resolve("Auth is OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function(data){
    console.log("All checks:", data);
});

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("NOK"),
    Promise.all("OKBUT")
])

.then(function (r) { console.log(r); })
.catch(function (err) { console.log("Failed", err);})