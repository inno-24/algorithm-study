const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./박광열/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);

// console.log(input);
const a = new Map();
const b = [];
for (i of input) {
  const x = i.split(" ");
  if (x.length > 1) a.set(x[0], x[1]);
  else {
    b.push(a.get(x[0].trim()));
  }
}
console.log(b.join("\n"));
