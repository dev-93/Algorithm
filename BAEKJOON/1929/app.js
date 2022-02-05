const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ");

const m = input[0];
const n = input[1];

let arr = [];

for (let i = 2; i <= n; i++) {
  arr[i] = i;
}

for (let i = 2; i <= n; i++) {
  if (arr[i] === 0) {
    continue;
  }

  for (let j = i + i; j <= n; j += i) {
    arr[j] = 0;
  }
}

let answer = "";

arr.forEach((el, i) => {
  if (i >= m && el !== 0) {
    answer += el + "\n";
  }
});

console.log(answer);
