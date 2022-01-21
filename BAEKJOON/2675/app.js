const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(v => +v);

input.shift();

input.forEach(v => {
    let str = "";
    const seperateStr = v.split(" ");
    
    seperateStr[1].split("").forEach(value => {
        str += value.repeat(seperateStr[0])
    });

    console.log(str);
})
