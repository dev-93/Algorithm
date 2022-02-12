const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [_, M] = input[0].split(" ").map(Number);
const tree = input[1].split(" ").map(Number);

let left = 0;
let right = 2000000000;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const len = tree.reduce((acc, cur) => {
    if (cur - mid > 0) {
      return acc + (cur - mid);
    } else {
      return acc;
    }
  }, 0);

  if (len >= M) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(right);
