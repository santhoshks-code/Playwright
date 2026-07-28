// map will be used when we want to transform Array of same size.

let scores = [45, 82, 91, 60, 73];
let grades = scores.map(item_score => item_score>70 ? "PASS":"FAIL");
console.log(grades);

//Filter

let passing = scores.filter (S => S >= 70);
console.log(passing);

//Reduce (Not used much)

let total = scores.reduce ((sum,s)=> sum +s, 0);
console.log(total);

let minus = scores.reduce ((sum,s)=> sum -s, 0);
console.log(minus);

let multiply = scores.reduce ((sum,s)=> sum *s, 0);
console.log(multiply);