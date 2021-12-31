# 문제
> English

A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

For example, 6 is a factor of 24, because M = 4 satisfies the above condition (24 = 6 * 4).

Write a function:
function solution(N);

that, given a positive integer N, returns the number of its factors.

For example, given N = 24, the function should return 8, because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24. There are no other factors of 24.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 한글

양의 정수 D는 N = D * M과 같은 정수 M이 존재하는 경우 양의 정수 N의 인수입니다.

예를 들어, M = 4가 위의 조건(24 = 6 * 4)을 충족하기 때문에 6은 24의 인수입니다.

Write a function:
function solution(N);

양의 정수 N이 주어지면 해당 요인의 수를 반환합니다.

예를 들어, N = 24가 주어지면 함수는 8을 반환해야 합니다. 24에는 8개의 인수, 즉 1, 2, 3, 4, 6, 8, 12, 24가 있기 때문입니다. 24라는 다른 인수는 없습니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..2,147,483,647] 범위의 정수입니다.

## 풀이

```javascript
function solution(N) {
    let index = 1;
    let count = 0;

    while (index <= N) {
        if(N % index === 0) {
            count++;
        }
        index++;
    }

    return count;
}
```

- ### [1차풀이](https://app.codility.com/demo/results/training9872FN-FG7/) (78점)
- **time complexity: O(N)**
- 주어진 N의 약수 갯수를 구하는 문제이다.
- 단순히 O(N)으로 풀었지만, 주어진 갯수가 너무커서 타임에러가 났다.

