const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

input.shift();

input.sort((a, b) => a - b);

input.forEach(v => console.log(+v));