# 문제
### 문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

- "()()" 또는 "(())()" 는 올바른 괄호입니다.
- ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

### 제한사항
- 문자열 s의 길이 : 100,000 이하의 자연수
- 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

### 입출력 예
|s|answer|
|---|----|
|"()()"|true|
|"(())()"|true|
|")()("|false|
|"(()("|false|

### 입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.

## 풀이

```javascript
function solution(s){
    const result = [];

    for(let spe of s) {
        if (spe === ")" && result[result.length - 1] === "(") {
            result.pop();
        } else {
            result.push(spe);
        }
    }
    
    return result.length ? false : true;
}
```

- stack을 이용하여 반복문을 이용하여 문제를 풀었다.
- () 이렇게 한쌍을 이루어서 없애려면 처음 들어오는 문자열은 "(" 만 된다. 
- result 배열에 먼저 "("를 넣어주게 되고,
- ")" 이고 result 배열의 마지막 값이 "(" 이게 되면 배열의 마지막을 제거해주게 된다.
- result 배열의 길이가 있다면 false 이고,그렇지 않으면 true를 리턴하게 된다. 