const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

console.log(
  Number(require("fs").readFileSync(fileLocation).toString().trim())
    .toString(2)
    .split("")
    .filter((v) => Number(v)).length
);
