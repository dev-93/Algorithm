# 문제
> (English)

A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].


> (한글)

N개의 정수로 구성된 비어 있지 않은 배열 A가 제공됩니다. 삼중항(P, Q, R)의 곱은 A[P] * A[Q] * A[R](0 ≤ P < Q < R < N)과 같습니다.

예를 들어 다음과 같은 배열 A:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
다음 예제 삼중항이 포함되어 있습니다.

(0, 1, 2), 곱은 −3 * 1 * 2 = −6
(1, 2, 4), 제품은 1 * 2 * 5 = 10
(2, 4, 5), 제품은 2 * 5 * 6 = 60
당신의 목표는 모든 삼중항의 최대 곱을 찾는 것입니다.

Write a function:

function solution(A);

비어 있지 않은 배열 A가 주어지면 모든 삼중항의 최대 곱 값을 반환합니다.

예를 들어, 주어진 배열 A는 다음과 같습니다.

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
함수는 3중항(2, 4, 5)의 곱이 최대이므로 60을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [3..100,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [−1,000..1,000] 범위의 정수입니다.

## 풀이

```javascript
function solution(A) {
    const result = [];

    A.sort((a,b) => a-b);

    result.push(A[A.length - 1] * A[A.length - 2] * A[A.length - 3]);
    result.push(A[0] * A[1] * A[A.length - 1]);
    
    return Math.max(...result);
}
```

### [풀이](https://app.codility.com/demo/results/training2X2BBJ-6XK/) (100점)
- **time complexity: O(N * log(N))** 
- 배열 A를 오름차순으로 정리하는데, 이유는 가장큰수를 구하는게 핵심이다.
- 세개를 곱하여서 가장 큰 수가 나오려면, 세가지 수가 다 양수이거나 2가지가 음수와 한가지 양수를 곱하는 상황이다
- 두가지 상황을 result 배열에 넣고 가장 큰 수를 뽑는 방안을 사용했다.
