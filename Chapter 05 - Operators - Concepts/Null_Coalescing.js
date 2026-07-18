let amul = null;
let value = amul ??  "Nandini Milk"
console.log(value); // Output: Nandini Milk     
// If amul is null or undefined, value will be assigned "Nandini Milk"

let api_response = null;
let responsedata = api_response ?? "No data available";
console.log (responsedata); // Output: No data available
// If api_response is null or undefined, responsedata will be assigned "No data available"

let api_response1 = "Data received successfully";
let responsedata1 = api_response1 ?? "No data available";
console.log(responsedata1); // Output: Data received successfully


let userInput = undefined;
let defaultInput = "Default Input";
let finalInput = userInput ?? defaultInput;
console.log(finalInput); // Output: Default Input
// If userInput is null or undefined, finalInput will be assigned "Default Input"