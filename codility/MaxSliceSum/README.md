# 문제
> (English)

A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A. The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the maximum sum of any slice of A.

For example, given array A such that:

A[0] = 3  A[1] = 2  A[2] = -6
A[3] = 4  A[4] = 0
the function should return 5 because:

(3, 4) is a slice of A that has sum 4,
(2, 2) is a slice of A that has sum −6,
(0, 1) is a slice of A that has sum 5,
no other slice of A has sum greater than (0, 1).
Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..1,000,000];
each element of array A is an integer within the range [−1,000,000..1,000,000];
the result will be an integer within the range [−2,147,483,648..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

N개의 정수로 구성된 비어 있지 않은 배열 A가 제공됩니다. 0 ≤ P ≤ Q < N인 한 쌍의 정수(P, Q)를 배열 A의 조각이라고 합니다. 조각(P, Q)의 합은 A[P] + A[P +1] + ... + A[Q].

Write a function:

function solution(A);

N개의 정수로 구성된 배열 A가 주어지면 A 조각의 최대 합을 반환합니다.

예를 들어, 주어진 배열 A는 다음과 같습니다.

A[0] = 3 A[1] = 2 A[2] = -6
A[3] = 4 A[4] = 0
함수는 다음과 같은 이유로 5를 반환해야 합니다.

(3, 4)는 합이 4인 A 조각입니다.
(2, 2)는 합이 -6인 A의 조각입니다.
(0, 1)은 합이 5인 A 조각입니다.
A의 다른 슬라이스에는 (0, 1)보다 큰 합이 없습니다.
다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..1,000,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [−1,000,000..1,000,000] 범위 내의 정수입니다.
결과는 [−2,147,483,648..2,147,483,647] 범위의 정수가 됩니다.

## 풀이

```javascript
function solution(A) {
    const N = A.length;
    const result = [];

    for(let i = 0; i < N; i++) {
        for(let j = i; j < N; j++) {
            const sli = A.slice(i, j + 1);
            const sum = sli.reduce((a,b) => (a+b));
            result.push(sum);
        }   
    }

    return Math.max(...result);
}
```

### [1차풀이](https://app.codility.com/demo/results/training4Z32QV-R5M/) (69점)
- **time complexity: O(N3)** 
- 2중 배열안에서 배열 A중에서 i번부터 j+1번까지 배열을 자르고, 그 배열안에 모든 원소를 합한다.
- result 배열에 넣어주고 최대값을 리턴한다.
- Time Error가 났다.

### [2차풀이](https://app.codility.com/demo/results/training9G6PGX-2VK/) (100점)
- **time complexity: O(N)** 
- 시간 복잡도 O(N) localMaxSum은, A[i]와 기존값중에 최대값을 저장하고, globalMaxSum은 localMaxSum과 기존 값중에 최대값을 저장하고
- globalMaxSum을 리턴한다. 만약 배열의 길이가 1이면은 첫번째 값을 리턴한다.