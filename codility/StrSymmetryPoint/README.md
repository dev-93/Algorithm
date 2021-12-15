# 문제
> (English)

Write a function:

function solution(S);

that, given a string S, returns the index (counting from 0) of a character such that the part of the string to the left of that character is a reversal of the part of the string to its right. The function should return −1 if no such index exists.

Note: reversing an empty string (i.e. a string whose length is zero) gives an empty string.

For example, given a string:

"racecar"

the function should return 3, because the substring to the left of the character "e" at index 3 is "rac", and the one to the right is "car".

Given a string:

"x"

the function should return 0, because both substrings are empty.

Write an efficient algorithm for the following assumptions:

the length of S is within the range [0..2,000,000].
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

함수 작성:

function solution(S);

문자열 S가 주어지면 해당 문자의 왼쪽에 있는 문자열 부분이 오른쪽에 있는 문자열 부분의 반전이 되도록 문자의 인덱스(0부터 계산)를 반환합니다. 이러한 인덱스가 없으면 함수는 -1을 반환해야 합니다.

참고: 빈 문자열(즉, 길이가 0인 문자열)을 뒤집으면 빈 문자열이 생성됩니다.

예를 들어, 주어진 문자열:

"자동차 경주"

인덱스 3에 있는 문자 "e"의 왼쪽에 있는 부분 문자열이 "rac"이고 오른쪽에 있는 부분 문자열이 "car"이기 때문에 함수는 3을 반환해야 합니다.

주어진 문자열:

"엑스"

두 부분 문자열이 모두 비어 있기 때문에 함수는 0을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

S의 길이는 [0..2,000,000] 범위 내에 있습니다.


## 풀이
### [1차풀이](https://app.codility.com/demo/results/training39EWEE-N9K/) (57점)
- 문제에서 주어진것을 토대로 예외처리 하자면, S의 길이가 1이면 0을 리턴하고, S의 길이가 짝수이거나 0이면 -1을 리턴해줘야 합니다. 그리고 홀수이면, S의 가운데 인덱스를 리턴해줘야 합니다. 이 방법은 S의 길이를 2로 나누고 내림을 해줍니다.
- 틀린이유: S의 각 요소를 abc로 주어줬을때 S의 길이가 홀수임에도 불구하고 같지 않은경우를 고려해주지 못했다.
