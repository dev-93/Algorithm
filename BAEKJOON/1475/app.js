const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require('fs').readFileSync(fileLocation).toString().trim().split('').map(Number);

const map = new Map();
let max = 0;

input.forEach(v => {
    if(map.has(v)){
        if(v === 9 && (!map.get(6) ||map.get(9) > map.get(6))) {
            if (map.has(6)) {
                map.set(6, map.get(6) + 1);
            } else {
                map.set(6, 1);
            }
        } else if (v === 6 && (!map.get(9) ||map.get(9) < map.get(6))) {
            if (map.has(9)) {
                map.set(9, map.get(9) + 1);
            } else {
                map.set(9, 1);
            }
        } else {
            map.set(v, map.get(v) + 1);
        }
    } else {
        map.set(v,1);
    }
})

for (entry of map) {
    if(entry[1] > max) {
        max = entry[1]
    }
}

console.log(max)