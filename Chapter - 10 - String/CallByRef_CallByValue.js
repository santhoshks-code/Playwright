let a = 10;
let b= a;
b = 55;
console.log(b);
console.log(a);
//Primitive the value will be same 

let val = {status: "Pass"};
change = val;
change = {status: "Fail"};
console.log(change);
console.log(val);

let obj1 = {val5: 10};
let obj2 = obj1;
obj2.val5 = 88;
console.log(obj1.val5);