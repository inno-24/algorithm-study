const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 문제 접근
 *  - 사대를 오름차순으로 정렬
 *  - 각 동물들을 순회하면서, 사대 이분탐색
 *    - 특정 사대에 dist <= L 이라면, count+1
 *    - 특정 사대보다 index가 작다면, 왼쪽으로 이분탐색
 *    - 특정 사대보다 index가 크다면, 오른쪽으로 이분탐색
 */

const [M, N, L] = input.shift().split(" ").map(Number);

const arr = input.shift().split(" ").map(Number);

const N_arr = input.map((row) => row.split(" ").map(Number));

arr.sort((a, b) => a - b);

// 동물 순회
// L = 4
let count = 0;
for (const [a, b] of N_arr) {
  bs(a, b);
}
console.log(count);

function bs(a, b) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let dist = getDist(arr[mid], a, b);
    if (dist <= L) {
      count++;
      break;
    }

    if (a < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
}

function getDist(pos, a, b) {
  return Math.abs(pos - a) + b;
}
