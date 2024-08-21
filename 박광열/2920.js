// const input = [1, 2, 3, 4, 5, 6, 7, 8];
// const input = [8, 7, 6, 5, 4, 3, 2, 1];
// const input = [8, 1, 7, 2, 6, 3, 5, 4];
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const inA = [...input].sort((a, b) => a - b);
console.log(
  JSON.stringify(input) === JSON.stringify(inA)
    ? "ascending"
    : JSON.stringify(input) === JSON.stringify(inA.reverse())
    ? "descending"
    : "mixed"
);
