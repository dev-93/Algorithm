const fileLocation = "./input.txt";
// const fileLocation = "/dev/stdin";

let input = require('fs').readFileSync(fileLocation).toString().trim();

const changeNeed = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let element of changeNeed) {
    input = input.split(element).join("❤");
}

console.log(input.length);