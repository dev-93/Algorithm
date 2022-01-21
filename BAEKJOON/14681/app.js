// !!fs로 하는 에러나는 문제 발생!!

// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().split('\n').map(v => +v);
// // 백준
// // const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);
// const [a,b] = input;

// if ( a > 0 && b > 0) {
//     console.log(1);
// }

// if ( a < 0 && b > 0) {
//     console.log(2);
// }

// if ( a < 0 && b < 0) {
//     console.log(3);
// }

// if ( a > 0 && b < 0) {
//     console.log(4);
// }

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(parseInt(line));
}).on('close', function () {
    const a = input[0];
	const b = input[1];

    if (a>0&&b>0){
        console.log(1);
    }
    if (a<0&&b>0){
        console.log(2);
    }
    if (a<0&&b<0){
        console.log(3);
    }
    if (a>0&&b<0){
        console.log(4);
    }
    process.exit();
});