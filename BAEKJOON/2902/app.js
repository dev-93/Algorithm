const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("-");

let answer = "";

input.forEach((v) => (answer += v[0]));

console.log(answer);
