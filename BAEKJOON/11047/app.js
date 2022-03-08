const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

let temp = input.shift().split(" ");
let N = +temp[0];
let K = +temp[1];

let count = 0;
const money = input.map(Number);

while (K !== 0) {
  if (K > money[N - 1]) {
    const div = K / money[N - 1];
    count += Math.floor(div);
    K = K - money[N - 1] * Math.floor(div);
    continue;
  }
  for (let i = 0; i < N; i++) {
    if (K < money[i]) {
      const div = K / money[i - 1];
      count += Math.floor(div);
      K = K - money[i - 1] * Math.floor(div);
    } else if (K === money[i]) {
      count++;
      console.log(count);
      return;
    }
  }
}

console.log(count);
