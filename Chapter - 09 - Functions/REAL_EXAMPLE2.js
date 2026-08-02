function validateStatusCode(status){
    if (status >= 200 && status <= 300) {
        console.log("Request is Ok")
    }
}

validateStatusCode(350);

const validateStatusCode_Expression = function (status) {
    if (status >= 400 && status <= 600);
    console.log("Request seems to be Good");
}

validateStatusCode_Expression(500);

const validateStatusCode_Arrow = (status) => {
    if (status => 600 && status <= 800);
    console.log("Status is nice!")
}

validateStatusCode_Arrow(750);