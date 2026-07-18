let a = 10;
console.log(++a + a); // Output: 22 (pre-increment, a is incremented before addition)
console.log(a); // Output: 12 (a is now 12 after the pre-increment)
console.log(++a + a + a++); // Output: 23 (post-increment, a is used in addition before incrementing)

let i = 1;
let result = i++ + ++i; // i is incremented after being used in the first part, then incremented before being used in the second part
console.log(result, i); // Output: 4 (1 + 3)

let j = 34;
console.log(j++ + ++j); // Output: 70 (post-increment, j is used in addition before incrementing)
console.log(j); // Output: 36 (j is now 36 after the post-increment)

let k = 100;
console.log(k++ + ++k +k++ + ++k); // Output: 202 (post-increment, k is used in addition before incrementing) 

