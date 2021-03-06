# 문제
### 문제 설명
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

### 제한사항
n은 10,000 이하의 자연수 입니다.

### 입출력 예
|n|result|
|---|---|
|15|4|

### 입출력 예 설명
입출력 예#1
문제의 예시와 같습니다.

## 풀이

```javascript
function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++ ) {
        let sum = 0;
        for (let j = i; j <= n; j++ ) {
            if (sum === n) {
                answer ++;
                break;
            }
            if (sum > n) {
                break;
            }
            
            sum += j;
        }
    }
    return answer + 1;
}
```

- 단순히 1부터 n까지 반복문으로 돌리면서, sum이 n과 같다면 answer에 1씩더해주고 2중 반복문을 빠져나간다.
- 만약에 sum이 n보다 크게 되는 경우 굳이 계속할 필요가 없기 때문에 break문으로 반복문을 빠져나간다.
- 마지막으로 자기자신을 포함해서 계산해야 하기 때문에 answer에 +1을 했다.