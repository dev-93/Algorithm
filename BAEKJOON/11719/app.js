const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = require("fs").readFileSync(fileLocation).toString();

console.log(input);
