let scroes = [
    [85, 90, 78],
    [60, 45, 70],
    [95, 88, 72]
];

let rowSums = scores.map(row => row.reduce((a,b) => a+b));
console.log(rowSums);