# 문제
> English

An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if it is possible to build a triangle with sides of lengths A[P], A[Q] and A[R]. In other words, triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
There are four triangular triplets that can be constructed from elements of this array, namely (0, 2, 4), (0, 2, 5), (0, 4, 5), and (2, 4, 5).

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns the number of triangular triplets in this array.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 12
the function should return 4, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000];
each element of array A is an integer within the range [1..1,000,000,000].

> 한글

N개의 정수로 구성된 배열 A가 제공됩니다. 세 변(P, Q, R)은 길이가 A[P], A[Q], A[R]인 삼각형을 만들 수 있는 경우 삼각형입니다. 즉, 삼중항(P, Q, R)은 0 ≤ P < Q < R < N이고 다음과 같은 경우 삼각형입니다.

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
예를 들어, 다음과 같은 배열 A를 고려하십시오.

A[0] = 10 A[1] = 2 A[2] = 5
A[3] = 1 A[4] = 8 A[5] = 12
이 배열의 요소로 구성할 수 있는 4개의 삼각형 삼중항, 즉 (0, 2, 4), (0, 2, 5), (0, 4, 5) 및 (2, 4, 5)가 있습니다.

Write a function:

function solution(A);

N개의 정수로 구성된 배열 A가 주어지면 이 배열의 삼각형 삼중항 수를 반환합니다.

예를 들어, 주어진 배열 A는 다음과 같습니다.

  A[0] = 10 A[1] = 2 A[2] = 5
  A[3] = 1 A[4] = 8 A[5] = 12
함수는 위에서 설명한 대로 4를 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [0..1,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [1..1,000,000,000] 범위 내의 정수입니다.

## 풀이

```javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    if(A.length < 3) {
        return 0;
    }

    const N = A.length;
    let sum = 0;

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j]) {
                    sum ++;
                }
            }   
        }
    }

    return sum;
}

```

### [1차 풀이](https://app.codility.com/demo/results/training69KWWP-RTK/) (72점)
- time complexity: O(N**3) 
- 문제에서 주어진 A[P] + A[Q] > A[R], A[Q] + A[R] > A[P], A[R] + A[P] > A[Q] 를 만족하면 1씩 더해줘서 최종적으로 sum을 리턴한다.
- 하지만 O(N**3)으로 풀게되어, Perfomance tests에서 100%가 나오지 않았다.