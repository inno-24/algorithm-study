const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const strings = input;

// 연속된 3개의 문자 중, 하나는 무조건 숫자가 나옴
if (!isNaN(strings[0])) {
  strings[0] = +strings[0];
  strings[1] = +strings[0] + 1;
  strings[2] = +strings[0] + 2;
}

if (!isNaN(strings[1])) {
  strings[0] = +strings[1] - 1;
  strings[1] = +strings[1];
  strings[2] = +strings[1] + 1;
}

if (!isNaN(strings[2])) {
  strings[0] = +strings[2] - 2;
  strings[1] = +strings[2] - 1;
  strings[2] = +strings[2];
}

const nextNumber = strings[2] + 1;

switch (true) {
  case nextNumber % 3 == 0 && nextNumber % 5 == 0:
    return console.log("FizzBuzz");
  case nextNumber % 3 == 0 && nextNumber % 5 != 0:
    return console.log("Fizz");
  case nextNumber % 3 != 0 && nextNumber % 5 == 0:
    return console.log("Buzz");
  default:
    console.log(nextNumber);
}
