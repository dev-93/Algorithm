const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const arr = Array(20)
  .fill()
  .map((_, i) => i + 1);

input.map((v) => {
  const temp = v.split(" ");
  const reverse = arr.slice(temp[0] - 1, temp[1]).reverse();

  const t = arr.splice(temp[0] - 1, temp[1] - temp[0] + 1, ...reverse);
});

console.log(arr.join(" "));
