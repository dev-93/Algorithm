# 문제
> (English)

A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:
function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

> (한글)

N개의 문자로 구성된 문자열 S는 다음과 같은 경우 적절하게 중첩되어 호출됩니다.

S는 비어 있습니다.
S는 "(U)" 형식을 갖습니다. 여기서 U는 적절하게 중첩된 문자열입니다.
S는 V와 W가 적절하게 중첩된 문자열인 "VW" 형식을 갖습니다.
예를 들어, 문자열 "(()(())())"은 적절하게 중첩되지만 문자열 "())"은 중첩되지 않습니다.

Write a function:
function solution(S);

N개의 문자로 구성된 문자열 S가 주어지면 문자열 S가 적절하게 중첩되면 1을 반환하고 그렇지 않으면 0을 반환합니다.
예를 들어, S = "(()(())())"이 주어지면 함수는 1을 반환해야 하고 S = "())"이면 위에서 설명한 대로 함수는 0을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.
N은 [0..1,000,000] 범위 내의 정수입니다.
문자열 S는 "(" 및/또는 ")" 문자로만 구성됩니다.

## 풀이

```javascript
function solution(A) {
    let min = 1;
    A.sort((a,b) => a - b);

    A.map(num => {
        if (num > 0 && num === min) {
            min++ ;
        }
    })

    return min;
}
```

### [풀이](https://app.codility.com/demo/results/trainingEHCYHX-VPN/) (100점)
- **time complexity: O(N))** 
- 문자열 S는 '(' 또는 ')'로 구성되어 있습니다. 
- 문제는 Stack의 개념으로, (로 시작하면 result 배열에 넣어준다
- 그렇지 않고, result 배열 마지막이 '('라면 result 배열 마지막에서 빼준다.
- result 배열의 길이가 있으면(중첩되지 않은게 있으면) 0을 리턴하고, 그렇지 않으면 1을 리턴한다
- 문자열 S가 '())'라면 맞지 않는다. 0을 리턴해야 하는데, 이때는 push를 해주게 되어 0을 리턴한다.
- 예외사항으로 S의 길이가 0인 빈문자열이 주어진다면 1을 리턴한다