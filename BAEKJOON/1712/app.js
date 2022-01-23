const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split(' ');

const a = +input[0];
const b = +input[1];
const c = +input[2];

if(c -b <= 0) {
    console.log(-1);
} else {
    const sum = Math.floor(a/(c - b));
    console.log(sum + 1);
}