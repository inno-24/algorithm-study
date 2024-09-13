const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const answer = [];

function prime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


for (const a of input.slice(1)) {
  let b = +a;
  while (!prime(b)) {
    b += 1;
  }
  answer.push(b);
}

console.log(answer.join("\n"));
