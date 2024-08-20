const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

  compare(p_index, index) {
    if (this.heap[p_index][2] > this.heap[index][2]) {
      return true;
    }
    return false;
  }

  push(ele) {
    this.heap.push(ele);
    this.sort_up(this.heap.length - 1);
  }
  sort_up(index) {
    let p_index = Math.floor((index - 1) / 2);

    if (p_index >= 0 && this.compare(p_index, index)) {
      this.swap(this.heap, p_index, index);
      this.sort_up(p_index);
    }
  }

  pop() {
    if (this.heap.length == 1) return this.heap.pop();

    let res = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.sort_down(0);
    return res;
  }
  sort_down(p_index) {
    let l_index = p_index * 2 + 1;
    let r_index = p_index * 2 + 2;
    let len = this.heap.length;
    let s_index = p_index;

    if (l_index < len && this.compare(s_index, l_index)) s_index = l_index;
    if (r_index < len && this.compare(s_index, r_index)) s_index = r_index;

    if (s_index != p_index) {
      this.swap(this.heap, s_index, p_index);
      this.sort_down(s_index);
    }
  }

  swap(arr, p1, p2) {
    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
  }
}

for (let i = 1; ; i++) {
  const n = Number(input.shift());
  if (n === 0) break;

  const arr = input.splice(0, n).map((row) => row.split(" ").map(Number));
  const res = daik(n, arr);

  console.log(`Problem ${i}: ${res}`);
}

function daik(n, arr) {
  const heap = new MinHeap();
  const visit = Array.from({ length: n }, () => Array(n).fill(0));
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  heap.push([0, 0, arr[0][0]]);
  visit[0][0] = 1;

  while (heap.heap.length) {
    const [x, y, cost] = heap.pop();

    if (x === n - 1 && y === n - 1) {
      return cost;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (visit[nx][ny] === 0) {
        visit[nx][ny] = 1;
        heap.push([nx, ny, cost + arr[nx][ny]]);
      }
    }
  }
}
