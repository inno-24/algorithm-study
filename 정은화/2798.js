const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ");
const arr = input[1].split(" ");
let result;

const combi = (arr) => {
  const resultArr = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (Number(arr[i]) + Number(arr[j]) + Number(arr[k]) <= m) {
          resultArr.push(Number(arr[i]) + Number(arr[j]) + Number(arr[k]));
        }
      }
    }
  }

  result = Math.max(...resultArr);

  return console.log(result);
};

combi(arr);
