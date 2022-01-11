# 문제

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.

### 입출력 예
|arr|return|
|----|----|
|10|true|
|12|true|
|11|false|
|13|false|

## 풀이

```javascript
function solution(x) {
    const numToStr = x.toString().split('');
    const sum = numToStr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
    const result = x % sum;
    return !result ? true : false;
}
```

- 숫자 x를 배열로 만들고, 각배열을 모두 합한 값을 x로 나눈다
- 0이면 true, 그렇지 않으면 false를 리턴한다
