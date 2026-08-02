function name1() {
    console.log("Hi")
}

name1();

// call itself

(function() {
    console.log("Anonymous Function")
})();

(() => {
    console.log("Arrow function not mention function");
})();