const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/18866/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();

const arr = input.map((r) => r.split(" ").map(Number));

// 젊은 날, 늙은 날의 최대/최소를 담을 배열
const young = Array(N)
  .fill()
  .map(() => [0, 0]);
const old = Array(N)
  .fill()
  .map(() => [0, 0]);

let max_happy = 0;
let min_happy = Infinity;
let max_piro = 0;
let min_piro = Infinity;

/**
 * 문제 풀이
 * 젊은 날 : 0 index부터 낮은행복/높은피로 를 누적
 * 늙은 날 : last index부터 높은행복/낮은피로 를 누적
 *
 * 젊은 날과 늙은 날을 비교해서, 젊은날의 행복이 크고/젊은날의 피로가 작다면 => 젊은 날임
 */

// 젊은 날
for (let i = 0; i < N; i++) {
  const [h, p] = arr[i];
  if (h !== 0 && min_happy > h) min_happy = h;
  if (p !== 0 && max_piro < p) max_piro = p;

  young[i][0] = min_happy;
  young[i][1] = max_piro;
}

// console.table(young);

// 늙은 날
for (let i = N - 1; i >= 0; i--) {
  const [h, p] = arr[i];

  if (h !== 0 && max_happy < h) max_happy = h;
  if (p !== 0 && min_piro > p) min_piro = p;

  old[i][0] = max_happy;
  old[i][1] = min_piro;
}

// console.table(old);

let res = 0;
for (let i = 0; i < N - 1; i++) {
  // 젊은날의 행복이 늙은날의 행복보다 크고, 젊은날의 피로가 늙은날의 피로보다 작다면,
  if (young[i][0] > old[i + 1][0] && young[i][1] < old[i + 1][1]) res = i + 1;
}

if (res === 0) res = -1;
console.log(res);
