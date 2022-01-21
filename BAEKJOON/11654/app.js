const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim();
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(v => +v);

if (typeof(input) %1 !== 0) {
    const result = input.charCodeAt();
    console.log(result);
} else {
    const result = String.fromCharCode(input);
    console.log(result);
}