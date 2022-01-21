const fileLocation = "./input.txt";
// const fileLocation = "/dev/stdin";

const input = require('fs').readFileSync(fileLocation).toString().trim().split(' ');

console.log(input);
const numArr = [];

input.forEach(v => {
    const reverseNum = v.split('').reverse().join('');
    numArr.push(reverseNum);
});

console.log(Math.max(...numArr));