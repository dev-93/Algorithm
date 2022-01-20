const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const arr = [];

input.forEach(v => {
    arr.push(+v % 42);
})

const set = new Set([...arr]);
console.log(set.size);
