const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

// 절대로 FizzBuzz가 연속되지 않을 것 같다고 생각(주어지는 값에는 숫자가 무조건 포함될 것이다.)

// 변환해주는 함수
const formatFizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
};

for (let i = 0; i < input.length; i++) {
    let number = input[i];

    // 숫자인 값을 찾았을 때
    if (!isNaN(number)) {
        // 해당 index가 3보다 작을 때 3이 될 때까지 반복 ( 4번째 값 찾기 )
        while (i < 3) {
            number += 1;
            i += 1;
        }

        // number => 4번째 숫자 -> 변환
        console.log(formatFizzBuzz(number));
    }
}
