# JavaScript Keywords Explained

JavaScript keywords are reserved words that have special meaning in the language. They are used to define syntax, control program flow, declare variables, and create functions or classes.

## 1. var
- Used to declare a variable.
- It has function scope, not block scope.
- Variables declared with var can be re-declared and updated.

Example:
```javascript
var name = "Alice";
var name = "Bob";
console.log(name);
```

## 2. let
- Used to declare a block-scoped variable.
- It can be updated but not re-declared in the same scope.

Example:
```javascript
let age = 25;
age = 26;
console.log(age);
```

## 3. const
- Used to declare a block-scoped constant.
- Its value cannot be reassigned after declaration.
- It is useful for values that should remain fixed.

Example:
```javascript
const pi = 3.14;
// pi = 3.1416; // Error
```

## 4. if
- Used for decision-making.
- Executes a block of code only when a condition is true.

Example:
```javascript
let score = 80;
if (score >= 50) {
  console.log("Pass");
}
```

## 5. else
- Used with if to define an alternative block.
- Runs when the condition is false.

Example:
```javascript
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

## 6. else if
- Used when there are multiple conditions to check.

Example:
```javascript
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else {
  console.log("C");
}
```

## 7. switch
- Used to select one of many code blocks based on a value.
- Often cleaner than many if-else statements.

Example:
```javascript
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}
```

## 8. for
- Used to repeat a block of code a fixed number of times.

Example:
```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

## 9. while
- Repeats a block of code while a condition is true.

Example:
```javascript
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}
```

## 10. do...while
- Similar to while, but the block runs at least once before checking the condition.

Example:
```javascript
do {
  console.log("Hello");
} while (false);
```

## 11. break
- Stops the current loop or switch statement.

Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```

## 12. continue
- Skips the current iteration of a loop and moves to the next one.

Example:
```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
```

## 13. function
- Used to define a reusable block of code.

Example:
```javascript
function greet(name) {
  return "Hello " + name;
}

console.log(greet("John"));
```

## 14. return
- Used inside a function to send a value back to the caller.

Example:
```javascript
function add(a, b) {
  return a + b;
}
```

## 15. class
- Used to create a blueprint for objects.

Example:
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

let p = new Person("Alice");
console.log(p.name);
```

## 16. new
- Used to create an instance of an object from a class or constructor function.

Example:
```javascript
let date = new Date();
console.log(date);
```

## 17. this
- Refers to the current object or context.

Example:
```javascript
const person = {
  name: "Alice",
  greet() {
    console.log("Hello, " + this.name);
  }
};

person.greet();
```

## 18. try, catch, finally
- Used for error handling.
- try contains code that may fail.
- catch handles the error.
- finally runs no matter what.

Example:
```javascript
try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log("An error occurred");
} finally {
  console.log("This always runs");
}
```

## 19. throw
- Used to create a custom error.

Example:
```javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
}
```

## 20. import and export
- Used in modular JavaScript to share code between files.

Example:
```javascript
// file1.js
export const message = "Hello";

// file2.js
import { message } from "./file1.js";
console.log(message);
```

## Summary
JavaScript keywords are the building blocks of the language. They help you:
- declare variables
- control program flow
- create loops and conditions
- define functions and classes
- handle errors

Understanding these keywords is essential for writing clear and correct JavaScript code.
