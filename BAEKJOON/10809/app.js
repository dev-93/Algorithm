const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(v => +v);

const temp = [];

for (let i = 97; i <= 122; i++) {
    const findStr = String.fromCharCode(i);
    const num = input.indexOf(findStr);
    temp.push(num);
}

const result = temp.join(' ');
console.log(result);
