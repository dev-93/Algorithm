const fileLocation = "./input.txt";
// const fileLocation = "/dev/stdin";

const input = require('fs').readFileSync(fileLocation).toString().trim().split(' ');

const result = input.filter(v => v !== "");
console.log(result.length);