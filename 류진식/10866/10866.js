const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function processCommands(commands) {
  const results = [];
  const deque = [];

  commands.forEach((command) => {
    const [action, value] = command.split(" "); // 명령어와 값을 분리
    switch (action) {
      case "push_front":
        deque.unshift(value);
        break;
      case "push_back":
        deque.push(value);
        break;
      case "pop_front":
        results.push(deque.length ? deque.shift() : -1);
        break;
      case "pop_back":
        results.push(deque.length ? deque.pop() : -1);
        break;
      case "size":
        results.push(deque.length);
        break;
      case "empty":
        results.push(deque.length ? 0 : 1);
        break;
      case "front":
        results.push(deque.length ? deque[0] : -1);
        break;
      case "back":
        results.push(deque.length ? deque[deque.length - 1] : -1);
        break;
      default:
        break;
    }
  });

  return results.join("\n");
}

console.log(processCommands(input));
