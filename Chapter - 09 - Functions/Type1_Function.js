// Define
function greet() {
    console.log("Hi, welcome to the world of functions!");
}

return greet();

// calling the function
greet();
greet();
greet();

let output = greet();
console.log(output); // Output: undefined, because the function does not return anything

return greet();

function openBrowser() {
    console.log(openBrowser);
}