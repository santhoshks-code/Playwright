// Pre Increment Operator
// The pre-increment operator (++) increases the value of a variable by 1 before it is used in an expression.
let a = 10;
let b = ++a; // This will increment the value of 'a' by 1 before it is assigned to 'b'.
console.log(a); // Output: 11
console.log(b); // Output: 11

// Post Increment Operator
// The post-increment operator (++) increases the value of a variable by 1 after it is used in an expression.
let x = 10;
let y = x++; // This will assign the current value of 'x' to 'y' and then increment 'x' by 1.
console.log(x); // Output: 11
console.log(y); // Output: 10

let p = 10;
console.log(++p + p); // Output: 21 (pre-increment)
let q = 10;
console.log(q++ + q); // Output: 20 (post-increment, q is incremented after this line)
