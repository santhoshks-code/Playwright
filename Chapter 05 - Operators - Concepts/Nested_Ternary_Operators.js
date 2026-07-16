// Multiple condidtions can be checked using nested ternary operators. The syntax is as follows:
// condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;

let age = 20;
let category = age < 13 ? 'Child' : age < 20 ? 'Teenager' : age < 60 ? 'Adult' : 'Senior';
console.log(category); // Adult

// IQ for Nested Ternary Operators
let marks = 75;
let result = marks >= 90 ? 'A' : marks >= 80 ? 'B' : marks >= 70 ? 'C' : marks >= 60 ? 'D' : 'F';
console.log(result); // C

// IQ 2
let statusCode = 404;
let nothing =      
statusCode < 300 ? "Success" :
statusCode  < 500 ? "Client Error" :
statusCode < 600 ? "Server Error" : "Unknown Status";
console.log(nothing); // Client Error  
console.log(statusCode); // 404
