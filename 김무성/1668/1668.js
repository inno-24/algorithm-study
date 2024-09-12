const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, ...list] = input.map(Number);
const reverse = [...list].reverse();

let leftMax = list[0];
let leftCount = 1;

for (let i = 1; i < N; i++) {
    if (list[i] > leftMax) {
        leftCount++;
        leftMax = list[i];
    }
}

let rightMax = reverse[0];
let rightCount = 1;

for (let i = 1; i < N; i++) {
    if (reverse[i] > rightMax) {
        rightCount++;
        rightMax = reverse[i];
    }
}

console.log(leftCount);
console.log(rightCount);
