/* let a = "Test";
if (true) {
    console.log(a);
    let a = "temp";
    console.log(a);
} */

var b = "TestNEW";
if (true) {
    console.log(b);
    var b = "temp";
}

// let & const wont allow but var allows to use before iniatalize

const c = "TestNEW12345";
if (true) {
    console.log(c);
    const c = "temp";
}