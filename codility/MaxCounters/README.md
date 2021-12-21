# 문제
> (English)

You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

처음에는 0으로 설정된 N 개의 카운터가 제공되며 두 가지 작업이 가능합니다.

increase(X) - 카운터 X가 1만큼 증가하고,
max counter - 모든 카운터는 카운터의 최대값으로 설정됩니다.
M 정수의 비어 있지 않은 배열 A가 제공됩니다. 이 배열은 연속 작업을 나타냅니다.

A[K] = X, 1 ≤ X ≤ N인 경우 연산 K는 증가(X),
A[K] = N + 1이면 작업 K는 최대 카운터입니다.
예를 들어, 주어진 정수 N = 5와 배열 A는 다음과 같습니다.

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
각 연속 작업 후 카운터 값은 다음과 같습니다.

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
목표는 모든 작업 후에 모든 카운터의 값을 계산하는 것입니다.

Write a function:

function solution(N, A);

정수 N과 M개의 정수로 구성된 비어 있지 않은 배열 A가 주어지면 카운터 값을 나타내는 정수 시퀀스를 반환합니다.

결과 배열은 정수 배열로 반환되어야 합니다.

예를 들면 다음과 같습니다.

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
함수는 위에서 설명한 대로 [3, 2, 2, 4, 2]를 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N 및 M은 [1..100,000] 범위 내의 정수입니다.
배열 A의 각 요소는 [1..N + 1] 범위 내의 정수입니다.
저작권 2009–2021 Codility Limited. 판권 소유. 무단 전재, 출판, 공개를 금합니다.

## 풀이
### [1차풀이](https://app.codility.com/demo/results/trainingSBMUSY-EVT/) (77점)
- 처음에는 N개의 배열에 0이 들어간 배열을 만들어주고, 배열 A의 길이만큼 루프문으로 돌려, 배열 A의 값이 N값 보다 작거나 같으면 만들어진 배열의 인덱스에 +1을 해줍니다. 크다면 배열 전체에 최고 값만큼 넣어줍니다. resultArr 배열의 값이 최고값보다 크면 최고값은 그 값이 되고, 결국 resultArr 배열을 리턴합니다.
- 틀린 이유는 숫자가 클때, Performance tests에서 TimeOUT ERROR가 났습니다.
