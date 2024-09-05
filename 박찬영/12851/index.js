const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/12851/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const visit = Array(100_001).fill(Infinity);

// BFS
const q = [[N, 0]];
visit[q] = 0;

// 1 4
// 1 -> 2 -> 4
// 1 -> 2 -> 4

// 2초
// 3초 4초

let fastest_time = Infinity;
let fastest_ways = 0;

// array shift로 하니 시간초과
let index = 0;
while (q.length > index) {
  const [pos, time] = q[index++];

  // 가장 빠르게 찾는 방법이 있다면, 그 뒤는 안봐도 됨
  if (fastest_time < time) break;

  if (pos == K) {
    if (fastest_time > time) fastest_ways = 0;

    fastest_time = time;
    fastest_ways += 1;
    continue;
  }

  for (const next of [pos - 1, pos + 1, pos * 2]) {
    if (next < 0 || next > 100_000) continue; // 경계면

    // 다음에 방문하려는 곳이, 현재시간+1보다 작다면 => 방문할 필요없음(어차피 가장 빠른 시간이 아님)
    if (visit[next] < time + 1) continue;

    visit[next] = time + 1;
    q.push([next, time + 1]);
  }
}

console.log([fastest_time, fastest_ways].join("\n"));
