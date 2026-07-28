// slice is combining
// slice(start, end) - returns new array
// Does not mutate actual (start, end-1)
// start index is included
// Always goes from Right side

let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1,3));
console.log(arr.slice(-2));
console.log(arr.slice(2));
console.log(arr.slice(-5));
console.log(arr.slice(-3, -5));

let ok = arr.slice(4,5);
console.log(ok);