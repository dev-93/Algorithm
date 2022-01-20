const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

input.shift();

for(let i = 0; i < input.length; i++) {
    const temp = input[i].split("X");
    let sum = 0;
    temp.forEach(v => {
        if(v) {
            const N = v.length;
            sum += Math.round((N *(N+1)) / 2);
        }
    });
    console.log(sum);
}