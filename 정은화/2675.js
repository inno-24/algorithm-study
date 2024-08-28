const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const test = input[0];

for (let i = 1; i <= test; i++) {
  const [n, string] = input[i].split(" ");
  const result = string.split("").map((i) => i.repeat(Number(n)));
  console.log(result.join(""));
}
