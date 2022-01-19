// 더하기 사이클

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split(' ').map(v => +v);

let newNum = +input;

let count = 0;

while(newNum !== input) {
    const arr = newNum.toString().split('');
    const result = +arr[0] + +arr[1];
    newNum = `${arr[1]}${result > 9 ? result - 10 : result}`;
    count ++;
}

console.log(count);
