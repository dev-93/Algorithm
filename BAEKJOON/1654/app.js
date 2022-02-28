const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

const arr = input.map(Number).sort((a, b) => a - b);

let max = Math.max(...arr);
let min = 1;

while (min <= max) {
  let mid = parseInt((max + min) / 2);
  let count = arr
    .map((line) => parseInt(line / mid))
    .reduce((a, b) => a + b, 0);

  if (count >= K) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
