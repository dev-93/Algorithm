const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const first = input[0].split(" ");
const M = first[1];
const N = first[0];

const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let closestNum = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = arr[i] + arr[j] + arr[k];
      const gap = M - sum;
      if (gap >= 0 && closestNum <= sum) {
        closestNum = sum;
      }
    }
  }
}

console.log(closestNum);
