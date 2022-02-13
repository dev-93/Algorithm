const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, K] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this._size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      return -1;
    }

    const popItem = this.head;
    this.head = this.head.next;
    this._size--;

    return popItem.value;
  }

  size() {
    return this._size;
  }

  front() {
    if (!this.size) {
      return -1;
    } else {
      return this.head.value;
    }
  }

  back() {
    if (!this.size) {
      return -1;
    } else {
      return this.tail.value;
    }
  }
}

let answer = [];
let queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.push(i);
}
let cnt = 1;

while (queue.size() != 0) {
  let el = queue.pop();
  if (cnt < K) {
    queue.push(el);
    cnt++;
  } else {
    answer.push(el);
    cnt = 1;
  }
}

console.log(`<${answer.join(", ")}>`);
