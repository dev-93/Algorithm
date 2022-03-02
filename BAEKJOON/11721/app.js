const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs").readFileSync(fileLocation).toString().trim();

const N = Math.ceil(input.length / 10);

let answer = "";

for (let i = 0; i < N; i++) {
  const temp = input.slice(10 * i, 10 * (i + 1));
  answer += `${temp}\n`;
}

console.log(answer);
