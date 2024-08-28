const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./박광열/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const inputCon = input[0].split(" ").map(Number);
const input1 = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...input1);
let s = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const an = input1.reduce((a, b) => a + Math.floor(b / mid), 0);

  if (an >= inputCon[1]) {
    s = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(s);
