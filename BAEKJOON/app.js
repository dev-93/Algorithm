const fileLocation = "./input.txt";
// const fileLocation = "/dev/stdin";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

console.log(input);