let nums = [10, 25, 30, 45];
let results = nums.find(x => x > 20);
console.log(results);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

let last = nums.findLast(n => n > 20); //45
console.log(last);

let anything = nums.findLastIndex(n => n > 30);
console.log(anything);
