const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let max = Number.NEGATIVE_INFINITY;

for (let i = 0; i < 9; i++) {
  max = max < Math.max(...arr[i]) ? Math.max(...arr[i]) : max;
}

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (arr[i][j] === max) {
      console.log(max);
      console.log(i + 1, j + 1);
      return;
    }
  }
}
