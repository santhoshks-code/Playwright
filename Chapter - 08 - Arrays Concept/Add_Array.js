let arr = [1, 2, 3];
console.log(arr);

// Add to End
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
arr.pop();
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

//[1,2,3,4,5,6] Remove and add in places

arr.splice (2, 1);
console.log(arr);

arr.splice(2, 0, 99, 200);
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);