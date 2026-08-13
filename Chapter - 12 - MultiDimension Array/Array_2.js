const test = require("node:test");

let grid = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

console.log(grid[0][0]);

grid[0][0] = 99;
console.log(grid);

console.log(grid.length);
console.log(grid[0].length);

let testMatrix = [
  ["Login", "Pass", 200],
  ["Search", "Fail", 201],
  ["checkout", "Skip", 400],
];

console.log(grid[grid.length - 1][grid[0].length - 1]);

for (let i = 0; i < testMatrix.length; i++) {
  for (let j = 0; j < testMatrix[i].length; j++) {
    process.stdout.write(testMatrix[i][j] + " ");
  }
  console.log("");
}