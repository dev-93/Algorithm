const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const N = input[0];
const arr = input[1].split(' ');
const max = Math.max(...arr);

const sum = arr.reduce((acc,cur) => {
    return +acc + (+cur / max *100);
}, 0);

console.log(sum / N);