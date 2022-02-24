const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const answer = [];

input.forEach((v) => {
  const oneCount = v.split(" ").filter((v) => +v).length;
  switch (oneCount) {
    case 1:
      answer.push("C");
      break;
    case 2:
      answer.push("B");
      break;
    case 3:
      answer.push("A");
      break;
    case 4:
      answer.push("E");
      break;
    default:
      answer.push("D");
  }
});

console.log(answer.join("\n"));
