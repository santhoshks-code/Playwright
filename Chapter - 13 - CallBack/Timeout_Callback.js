function openBrowser(callbackfn){
console.log("opening the browser");
setTimeout(function () {
    console.log("Step 1 - Browser starting....");
    callbackfn();
}, 500);
}

function goToLoginPage(callbackfn){
    setTimeout(function () {
console.log("Step 2: Login page loaded");
callbackfn();
    }, 500);
    }

function enterCredentials(callbackfn){
    setTimeout(function () {
        console.log("Step 3: Credentials are entered valid");
        callbackfn();
    }, 500);

    }

function clickOnLogin(callbackfn){
    setTimeout(function(){
        console.log("Login is Successful");
        callbackfn();
    }, 500);
    }

    // This is CALLBACK HEll

    openBrowser(function(){
        goToLoginPage(function(){
        clickOnLogin(function(){
            enterCredentials(function(){
                clickOnLogin(function(){
                    console.log("All steps completed");

                });
            });
        });
    });
});