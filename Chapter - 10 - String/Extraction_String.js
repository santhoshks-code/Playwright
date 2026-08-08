let str = "Login_Test_Pass_001";

// slice(start, end) - Negative indexes

console.log(str.slice(0, 5));
console.log(str.slice(11));
let testNumber = str.at(-2);


// Sub string doesn't support negative number

console.log(str.substring(-2));
console.log(str.substring(5));