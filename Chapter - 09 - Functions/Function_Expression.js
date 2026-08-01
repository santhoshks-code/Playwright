function greet1(name) {
    return `Hello, ${name}`;
}

// Function as expression
const greet = function(name1){
    return `Hello, ${name1}`;
}

console.log(greet1("Alice")); // Output: Hello, Alice
console.log(greet("Bob")); // Output: Hello, Bob