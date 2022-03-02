const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = input[0];

const answer = [];

for (let i = 1; i <= N; i++) {
  const str = input[i].split(" ");
  const result = str[1].slice(0, str[0] - 1) + str[1].slice(str[0]);
  answer.push(result);
}

console.log(answer.join("\n"));
