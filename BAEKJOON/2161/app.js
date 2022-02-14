const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = +require("fs").readFileSync(fileLocation).toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
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
    if (!this._size) {
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
    if (this._size === 0) {
      return -1;
    }

    return this.head.value;
  }

  back() {
    if (this._size === 0) {
      return -1;
    }

    return this.tail.value;
  }
}

const queue = new Queue();
const answer = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

while (queue._size !== 0) {
  answer.push(queue.pop());
  if (queue._size === 0) {
    break;
  }
  queue.push(queue.pop());
}

console.log(answer.join(" "));
