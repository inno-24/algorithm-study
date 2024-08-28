const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 접근 방식
 *  - 이분탐색
 *  - 가장 긴 길이의 랜선을 기준으로,
 *    - mid값을 구해서, 해당 mid값으로 n개를 충족하는지 검사
 *
 * 변수 설명
 * - res : 최대 랜선의 길이 (정답)
 * - mid : 자르고자 하는 길이
 * - count : mid로 모든 랜선을 잘라봤을 때, 구해진 랜선의 개수
 */

const [k, n] = input.shift().split(" ").map(Number);

const arr = input.map(Number);

let left = 0;
let right = Math.max(...arr);

let res = 0;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let count = getCount(mid);
  if (n <= count) {
    res = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(res);

function getCount(x) {
  return arr.reduce((acc, cur) => {
    let count = Math.floor(cur / x);
    return acc + count;
  }, 0);
}
