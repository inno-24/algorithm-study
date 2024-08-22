const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input);
// 자료구조 : 스택, 큐

class Oper {
  constructor() {
    this.arr = [];
  }

  // 정수 X를 덱의 앞에 넣는다.
  push_front(x) {
    this.arr.unshift(x);
  }

  // 정수 X를 덱의 뒤에 넣는다.
  push_back(x) {
    this.arr.push(x);
  }

  // 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop_front() {
    if (this.arr.length == 0) return -1;
    return this.arr.shift();
  }

  // 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  pop_back() {
    if (this.arr.length == 0) return -1;
    return this.arr.pop();
  }

  // 덱에 들어있는 정수의 개수를 출력한다.
  size() {
    return this.arr.length;
  }

  // 덱이 비어있으면 1을, 아니면 0을 출력한다.
  empty() {
    return this.arr.length == 0 ? 1 : 0;
  }

  // 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  front() {
    if (this.arr.length == 0) return -1;
    return this.arr[0];
  }

  // 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
  back() {
    if (this.arr.length == 0) return -1;
    return this.arr.at(-1);
  }
}

const n = +input.shift();
const oper = new Oper();
let result = [];

for (let i = 0; i < input.length; i++) {
  const [명령, 숫자] = input[i].split(" ");

  if (숫자 === undefined) {
    let res = oper[명령]();
    result.push(res);
  } else {
    oper[명령](숫자);
  }
}

console.log(result.join("\n"));
