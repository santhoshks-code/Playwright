
async function runLoginFlow(){
    let msg1 = await openBrowser();
    console.log("Step1:", msg1);
    let msg2 = await goToLogin();
    console.log("Step2:", msg2);
    let msg3 = await enterCredentials();
    console.log("Step3:", msg3);
    let msg4 = await clickOnLogin();
    console.log("Step4:", msg4);
}
console.log(runLoginFlow);

