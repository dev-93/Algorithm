const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().split('\n');

input.forEach(v => {
  console.log(v);
})