const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
if (n == 0) {
  console.log(0);
  return;
}

// 최대 힙
class Heap {
  constructor() {
    this.heap = [];
    this.day = 0;
  }

  compare(p_index, index) {
    return this.heap[p_index][0] < this.heap[index][0];
  }

  push(ele) {
    this.day = Math.max(this.day, ele[1]);

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

/**
 * 문제 접근
 *  - 최대 힙 우선순위 큐 활용
 *  - 강연 마지막날 ~ 1일날 순서로 순회하면서,
 *  - 우선순위에는 강연이 [가능한 것]만 push하고,
 *  - 우선순위안에서 가장 비싼 것을 빼내어 합산처리
 */

const arr = input.map((r) => r.split(" ").map(Number));

// 일자별 오름차순 정렬
arr.sort((a, b) => a[1] - b[1]);

let result = 0;
let day = arr[arr.length - 1][1];
const heap = new Heap();

// 마지막 날 -> 1일날
for (; day >= 1; day--) {
  while (arr.length) {
    const [p, d] = arr.pop();

    // 가능한 강연일때, 우선순위에 push
    if (day <= d) heap.push([p, d]);
    else {
      // 불가능한 강연일 때, 빼내었던 강연을 다시 집어넣고 break;
      arr.push([p, d]);
      break;
    }
  }

  if (heap.heap.length) {
    // 가능한 강연 중, 가장 비싼것을 뺴서 합산처리
    const [p, d] = heap.pop();
    result += p;
  }
}
console.log(result);
