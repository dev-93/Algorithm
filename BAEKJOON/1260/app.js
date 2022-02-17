const fileLocation =
  process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [temp, ...arr] = require("fs")
  .readFileSync(fileLocation)
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = temp.split(" ").map(Number);

const graph = new Array(N + 1).fill(0, 0, N + 1);

for (let i = 0; i <= N + 1; i++) {
  graph[i] = new Array(N + 1).fill(0, 0, N + 1);
}

for (let i = 0; i < M; i++) {
  const xy = arr[i].split(" ");
  const x = Number(xy[0]);
  const y = Number(xy[1]);

  graph[x][y] = 1;
  graph[y][x] = 1;
}

const BFS = function (node) {
  let answer = "";
  const visited = new Array(N + 1).fill(false, 0, N + 1);
  visited[node] = true;

  const Queue = [];
  Queue.push(node);

  while (Queue.length > 0) {
    const cur = Number(Queue.shift());
    answer += cur + " ";

    for (let next = 1; next <= N; next++) {
      if (!visited[next] && graph[cur][next]) {
        visited[next] = true;
        Queue.push(next);
      }
    }
  }

  return answer;
};

const DFS = function (node) {
  let answer = "";
  const visited = new Array(N + 1).fill(false, 0, N + 1);
  const stack = [];

  stack.push(node);

  while (stack.length > 0) {
    const cur = stack.pop();

    if (!visited[cur]) {
      visited[cur] = true;
      answer += cur + " ";

      for (let next = N; next >= 1; next--) {
        if (!visited[next] && graph[cur][next]) {
          stack.push(next);
        }
      }
    }
  }

  return answer;
};

console.log(DFS(V));
console.log(BFS(V));
