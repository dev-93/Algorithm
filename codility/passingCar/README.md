# 문제
> (English)

A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

> (한글)

N개의 정수로 구성된 비어 있지 않은 배열 A가 제공됩니다. 배열 A의 연속 요소는 도로에서 연속되는 자동차를 나타냅니다.

배열 A에는 0 및/또는 1만 포함됩니다.

0은 동쪽으로 여행하는 자동차를 나타내고,
1은 서쪽으로 여행하는 자동차를 나타냅니다.
목표는 지나가는 자동차를 계산하는 것입니다. P가 동쪽으로 여행하고 Q가 서쪽으로 여행할 때 0 ≤ P < Q < N인 한 쌍의 자동차(P, Q)가 지나가고 있다고 말합니다.

예를 들어, 다음과 같은 배열 A를 고려하십시오.

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
(0, 1), (0, 3), (0, 4), (2, 3), (2, 4)의 다섯 쌍의 자동차가 지나가고 있습니다.

함수 작성:

기능 솔루션(A);

N 정수의 비어 있지 않은 배열 A가 주어지면 지나가는 자동차 쌍의 수를 반환합니다.

지나가는 자동차 쌍의 수가 1,000,000,000을 초과하면 함수는 -1을 반환해야 합니다.

예를 들면 다음과 같습니다.

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
함수는 위에서 설명한 대로 5를 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..100,000] 범위 내의 정수입니다.
배열 A의 각 요소는 0, 1 값 중 하나를 가질 수 있는 정수입니다.


## 풀이

```javascript
function solution(A) {
    let sum = 0;
    let result = 0;

    for (let i = A.length-1; i >= 0; i--){
        if (A[i] === 1) {
            sum++
        } else {
            result += sum
        };
    }

    if (result > 1000000000) {
        return -1;
    };

    return result;
}
```

### [풀이](https://app.codility.com/demo/results/trainingN7D2VZ-ZJE/) (100점)
- **time complexity: O(N)** 
- 문제에서, 주어진대로 0이 우측으로, 1이 좌측으로 해서 만나는 것들을 찾아서 갯수를 리턴시켜주고, 없다면 0을 리턴시켜준다.
- 예외처리 사항으로는 1000000000이 넘으면 -1을 리턴시킨다.
- 2중 루프같이 O(N^2)을 돌면 간단히 풀 수 있을 것 같지만, 주어진 N이 100,000이 주어졌기 때문에 시간 초과가 날 것이다. 이를 잘 고려해서 풀어야 한다.