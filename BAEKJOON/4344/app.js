const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

const exceptOne = input.filter((v,i) => i !== 0);

exceptOne.forEach(v => {
    const arr = v.split(" ").filter((v,i) => i !== 0).map(v => +v);
    const N = arr.length;
    const average = arr.reduce((acc, cur) => acc + cur) / N;

    let count = 0;

    arr.map(v => v > average && count++);
    const result = count / N * 100;
    console.log(`${result.toFixed(3)}%`);
});