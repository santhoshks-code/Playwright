// Type of Operators
// The typeof operator is used to determine the type of a variable or an expression. It returns a string indicating the type of the operand.

console.log(typeof 42); // Output: "number"
console.log(typeof "Hello"); // Output: "string"
console.log(typeof true); // Output: "boolean"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof null); // Output: "object" (this is a known quirk in JavaScript)
console.log(typeof { name: "John", age: 30 }); // Output: "object"
console.log(typeof [1, 2, 3]); // Output: "object" (arrays are also considered objects in JavaScript)
console.log(typeof function() {});  // Output: "function"