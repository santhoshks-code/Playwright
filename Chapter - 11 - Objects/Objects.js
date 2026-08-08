let a = {status: "Pass"};
console.log(a.status);
console.log(a["status"]);


// keys are case sensitive
let c = {status: "Pass"};
let b = c //b copies the reference
b.status = "Skip";
console.log(c.status);
console.log(b.status);

let a22 = {status: "Pass", Status: "Fail"};
console.log(a22["status"]);
console.log(a22["Status"]);

let obj = {name: "Pass"};
const t_js = {
    name: "Pramod",
    age: 10
}
console.log(t_js);

