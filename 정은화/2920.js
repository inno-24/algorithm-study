const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const scale = "12345678";

if (input.join("") === scale) {
  return console.log("ascending");
} else if (input.reverse().join("") === scale) {
  return console.log("descending");
} else {
  return console.log("mixed");
}
