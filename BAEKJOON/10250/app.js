const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const num = Number(n);
const newArr = arr.map((v) => v.split(" "));
let answer = "";

for (let i = 0; i < num; i++) {
  let H = newArr[i][0];
  let Count = newArr[i][2];

  let answerH = Count % H;

  if (!answerH) {
    answerH = H;
  }

  let answerW = Math.ceil(Count / H);
  answerW < 10 ? (answerW = answerW.toString().padStart(2, "0")) : answerW;

  answer += `${answerH}${answerW}` + "\n";
}

console.log(answer);
