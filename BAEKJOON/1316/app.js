const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

input.shift();

let result = input.length;

let temp = "";
input.forEach(item => {
    temp = item[0];
    for(let i = 1; i < item.length; i++) {
        if(temp.includes(item[i]) && item[i - 1] !== item[i]) {
            result--;
            break;
        }
        temp += item[i];
    }
});


console.log(result);