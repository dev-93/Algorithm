const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ').map(v => +v)[0];
// 백준
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v)[0];

if (((input % 4 === 0) && (input % 100 !== 0)) || (input % 400 === 0)) {
    console.log(1);
} else {
    console.log(0)
}