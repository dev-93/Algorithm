const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  input.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0) % 10
);
