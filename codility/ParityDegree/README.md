# 문제
> (English)

A positive integer N is given. The goal is to find the highest power of 2 that divides N. In other words, we have to find the maximum K for which N modulo 2^K is 0.

For example, given integer N = 24 the answer is 3, because 2^3 = 8 is the highest power of 2 that divides N.

Write a function:

function solution(N);

that, given a positive integer N, returns the highest power of 2 that divides N.

For example, given integer N = 24, the function should return 3, as explained above.

Assume that:

N is an integer within the range [1..1,000,000,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

양의 정수 N이 제공됩니다. 목표는 N을 나누는 2의 가장 높은 거듭제곱을 찾는 것입니다. 즉, N modulo 2^K가 0인 최대 K를 찾아야 합니다.

예를 들어, 주어진 정수 N = 24에서 답은 3입니다. 왜냐하면 2^3 = 8은 N을 나누는 2의 가장 높은 거듭제곱이기 때문입니다.

Write a function:

function solution(N);

양의 정수 N이 주어지면 N을 나누는 2의 가장 높은 거듭제곱을 반환합니다.

예를 들어, 주어진 정수 N = 24, 함수는 위에서 설명한 대로 3을 반환해야 합니다.

다음과 같이 가정합니다.

N은 [1..1,000,000,000] 범위의 정수입니다.
솔루션에서 정확성에 중점을 둡니다. 솔루션의 성능은 평가의 초점이 아닙니다.

## 풀이
### [1차풀이](https://app.codility.com/demo/results/training825ERK-E6Q/) (75점)
- 1차풀이에서는 루프문으로, 2의 거듭제곱을 구한 후, 주어진 N과 거듭제곱을 나눴을 때, 나머지가 0이면 몇번째 값인지 maximumIndex이라는 변수에 넣어줍니다. 거듭제곱의 값이 N보다 크게 되는 순간 maximumIndex를 리턴해줍니다.
- 예외처리 사항으로는 N이 1이 주어진다면 0을 리턴시킨다.
- 작은 숫자를 넣었을 때, return 값이 없기 때문에, Correctness tests에서 pass하지 못하였습니다.

### [2차풀이](https://app.codility.com/demo/results/trainingFY5DRT-SPA/) (100점)
- 2차 풀이에서는 N이 1일때를 제외하고, if문을 벗어났을 때 return 값을 넣어준다.