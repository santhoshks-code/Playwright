function getStatus(code) {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500 && code < 600) return "Tech Error";

}
console.log(getStatus(200));
console.log(getStatus(400));
console.log(getStatus(500));

