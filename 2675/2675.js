const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// 처음 풀었을 때
input.forEach((item) => {
    const [number, string] = item.split(' ');

    // 해당 문자가 있을 때만
    if (string) {
        let result = '';
        let array = [...string];

        array.map((char) => {
            result += char.repeat(number); // repeat을 사용하여 number만큼 반복하여 result에 저장
        });

        return console.log(result); // 콘솔로 반환
    }
});

// 4ms 줄이기 (map -> for문으로 변경)
input.forEach((item) => {
    const [number, string] = item.split(' ');

    // 해당 문자가 있을 때만
    if (string) {
        let result = '';

        for (let i = 0; i < string.length; i++) {
            result += string[i]?.repeat(number);
        }

        return console.log(result); // 콘솔로 반환
    }
});
