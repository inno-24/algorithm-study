const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const newInput = input.map((char) => char.replace('\r', ''));

for (let i = 0; i < newInput.length - 1; i++) {
    if (newInput[i] === [...newInput[i]].reverse().join('')) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
