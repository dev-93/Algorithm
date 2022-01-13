# 문제
### 문제 설명
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

### 제한사항
- n은 1,000,000 이하의 자연수 입니다.


### 입출력 예
|n|result|
|---|----|
|78|83|
|15|23|

### 입출력 예 설명
입출력 예#1
문제 예시와 같습니다.
입출력 예#2
15(1111)의 다음 큰 숫자는 23(10111)입니다.

## 풀이

```javascript
function solution(n) {
    const biraryN = n.toString(2);
    const toArr = biraryN.split('');
    const countOne = toArr.filter((num) => num === '1').length;
    let num = n + 1;
    
    while( true ) {
        const biraryNum = num.toString(2);
        const toArrNum = biraryNum.split('');
        const countOneNum = toArrNum.filter((num) => num === '1').length;
        
        if (countOneNum === countOne){
            break;
        }
        
        num ++;
    }
    return num;
}
```

- toString을 이용하여 2진수를 만든 뒤, split통해 string을 arr로 만듭니다.
- 배열에는 '1'또는 '0'이 있는데, '1'의 갯수를 구합니다.
- 주어진 n보다 큰 숫자 num을 만들고, while문을 활용한 반복문을 돌립니다
- 앞과 똑같은 방식으로, 1이 똑같을때 while문을 빠져나가게 되면서 num을 리턴하고, 그렇지 않으면 num이 1씩증가하게 됩니다.