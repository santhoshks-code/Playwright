let x = 10;
console.log(x);
let y = 20;
console.log (y);
let z = 30;
console.log(x+y+z);

// Simple for-loop using `let`
for (let i = 0; i < 3; i++) {
	console.log('inside for i =', i);
    print(i);
}
// `i` is block-scoped when declared with `let` — this is safe and prints 'undefined'
console.log('outside for i (typeof):', typeof i);