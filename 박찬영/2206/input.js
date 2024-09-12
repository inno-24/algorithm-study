const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/2206/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const map = input.map((r) => r.split("").map(Number));
const visit = Array(N)
  .fill()
  .map(() => Array(M).fill(0));
const breaker_visit = Array(N)
  .fill()
  .map(() => Array(M).fill(0));

/// [x,y,count, 벽부쉈는지 여부]
const q = [[0, 0, 1, 0]]; // 시작하는 칸도 포함해서 센다.
visit[0][0] = 1;

let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
let index = 0;
while (index < q.length) {
  let [x, y, count, flag] = q[index++];

  if (x == N - 1 && y == M - 1) {
    console.log(count);
    return;
  }

  for (let d = 0; d < 4; d++) {
    let nx = x + dx[d];
    let ny = y + dy[d];

    // 경계면
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    /**
     * 총 3가지 유형이 있음
     * 1. 이미 벽을 부순 사람이, 벽을 부수지 못하고 가는 경우
     * 2. 벽을 부수지 않은 사람이, 새로 벽을 부수고 가는 경우
     * 3. 벽을 부수지 않은 사람이, 벽을 부수지 않고 가는 경우
     */
    // 이미 벽을 부순 사람이라면, breaker_visit로 관리
    // 벽을 부수지 않은 사람이라면, visit로 관리

    // 1. 이미 벽을 부순 사람이, 벽을 부수지 못하고 가는 경우
    if (flag == 1) {
      if (map[nx][ny] == 1) continue;
      if (breaker_visit[nx][ny]) continue;

      breaker_visit[nx][ny] = 1;
      q.push([nx, ny, count + 1, flag]);
    }

    // 벽을 부수지 않은 사람이,
    if (flag == 0) {
      // 2. 새로 벽을 부수고 가는 경우
      if (map[nx][ny] == 1) {
        if (breaker_visit[nx][ny]) continue;

        breaker_visit[nx][ny] = 1;
        q.push([nx, ny, count + 1, 1]);
      }

      // 3. 벽을 부수지 않고 가는 경우
      if (map[nx][ny] == 0) {
        if (visit[nx][ny]) continue;

        visit[nx][ny] = 1;
        q.push([nx, ny, count + 1, flag]);
      }
    }
  }
}

console.log(-1);
