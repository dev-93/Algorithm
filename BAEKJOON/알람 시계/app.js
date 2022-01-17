const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ').map(v => +v);
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split(' ').map(v => +v);

let [a,b] = input;

if (b < 45) {
    const temp = Math.abs(b - 45);
    b = 60 - temp;
    if( a === 0) {
        a = 23;
    } else {
        a --;
    }
} else {
    b = b - 45;
}

const result = `${a} ${b}`;

console.log(result);
