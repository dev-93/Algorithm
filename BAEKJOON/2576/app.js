const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = input.filter((v) => v % 2 !== 0 && v);

if (arr.length > 0) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  console.log(sum);
  console.log(Math.min(...arr));
} else {
  console.log(-1);
}
