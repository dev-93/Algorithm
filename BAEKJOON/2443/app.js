const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = +require("fs").readFileSync(fileLocation).toString().trim();

let num = input;
let count = 0;
let answer = "";

while (num !== 0) {
  answer += `${" ".repeat(count)}${"*".repeat((num - 1) * 2 + 1)}\n`;
  num--;
  count++;
}

console.log(answer);
