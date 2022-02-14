const { parse } = require("path/posix");

const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [currentHour, currentMinutes] = input[0].split(" ").map(Number);

const cookMinutes = Number(input[1]);

let cookEndHours = parseInt(
  (currentHour * 60 + currentMinutes + cookMinutes) / 60
);

if (cookEndHours >= 24) {
  cookEndHours = cookEndHours - 24;
}

const cookEndMinutes = parseInt(
  (currentHour * 60 + currentMinutes + cookMinutes) % 60
);

console.log(cookEndHours, cookEndMinutes);
