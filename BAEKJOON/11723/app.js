const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split('\n');

const n = input.shift();
const set = new Set();
const arr = [];
const temp = Array.from({length: 20}, (v,i) => i+1 );

input.forEach((v,i) => {
  const [command, val] = v.split(' ');
  let value = +val;
  switch(command) {
    case 'add' :
      set.add(value);
      break;
    case 'check' :
      set.has(value) ? arr.push(1) : arr.push(0);
      break;
    case 'remove' :
      set.has(value) && set.delete(value);
      break;
    case 'toggle' :
      set.has(value) ? set.delete(value) : set.add(value);
      break;
    case 'all' :
      temp.forEach(tempV => set.add(tempV));
      break;
    case 'empty' :
      set.clear();
      break;
  }
});

console.log(arr.join('\n'))