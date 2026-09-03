let p = new Promise(function (resolve, reject){
    resolve(42);
});

p.then(function (value){
    console.log(p);
    console.log("Answer", value);
});

let p1 = Promise.resolve(5);

p1.then(function (val) {
    return val * 10;
}).then(function (val) {
    console.log("Result:", val);
});