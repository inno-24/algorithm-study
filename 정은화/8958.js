const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const test = input[0];

for (let i = 1; i <= test; i++) {
  let arr = input[i].split("");

  let count = 0;
  let result = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "O") {
      count++; //count 증가
      result += count; //result에 count 값 추가
    } else if (arr[j] === "X") {
      count = 0; // X만나면 0으로 초기화
    }
  }
  console.log(result);
}
