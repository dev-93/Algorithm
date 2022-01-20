const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n')[1].split(' ').map(v => +v);
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n')[1].split(' ').map(v => +v);
const max = Math.max(...input);
const min = Math.min(...input);
console.log(`${min} ${max}`)