const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim();

const arr = [0, 1];
let index = 2;

while( true ) {
    if(index > +input) {
        break;
    }

    arr.push(arr[index -2] + arr[index - 1]);
    index++;
}

console.log(arr[index -1]);