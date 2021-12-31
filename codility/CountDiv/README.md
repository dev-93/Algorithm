# 문제
> (English)

Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

N개의 정수로 구성된 배열 A가 주어지면 배열 A에 있는 고유한 값의 수를 반환합니다.

예를 들어, 주어진 배열 A는 다음과 같은 6개의 요소로 구성됩니다.

 A[0] = 2 A[1] = 1 A[2] = 1
 A[3] = 2 A[4] = 3 A[5] = 1
배열 A에 1, 2, 3이라는 3개의 고유한 값이 나타나기 때문에 함수는 3을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [0..100,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [−1,000,000..1,000,000] 범위의 정수입니다.

## 풀이

```javascript
function solution(A, B, K) {
    const devideA = Math.floor((A-1) / K);
    const devideB = Math.floor(B / K);
    const result = devideB - devideA;
    
    return result;
}
```

### [풀이](https://app.codility.com/demo/results/trainingF2DZZA-PAE/) (100점)
- **time complexity: O(N*log(N)) or O(N)** 
- 주어진 배열안에서 고유한 값의 수를 반환하는 것인데, 배열안에 중복제거를 사용한 방법은 Set을 이용하여 중복제거를 하였다. 이후 object를 spread operator를 이용하여 나열한 뒤, 배열의 길이를 리턴하였다.