# 문제
> English

An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right by one index and 6 is moved to the first place).

The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

Write a function:

function solution(A, K);

that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given
    A = [3, 8, 9, 7, 6]
    K = 3
the function should return [9, 7, 6, 3, 8]. Three rotations were made:
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
For another example, given
    A = [0, 0, 0]
    K = 1
the function should return [0, 0, 0]

Given
    A = [1, 2, 3, 4]
    K = 4
the function should return [1, 2, 3, 4]

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 한글

N개의 정수로 구성된 배열 A가 제공됩니다. 배열의 회전은 각 요소가 한 인덱스만큼 오른쪽으로 이동하고 배열의 마지막 요소가 첫 번째 위치로 이동하는 것을 의미합니다. 예를 들어, 배열 A = [3, 8, 9, 7, 6]의 회전은 [6, 3, 8, 9, 7]입니다(요소는 한 인덱스 오른쪽으로 이동하고 6은 첫 번째 위치로 이동합니다).

목표는 배열을 A K 번 회전하는 것입니다. 즉, A의 각 요소는 오른쪽으로 K번 이동합니다.

Write a function:

function solution(A, K);

N개의 정수와 정수 K로 구성된 배열 A가 주어지면 K번 회전한 배열 A를 반환합니다.

예를 들어, 주어진
    A = [3, 8, 9, 7, 6]
    K = 3
함수는 [9, 7, 6, 3, 8]을 반환해야 합니다. 세 번의 회전이 이루어졌습니다.
    [3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    [6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    [7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
다른 예를 들어,
    A = [0, 0, 0]
    K = 1
함수는 [0, 0, 0]을 반환해야 합니다.

주어진
    A = [1, 2, 3, 4]
    K = 4
함수는 [1, 2, 3, 4]를 반환해야 합니다.

다음과 같이 가정합니다.

N 및 K는 [0..100] 범위 내의 정수입니다.
배열 A의 각 요소는 [−1,000..1,000] 범위의 정수입니다.
솔루션에서 정확성에 중점을 둡니다. 솔루션의 성능은 평가의 초점이 아닙니다.

## 풀이

```javascript
function solution(A, K) {
    if(A.length === 0) {
        return [];
    };
    
    if(A.length === K) {
        return A;
    };

    for (let i = 0; i < K; i++) {
        const lastEle = A.pop();
        A.unshift(lastEle);
    };

    return A;
}
```
- A배열에서 K만큼 루프문으로 돌려, 마지막 요소를 빼 다시 A배열 앞에다가 삽입합니다.
- 이때, A의 범위는 0부터 시작 이기 때문에, A의 length가 0이라면 빈 배열([])을 리턴해주고,
- A의 legnth와 K가 같다면 똑같기 때문에, 루프문 돌리기 이전에 A를 리턴해줍니다.