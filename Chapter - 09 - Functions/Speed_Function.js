function add(a, b, c) {
return a + b + c;
}

let num = {1, 2, 3};
Console.log(Add(…num));

function hasError(…codes) {
return codes.some(c => c >= 400);

let resonseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
hasError(…responseCodes);
