const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const arr = input.map(v => +v % 42);
const set = new Set(arr);

console.log(set.size);