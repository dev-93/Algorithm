const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const answer = [];

input.forEach((v) => {
  const num = v.split(" ").map(Number);
  let count = 0;

  for (let i = num[0]; i <= num[1]; i++) {
    const zeroCount = i
      .toString()
      .split("")
      .filter((v) => v === "0").length;
    count += zeroCount;
  }

  answer.push(count);
});

console.log(answer.join("\n"));
