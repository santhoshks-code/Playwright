var a = 10;
console.log(a);
// var - function scoped(), Traitor

// Define

function printHello() {
console.log ("hello academy");
var a = 20;
console.log(a);
if (true) {
    var a = 30;
    console.log(a); //30
}
console.log(a) // 20
}

// console.log("let  ->", b);

printHello();