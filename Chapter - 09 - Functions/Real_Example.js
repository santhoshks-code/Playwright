function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
         console.log("Success");    }
    else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error");
    }
    else {
        console.log("Server Error");
    }
}

const statusCode = 200;
validateStatusCode(statusCode);
console.log(statusCode);
console.log(validateStatusCode(statusCode));