const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map(Number);

const COIN_LIST = input.slice(1).map(Number);
let result = 0;
for (let i = N - 1; i > -1; i--) {
  if (K >= COIN_LIST[i]) {
    result += Math.floor(K / COIN_LIST[i]);
    K %= COIN_LIST[i];
  }
  if (K === 0) break;
}
console.log(result);
