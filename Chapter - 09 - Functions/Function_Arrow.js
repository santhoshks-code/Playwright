const greet = function (name) {
    return `Hello, ${name}!`;
}

const greetArrow = (name) => {
    return `Hello, ${name}!`;
}   

const greetArrowShort = name => `Hello, ${name}!`;

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greetArrow("Bob")); // Output: Hello, Bob!
console.log(greetArrowShort("Charlie")); // Output: Hello, Charlie!