const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');;

const strArrToNumArr = input.map(v => +v);
const max = Math.max(...strArrToNumArr);
const findIndex = strArrToNumArr.indexOf(max);
console.log(max);
console.log(findIndex + 1);