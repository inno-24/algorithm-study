const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("").reverse();
const dict = { pi: true, ka: true, chu: true };
let List = "";
while (input.length > 0) {
  List += input.pop();
  if (2 <= List.length && List.length < 4 && dict[List]) {
    List = "";
  } else if (List.length >= 4) {
    break;
  }
}
if (List == "" && input.length == 0) {
  console.log("YES");
} else {
  console.log("NO");
}
