const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

input.pop();

let answer = "";

input.forEach((v) => {
  const arr = v.split(" ").map(Number);
  arr.sort((a, b) => a - b);

  if (Math.pow(arr[2], 2) === Math.pow(arr[1], 2) + Math.pow(arr[0], 2)) {
    answer += "right" + "\n";
  } else {
    answer += "wrong" + "\n";
  }
});

console.log(answer);
