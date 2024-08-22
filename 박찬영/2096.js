const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

//* NodeJS로는 못품 :: NodeJS는 기본적으로 4MB*2를 들고 있기 때문에

//* 2번쨰 방법 : Linked List:: 메모리 초과
class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor([a, b, c]) {
    this.row = [new Node(a), new Node(b), new Node(c)];
  }

  insert([a, b, c], flag) {
    // 기존, 위에 있는 row
    const [A, B, C] = this.row;

    // 새로운 row
    const nodeA = new Node(a);
    const nodeB = new Node(b);
    const nodeC = new Node(c);

    if (flag === "max") {
      nodeA.value += Math.max(A.value, B.value);
      nodeB.value += Math.max(A.value, B.value, C.value);
      nodeC.value += Math.max(B.value, C.value);
    } else {
      nodeA.value += Math.min(A.value, B.value);
      nodeB.value += Math.min(A.value, B.value, C.value);
      nodeC.value += Math.min(B.value, C.value);
    }

    const newRow = [nodeA, nodeB, nodeC];

    this.row = newRow;
  }

  getMax() {
    return Math.max(...this.row.map((e) => e.value));
  }

  getMin() {
    return Math.min(...this.row.map((e) => e.value));
  }
}

const n = +input.shift();

const arr = input.shift().split(" ").map(Number);
const maxList = new LinkedList(arr);
const minList = new LinkedList(arr);

for (let i = 1; i < n; i++) {
  const arr = input.shift().split(" ").map(Number);
  maxList.insert(arr, "max");
  minList.insert(arr, "min");
}

console.log(maxList);

console.log(maxList.getMax(), minList.getMin());

// * 1번째 방법 : DP::메모리 초과
// const n = +input.shift();
// const arr = input.map((row) => row.split(" ").map(Number));

// const minDP = Array(n)
//   .fill()
//   .map(() => Array(3).fill(0));
// const maxDP = Array(n)
//   .fill()
//   .map(() => Array(3).fill(0));

// // console.log({ minDP, maxDP });
// console.table(minDP);
// console.table(maxDP);

// // max DP부터
// maxDP[0][0] = arr[0][0];
// maxDP[0][1] = arr[0][1];
// maxDP[0][2] = arr[0][2];
// minDP[0][0] = arr[0][0];
// minDP[0][1] = arr[0][1];
// minDP[0][2] = arr[0][2];

// for (let i = 1; i < n; i++) {
//   let prev = i - 1;
//   maxDP[i][0] = Math.max(maxDP[prev][0], maxDP[prev][1]) + arr[i][0];
//   maxDP[i][1] =
//     Math.max(maxDP[prev][0], maxDP[prev][1], maxDP[prev][2]) + arr[i][1];
//   maxDP[i][2] = Math.max(maxDP[prev][1], maxDP[prev][2]) + arr[i][2];

//   minDP[i][0] = Math.min(minDP[prev][0], minDP[prev][1]) + arr[i][0];
//   minDP[i][1] =
//     Math.min(minDP[prev][0], minDP[prev][1], minDP[prev][2]) + arr[i][1];
//   minDP[i][2] = Math.min(minDP[prev][1], minDP[prev][2]) + arr[i][2];
// }
// console.table(maxDP);
// console.table(minDP);

// console.log(Math.max(...maxDP[n - 1]), Math.min(...minDP[n - 1]));
