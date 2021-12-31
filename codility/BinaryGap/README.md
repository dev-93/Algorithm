# 문제
> English
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> 한글

양의 정수 N 내의 이진 간격은 N의 이진 표현에서 양쪽 끝에서 1로 둘러싸인 연속 0의 최대 갯수입니다.

예를 들어, 숫자 9는 이진 표현 1001을 갖고 길이가 2인 이진 간격을 포함합니다. 숫자 529는 이진 표현이 1000010001이고 두 개의 이진 간격(길이 4 중 하나와 길이 3 중 하나)을 포함합니다. 숫자 20에는 이진 표현 10100이 있고 다음을 포함합니다. 길이가 1인 하나의 이진 간격. 숫자 15는 이진 표현 1111을 가지며 이진 간격이 없습니다. 숫자 32는 이진수 표현이 100000이고 이진수 간격이 없습니다.

Write a function:

function solution(N);

양의 정수 N이 주어지면 가장 긴 이진 간격의 길이를 반환합니다. N에 이진 간격이 포함되지 않은 경우 함수는 0을 반환해야 합니다.

예를 들어, N = 1041이 주어지면 함수는 5를 반환해야 합니다. N은 이진 표현이 10000010001이고 가장 긴 이진 간격의 길이는 5이기 때문입니다. N = 32가 주어지면 함수는 0을 반환해야 합니다. N은 이진 표현이 '100000'이고 따라서 바이너리 갭이 없습니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..2,147,483,647] 범위의 정수입니다.

## 풀이

```
function solution(N) {
    if (!(N & (N - 1))) {
        return 0
    }
    const binary = N.toString(2);
    const zeroArr = binary.split('1').filter(t => t !== "").map(t => t.length);

    return zeroArr.length > 0 ? Math.max(...zeroArr) : 0;
};
```
s
- 2의 지수는 값이 0이 나오니까 필터링 해주고,
- 주어진 N을 2진수로 바꾸고, 배열안에 0인것들의 length를 구하고,
- 배열 값 들 중에서 제일 큰 수를 고른다.
