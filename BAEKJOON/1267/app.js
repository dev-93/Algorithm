const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);

const y = arr.reduce((acc, cur) => {
  let temp = 0;
  if (cur % 30 === 0) {
    temp = Math.ceil(cur / 30) + 1;
  } else {
    temp = Math.ceil(cur / 30);
  }
  const result = temp * 10;
  return acc + result;
}, 0);

const m = arr.reduce((acc, cur) => {
  let temp = 0;
  if (cur % 60 === 0) {
    temp = Math.ceil(cur / 60) + 1;
  } else {
    temp = Math.ceil(cur / 60);
  }
  const result = temp * 15;
  return acc + result;
}, 0);

if (y > m) {
  console.log(`M ${m}`);
} else if (y === m) {
  console.log(`Y M ${m}`);
} else {
  console.log(`Y ${y}`);
}
