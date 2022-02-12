console.log(
  require("fs")
    .readFileSync("dev/stdin")
    .toString()
    .trim()
    .split(",")
    .map(Number)
    .reduce((acc, cur) => acc + cur)
);
