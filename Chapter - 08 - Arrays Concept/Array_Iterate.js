let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {

    console.log(tests[i]);
}

// for ... of (cleanes of values)
for (let test of tests) {

   console.log(test) // values
}

// for Each (No return value)
tests.forEach((test, index) => {
console.log('${index}: ${test}');
});
