const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./박찬영/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 문자열 S가 "pi", "ka", "chu"를 이어 붙여서 만들 수 있으면 "YES"를 아니면 "NO"를 출력한다.

/**
 * 1. 정규식 이용
 * pi, ka, chu -> "" 처리하고, 길이가 0이라면 YES or NO
 */
const S1 = input[0];

const re = S1.replace(/pi|ka|chu/g, "");
console.log(re === "" ? "YES" : "NO");

/**
 * 2. 반복문 이용
 * 문자를 하나씩 넣어보면서, pi, ka, chu에 해당하지 않는다면 중도 return & NO
 */
const S = input[0];

let temp = "";
for (const c of S) {
  temp += c;

  if (temp.length == 4) return console.log("NO");
  if (temp === "pi") temp = "";
  if (temp === "ka") temp = "";
  if (temp === "chu") temp = "";
}

console.log(temp === "" ? "YES" : "NO");
