const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [repeatNumber, ...testCaseList] = input.split('\n');

for (let i = 0; i < repeatNumber; i++) {
    let testCase = testCaseList[i].split('');
    let result = 0;
    let count = 0;

    for (let j = 0; j < testCase.length; j++) {
        if (testCase[j] === 'O') {
            count++;
            result += count;
        } else {
            count = 0;
        }
    }

    console.log(result);
}
