const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let count = 0;

const findSubsequences = (index, currentSum) => {
  if (index === N) {
    return;
  }

  const newSum = currentSum + arr[index];

  if (newSum === S) {
    count++;
  }

  findSubsequences(index + 1, currentSum);
  findSubsequences(index + 1, newSum);
};

findSubsequences(0, 0);

console.log(count);
