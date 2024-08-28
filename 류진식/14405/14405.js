const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(input) {
  let i = 0;
  while (i < input.length) {
    if (input.startsWith("pi", i)) {
      i += 2;
    } else if (input.startsWith("ka", i)) {
      i += 2;
    } else if (input.startsWith("chu", i)) {
      i += 3;
    } else {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution(input));
