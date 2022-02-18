const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const gcd = (n, m) => {
  if (m === 0) return n;
  return gcd(m, n % m);
};

const lcm = (n, m) => (n * m) / gcd(n, m);

arr.forEach((v) => {
  const temp = v.split(" ").map(Number);
  console.log(lcm(temp[0], temp[1]));
});
