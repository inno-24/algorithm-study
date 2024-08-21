// const input1 = [
//   15,
//   "push_back 1",
//   "push_front 2",
//   "front",
//   "back",
//   "size",
//   "empty",
//   "pop_front",
//   "pop_back",F
//   "pop_front",
//   "size",
//   "empty",
//   "pop_back",
//   "push_front 3",
//   "empty",
//   "front",
// ];
// const input2 =[
//   22,
//   "front",
//   "back",
//   "pop_front",
//   "pop_back",
//   "push_front 1",
//   "front",
//   "pop_back",
//   "push_back 2",
//   "back",
//   "pop_front",
//   "push_front 10",
//   "push_front 333",
//   "front",
//   "back",
//   "pop_back",
//   "pop_back",
//   "push_back 20",
//   "push_back 1234",
//   "front",
//   "back",
//   "pop_back",
//   "pop_back"
// ]

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const list = [];
const output = [];
for (const x of input.slice(1)) {
  const z = x.split(" ");
  switch (z[0]) {
    case "push_back":
      list.push(z[1]);
      break;
    case "push_front":
      list.unshift(z[1]);
      break;
    case "pop_front":
      output.push(list.shift() || -1);
      break;
    case "pop_back":
      output.push(list.pop() || -1);
      break;
    case "size":
      output.push(list.length);
      break;
    case "empty":
      output.push((list.length == 0) * 1);
      break;
    case "front":
      output.push(list[0] || -1);
      break;
    case "back":
      output.push(list[list.length - 1] || -1);
      break;
  }
}
console.log(output.join("\n"));
