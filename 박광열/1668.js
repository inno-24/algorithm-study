const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./박광열/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const Rinput = [...input].reverse();
const max = [0, 0];
const answer = [0, 0];
for (i in Rinput) {
  if (+max[1] < +Rinput[i]) {
    max[1] = Rinput[i];
    answer[1] += 1;
  }
  if (+max[0] < +input[i]) {
    max[0] = input[i];
    answer[0] += 1;
  } 
}
console.log(answer.join("\n"));
