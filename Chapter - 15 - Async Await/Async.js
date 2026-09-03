/*Async & Await is a cleaner wat to write Promises, instead of chaining
.then() .then() looks Scynchronus but works Asynchronous
Instead of Callback and promises use Aysnc & Await
Allows program to start a long running task (like fetching data from file)
continue with other tasks before 1st one finishes
Async code prevents application from freezing, for user experince
Two Keywords:
async -> put before a functoon to make it return a promise
await -> pause here, wait for the promise to finish, then give the value (Calling of functions)
*/

getToken.then(function (token){
    return getUser(token);
}).then(function(user) {
    console.log(user);
});

async function run(){
    let token = await getToken();
    let user = await getUser();
}