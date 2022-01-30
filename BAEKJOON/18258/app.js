const fileLocation = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(fileLocation).toString().trim().split('\n');

const [n, ...commands] = input;

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
        if(!this.head) {
            this.head = node;
            this.head.next = this.tail;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this._size ++;
    }

    size() {
        return this._size;
    }

    pop() {
        if(this._size > 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this._size --;
            return item;
        } else if(this._size === 2) {
            const item = this.head.item;
            const newHead = this.head.next;
            this.head = newHead;
            this.tail = newHead;
            this._size --;
            return item;
        } else if (this._size === 1){
            const item = this.head.item;
            this.head = null;
            this.tail = null;
            this._size --;
            return item;
        } else {
            return -1;
        }
    }

    empty() {
        return this.size ? 0 : 1;
    }

    front() {
        return this.head ? this.head.item : -1;
    }

    back() {
        return this.tail ? this.tail.item : -1;
    }
}


function solution(n, commands) {
    let answer = '';
    const queue = new Queue();
    
    for (let i = 0; i < n; i++) {
        const command = commands[i].split(' ');
    
        switch(command[0]){
            case 'push':
                queue.push(command[1])
                break;
            case 'pop':
                answer.push(queue.pop());
                break;
            case 'size':
                answer.push(queue.size())
                break;
            case 'empty':
                answer.push(queue.empty())
                break;
            case 'front':
                answer.push(queue.front())
                break;
            case 'back':
                answer.push(queue.back())
                break;
        }
    }

    return answer.split(' ').join('\n');
}


const answer = solution(n, commands);

console.log(answer);