const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

input.pop();

let answer = "";

input.forEach((v, i) => {
  const [r, w, l] = v.split(" ");
  if (Math.sqrt((w / 2) ** 2 + (l / 2) ** 2) <= r) {
    answer += `Pizza ${i + 1} fits on the table.\n`;
  } else {
    answer += `Pizza ${i + 1} does not fit on the table.\n`;
  }
});

console.log(answer);
