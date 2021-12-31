# 문제
> (English)

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

N개의 서로 다른 정수로 구성된 배열 A가 제공됩니다. 배열에는 [1..(N + 1)] 범위의 정수가 포함되어 있습니다. 즉, 정확히 하나의 요소가 누락되었습니다.

당신의 목표는 누락된 요소를 찾는 것입니다.

함수 작성:

function solution(A);

배열 A가 주어지면 누락된 요소의 값을 반환합니다.

예를 들어, 주어진 배열 A는 다음과 같습니다.

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
함수는 누락된 요소이므로 4를 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [0..100,000] 범위 내의 정수입니다.
A의 요소는 모두 별개입니다.
배열 A의 각 요소는 [1..(N + 1)] 범위 내의 정수입니다.


## 풀이

```javascript
function solution(A) {
    if(!A.length) return 1;

    A.sort((a,b) => a-b);
    
    if (A[0] === 2) {
        return 1;
    };
    
    for (let i = 0; i < A.length; i++) {
        if(A[i] + 1 !== A[i+1]) {
            return A[i] + 1;
        }
    }
}
```

### [1차풀이](https://app.codility.com/demo/results/trainingJXWV8X-X29/) (50점)
- 배열 A가 빈배열로 주어진다면, 0을 리턴하고 배열 A를 정렬하여, A를 반복문안에서 A(i + 1)번째의 값은 A[i]의 값의 +1만 해주면 된다고 생각했다.
- 틀린이유는 i + 1값만 고려하다 보니, A[i]가 2로 시작할때는, 1이 빠질 수 있다. 또한 배열 A가 빈배열로 주어지면 0이 아니다.

### [2차풀이](https://app.codility.com/demo/results/training44JB8N-4FZ/) (100 점)
- **time complexity: O(N) or O(N * log(N))** 
- 1차 풀이에서 배열 A가 빈배열로 주어진다면 1을 리턴해줘야 한다. 배열 A에서 1이 없다면 1을 리턴해줘야 한다.

### [3차풀이](https://app.codility.com/demo/results/trainingYY9YSV-H8T/) (100 점)
- **time complexity: O(N) or O(N * log(N))** 
- 2차 풀이와 비슷하지만, 각 요소가 1부터 시작하지만, 1이 없다면 2부터 시작할 것입니다. 이때 배열 A의 첫번째 값이 즉 A[0]가 2라면 1을 리턴해줘야 합니다.
- 2차와 3차 풀이의를 비교해보면 아래와 같이 성능이 미세하지만 차이가 있다. 왼쪽이 2차, 오른쪽이 3차 풀이
- ![2차와 3차풀이 비교](https://user-images.githubusercontent.com/51155505/146187638-f6b3a690-8e68-4d67-8df9-f752a377453d.png)