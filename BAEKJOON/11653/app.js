const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = +require("fs").readFileSync(fileLocation).toString().trim();

const arr = [];
let N = input;
let num = 2;

while (true) {
  if (N % num === 0) {
    arr.push(num);
    N = N / num;
    num = 2;
  } else {
    num++;
  }

  if (num > N) {
    break;
  }
}

const result = arr.sort((a, b) => a - b).join("\n");
console.log(result);
