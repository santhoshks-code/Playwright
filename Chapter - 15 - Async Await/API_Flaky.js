// Flaky Test  --> 100 TC, 3 Failed
// The number of TC inconsistency 

let attempt = 0;
function flakyAPI(){
    attempt++;
    if(attempt < 3){
        return Promise.resolve("Attempt " +attempt + ": SUCCESS");

    }
    return Promise.reject("Attempt " + attempt + ": failed");

}

async function retryTesting(maxretries) {
    for (let i = 1; i <= maxretries; i++){
        try{
            let result = await flakyAPI();
            console.log("Pass Promise, I will execute also", result);

        }catch (error){
            console.log("Fail Promise", error);
        }
    }
    
}

retryTesting(8);