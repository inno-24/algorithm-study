const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

// 플로이드 워셜 map
const map = Array(N + 1)
  .fill()
  .map(() => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) map[i][i] = 0;
for (let i = 0; i < M; i++) {
  const [a, b, c] = input.shift().split(" ").map(Number);
  map[a][b] = c;
}

const K = +input.shift();
const 친구들이사는도시 = input.shift().split(" ").map(Number);

// console.table(map);
// 최단 거리 업데이트
for (let k = 1; k <= N; k++) {
  for (let a = 1; a <= N; a++) {
    for (let b = 1; b <= N; b++) {
      map[a][b] = Math.min(map[a][k] + map[k][b], map[a][b]);
    }
  }
}
// console.table(map);

// 친구들의 왕복시간 중 최대가 최소가 되는 경우 => 왕복시간이 모두 동일해야 함
let res = [];
let min = Infinity;

for (let 도시번호 = 1; 도시번호 <= N; 도시번호++) {
  let max = 0;
  for (const 친구 of 친구들이사는도시) {
    let time = map[친구][도시번호] + map[도시번호][친구];
    if (time == Infinity) continue;

    max = Math.max(max, time);
  }

  if (min > max) {
    min = max;
    res = [];
  }
  if (min == max) {
    res.push([도시번호, max]);
  }
}

// 가능한 도시가 여러 개인 경우, 오름차순 출력
res.sort((a, b) => a[0] - b[0]);
console.log(res.map((e) => e[0]).join(" "));
