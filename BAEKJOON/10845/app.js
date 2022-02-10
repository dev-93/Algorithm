const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [N, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split(/\s/);

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this._size++;
  }

  pop() {
    if (this._size === 0) {
      return -1;
    } else {
      const _item = this.head.item;
      this.head = this.head.next;
      this._size--;
      return _item;
    }
  }

  size() {
    return this._size;
  }

  empty() {
    if (this._size === 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this._size === 0) {
      return -1;
    } else {
      return this.head.item;
    }
  }

  back() {
    if (this._size === 0) {
      return -1;
    } else {
      return this.tail.item;
    }
  }
}

const queue = new Queue();
const answer = [];

for (let i = 0; i < arr.length; i++) {
  const command = arr[i];

  switch (command) {
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "push":
      const value = arr[i + 1];
      queue.push(+value);
      break;
  }
}

console.log(answer.join("\n"));
