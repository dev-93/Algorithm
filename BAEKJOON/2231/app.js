const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = +require("fs").readFileSync(fileLocation).toString().trim();

let count = 1;
const result = [];

while (count < input) {
  const arr = count.toString().split("").map(Number);
  const sum = arr.reduce((acc, cur) => acc + cur, count);
  if (sum === input) {
    result.push(count);
  }
  count++;
}

console.log(result.length > 0 ? Math.min(...result) : 0);
