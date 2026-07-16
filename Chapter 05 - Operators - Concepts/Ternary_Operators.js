// Ternary Operator
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. 

let age = 18;
let isAdult = age >= 18 ? true : false;
console.log(isAdult); // true


// Example 2: Using ternary operator to assign a value based on a condition
let score = 85;
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
console.log(grade); // B

// IQ
let iq = 120;
let intelligence = iq >= 130 ? 'High' : iq >= 110 ? 'Average' : 'Low';
console.log(intelligence); // Average

// Example 3: Using ternary operator in a function
function checkEvenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd

// IQ 
let responseTime = 850;
let sla = 1000;
let responseStatus = responseTime <= sla ? "Within SLA" : "Outside SLA";
console.log(responseTime); // 850
console.log(responseStatus); // Within SLA

// IQ 5
let condition = true;
let IsConditionTrue = condition ? "Condition is true" : "Condition is false";
console.log(IsConditionTrue); // Condition is true
