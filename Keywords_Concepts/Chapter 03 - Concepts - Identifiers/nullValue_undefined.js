// undefined -- A variable exists and is declared but has not been assigned a value. It is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
// null -- A value that represents the intentional absence of any object value. It is a primitive value that is often used to indicate that a variable has been explicitly assigned no value.


var x;
console.log(x); // Output: undefined    

var y = null;
console.log(y); // Output: null
console.log(typeof x); // Output: undefined
console.log(typeof y); // Output: object

function testUndefined() {
    var a;
    console.log(a); // Output: undefined
}