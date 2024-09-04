const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number); //  3. number로 변경
const numberList = input[1].split(' ').map(Number); // 3. number로 변경

let result = 0; // 반환 및 값 저장 변수

// console.log(typeof N, typeof M); // 2. N, M 타입이 string;

for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
        for (let k = j + 1; k < N; k++) {
            // console.log(typeof numberList[i]); // 1. 처음에 이상한 값이 나와서 타입 확인 string

            // console.log('-------------------');
            // console.log(numberList[i]);
            // console.log(numberList[j]);
            // console.log(numberList[k]);
            // console.log('-------------------');

            let sum = numberList[i] + numberList[j] + numberList[k];
            // console.log(`저장값 : ${sum}`);

            if (sum <= M && sum > result) {
                result = sum;
            }
        }
    }
}

console.log(result);
