const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < N; i++) {
  let count = 1;
  let M = Number(arr[i * 2].split(" ")[1]);
  const queue = arr[i * 2 + 1].split(" ").map(Number);

  while (true) {
    const firstItem = queue.shift();

    if (Math.max(...queue) <= firstItem && M === 0) {
      console.log(count);
      break;
    } else if (Math.max(...queue) > firstItem && M === 0) {
      queue.push(firstItem);
      M = queue.length - 1;
    } else if (Math.max(...queue) > firstItem) {
      queue.push(firstItem);
      M--;
    } else if (Math.max(...queue) <= firstItem) {
      count++;
      M--;
    }
  }
}
