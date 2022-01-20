const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
// 백준
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');;

const sum = +input[0] * +input[1] * +input[2];
const arr = sum.toString().split('').map(v => +v);

const map = new Map();

arr.forEach(v => {
    if(map.has(v)) {
        const newV = map.get(v);
        map.set(v, newV + 1);
    } else {
        map.set(v, 1);
    }
});

for (let i = 0; i < 10; i++) {
    if(map.get(i)) {
        console.log(map.get(i));
    } else {
        console.log(0);
    }
}