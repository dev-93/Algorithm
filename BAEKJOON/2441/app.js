const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = +require("fs").readFileSync(fileLocation).toString().trim();
let num = input;

let answer = "";

while (num !== 0) {
  answer += " ".repeat(input - num) + "*".repeat(num) + "\n";
  num--;
}

console.log(answer);
