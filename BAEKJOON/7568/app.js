const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const person = arr.map((kgCm) => kgCm.split(" ").map((num) => parseInt(num)));

const rank = [];

for (let i = 0; i < N; i++) {
  let counter = 0;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      if (person[i][0] < person[j][0] && person[i][1] < person[j][1]) {
        counter++;
      }
    }
  }
  rank.push(counter + 1);
}

console.log(rank.join(" "));
