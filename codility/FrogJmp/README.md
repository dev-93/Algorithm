# 문제
> (English)

A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

작은 개구리는 길 건너편으로 가고 싶어합니다. 개구리는 현재 위치 X에 있고 Y보다 크거나 같은 위치에 도달하려고 합니다. 작은 개구리는 항상 고정된 거리 D를 점프합니다.

작은 개구리가 목표물에 도달하기 위해 수행해야 하는 최소 점프 횟수를 세십시오.

함수 작성:

function solution(X, Y, D);

세 개의 정수 X, Y 및 D가 주어지면 위치 X에서 Y보다 크거나 같은 위치로의 최소 점프 수를 반환합니다.

예를 들면 다음과 같습니다.

  X = 10
  Y = 85
  D = 30
개구리는 다음과 같이 위치하므로 함수는 3을 반환해야 합니다.

첫 번째 점프 후 위치 10 + 30 = 40
두 번째 점프 후 위치 10 + 30 + 30 = 70
세 번째 점프 후 위치 10 + 30 + 30 + 30 = 100
다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

X, Y 및 D는 [1..1,000,000,000] 범위 내의 정수입니다.
X ≤ Y.

## 풀이

```javascript
function solution(X, Y, D) {
    const result = (Y -X) / D;

    return Math.ceil(result);
}
```

### [1차풀이](https://app.codility.com/demo/results/trainingDA5GV4-M59/) (44점)
- **time complexity: O(Y-X)** 

- count = 0부터 시작하여, X 가 Y보다 크거나 같을때까지 while을 사용한 반복문을 통해
X에 D를 더해주고 count를 1씩 높여주게 되어 count를 return 하게 해준다.

- 주어진 문제에서 X,Y,D 중 10억개가 주어질 수도 있어 시간 복잡도에 하나도 통과하지 못하여 44점을 받게 되었다. 

### [2차풀이](https://app.codility.com/demo/results/trainingH2K9PR-8R7/) (100 점)
- **time complexity: O(1)** 

- 답이 나올 수 있는 공식으로 구하여 풀었다. 범위 값이 크게 주어지면 시간 복잡도 O(1)을 묻는 것이였음.
- 최소 점프 횟수를 N이라고 하면, N >= (Y-X) / D 로 구하면 됩니다.
- return 할때, result 값이 소수점으로 나올 수 있는데, 최소 점프 횟수를 구하는 문제이므로, 올림 처리를 해줘야 정확한 값을 출력할 수 있습니다.
- n이 1,000 000, 예상 시간 복잡도는 O(n) 또는 O(n log n),
- n이 10 000, 예상 시간 복잡도는 O(n2),
- n이 500, 예상 시간 복잡도는 O(n3)입니다.
