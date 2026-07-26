let arr = [1, 2, 3];
console.log(arr);

// add to end
arr.push(4);
console.log(arr);

// add to beginning
arr.unshift(5);
console.log(arr);

// remove from beginning
arr.shift();
console.log(arr);

arr.splice(2,1,88);
console.log(arr);

arr.splice(2, 0, 87);
console.log(arr);

arr.splice (1, 2, 10, 20);
console.log(arr);