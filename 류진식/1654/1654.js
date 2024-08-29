const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [K, N] = input[0].split(" ").map(Number);
const lengths = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...lengths);

const getCableCount = (length) => {
  return lengths.reduce(
    (count, cable) => count + Math.floor(cable / length),
    0
  );
};

let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = getCableCount(mid);

  if (count >= N) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
