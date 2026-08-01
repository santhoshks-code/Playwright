function greetByName(name) {
    console.log("Hello, " + name + "!");
}

greetByName("Alice"); // Output: Hello, Alice!
greetByName("Bob"); // Output: Hello, Bob!
greetByName("Charlie"); // Output: Hello, Charlie!
greetByName("Pramoddutta"); // Output: Hello, Pramoddutta!

let name1 = greetByName("David"); // Output: Hello, David!
console.log(name1); // Output: undefined (since the function does not return a value)
