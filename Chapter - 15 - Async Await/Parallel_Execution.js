// Step1 and Step2 doesnt depend
function apiCall(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed`);
        }, 1000);
    });
}