const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const [count, ...list] = input;

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i < list.length; i++) {
    for (let j = list[i]; j < Infinity; j++) {
        if (isPrime(j)) {
            console.log(j);
            break;
        }
    }
}
