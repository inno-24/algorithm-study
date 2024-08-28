const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [info, ...list] = input.split('\n');

const [k, n] = info.split(' ');

let minNumber = 1;
let maxNumber = Math.max(...list);

let result = 0; // 반환값

// 이진 탐색
while (minNumber <= maxNumber) {
    const mid = Math.floor((minNumber + maxNumber) / 2); // 가운데 숫자구하기
    let count = 0;

    // k만큼 순회
    for (let i = 0; i < k; i++) {
        count += Math.floor(list[i] / mid);
    }

    if (count >= n) {
        result = mid; // 성공 일단 저장
        minNumber = mid + 1; // 시작 값을 더 큰 수로 진행하기
    } else {
        maxNumber = mid - 1; // 시작 값을 더 작은 수 설정하기
    }
}

console.log(result);
