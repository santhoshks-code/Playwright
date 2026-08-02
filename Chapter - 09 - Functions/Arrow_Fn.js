function doubleMe(a) {
    return a * 2;
}

const doubleMeArrow = (a) => a * 2;
doubleMeArrow(10); 

console.log(doubleMeArrow(10));
console.log(doubleMe(20));

const getEnv = () => "staging";
console.log(getEnv);

// multiline arrow function
const getResult = (score) => {
    if (score > 70) return "pass";
    return "fail";
}

console.log(getEnv);
console.log(getResult(60));
