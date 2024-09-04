const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let idx = 0;
let num = 0;
let result;
for (let i = 0; i < input.length; i++) {
  if (!isNaN(Number(input[i]))) {
    idx = i;
    num = Number(input[i]);

    // console.log(idx, num);

    if (idx === 0) {
      num += 3;
    } else if (idx === 1) {
      num += 2;
    } else {
      num += 1;
    }

    // console.log(num);

    switch (true) {
      case num % 15 === 0:
        result = "FizzBuzz";
        break;
      case num % 3 === 0:
        result = "Fizz";
        break;
      case num % 5 === 0:
        result = "Buzz";
        break;
      default:
        result = num;
        break;
    }

    return console.log(result);
  }
}
