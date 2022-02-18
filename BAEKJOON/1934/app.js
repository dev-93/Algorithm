const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

function gcd(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function lcm(a, b) {
  let g = gcd(a, b);
  return (a / g) * b;
}

arr.forEach((v) => {
  const temp = v.split(" ").map(Number);
  console.log(lcm(temp[0], temp[1]));
});
