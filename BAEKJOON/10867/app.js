const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split('\n');

const arr = input[1].split(' ').map(Number);
const set = new Set(arr);

const result = [];

for (let value of set) {
  result.push(value);
}

console.log(result.sort((a,b) => a-b).join(' '));
