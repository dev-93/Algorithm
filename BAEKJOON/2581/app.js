const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, M] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = [];
let sum = 0;

for (let i = N; i <= M; i++) {
  for (let j = 2; j <= i; j++) {
    if (j * j > i) {
      arr.push(i);
      sum += i;
      break;
    }
    if (i % j === 0) {
      break;
    }
  }
}

if (arr.length) {
  console.log(sum);
  console.log(arr[0]);
} else {
  console.log(-1);
}
