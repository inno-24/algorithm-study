const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const patterns = ['pi', 'ka', 'chu'];

// kpia일 때 pi를 제거하고 ka가 되어서 다음에 제거되는 오류(해결: 빈공간이나 _와 같은 값을 넣어서 처리를 하고 나중에 해당 부분을 삭제하는 방식)

for (const pattern of patterns) {
    input = input.replaceAll(pattern, ' ');
}

input = input.replaceAll(' ', ''); // 96ms
// input = input.trim(); trim() 4ms 더 오래걸림 100ms

console.log(input === '' ? 'YES' : 'NO');
