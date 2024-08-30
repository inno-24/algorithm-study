const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * dp 활용, [i-2] + [i-1] => [i]
 */
const memory = [
  [1, 0],
  [0, 1],
];

let T = +input.shift();
while (T--) {
  const n = +input.shift();

  if (memory[n]) {
    console.log(memory[n].join(" "));
    continue;
  }

  for (let i = memory.length; i <= n; i++) {
    const [xx, yy] = memory[i - 2];
    const [x, y] = memory[i - 1];
    memory.push([xx + x, yy + y]);
  }
  console.log(memory[n].join(" "));
}

// console.table(memory);

/**
 * 단순 접근시, 시간초과 발생
 */
// let T = +input.shift();

// while (T--) {
//   const n = +input.shift();
//   const res = [0, 0];
//   fibo(res, n);

//   console.log(res.join(" "));
// }

// function fibo(res, x) {
//   if (x == 0) {
//     res[0] += 1;
//     return;
//   }

//   if (x == 1) {
//     res[1] += 1;
//     return;
//   }

//   fibo(res, x - 1);
//   fibo(res, x - 2);
// }
