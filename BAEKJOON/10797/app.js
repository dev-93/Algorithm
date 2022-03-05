const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let count = 0;

const arr = input[0].split(' ').map(Number);
arr.forEach(v => {
  if(v === n) {
    count++;
  }
});

console.log(count);