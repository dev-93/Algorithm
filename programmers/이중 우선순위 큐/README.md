# 문제
### 문제 설명
이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

|명령어|수신 탑(높이)|
|---|---|
|I 숫자|큐에 주어진 숫자를 삽입합니다.|
|D 1|큐에서 최댓값을 삭제합니다.|
|D -1|큐에서 최솟값을 삭제합니다.|

이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

### 제한사항
- operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
- operations의 원소는 큐가 수행할 연산을 나타냅니다.
    - 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
- 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

### 입출력 예
|operations|return|
|---|---|
|["I 16","D 1"]|[0,0]|
|["I 7","I 5","I -5","D -1"]|[7,5]|

### 입출력 예 설명
16을 삽입 후 최댓값을 삭제합니다. 비어있으므로 [0,0]을 반환합니다.
7,5,-5를 삽입 후 최솟값을 삭제합니다. 최대값 7, 최소값 5를 반환합니다.

## 풀이

```javascript
function solution(operations) {
    const answer = [];
    const N = operations.length;
    
    for (let i = 0; i < N; i++) {
        const tempArr = operations[i].split(" ");
        if(tempArr[0] === "I") {
            answer.push(+tempArr[1]);
            answer.sort((a, b) => {
              return a - b;
            });
        } else if(tempArr[0] === "D" && +tempArr[1] === 1) {
            answer.pop();
        } else if(tempArr[0] === "D" && +tempArr[1] === -1) {
            answer.shift();
        }
        
    }
    
    return !answer.length ? [0,0]: [answer[answer.length - 1], answer[0]];
}
```

- 배열을 이용하여, 풀었다.
- split 메서드를 이용하여, operations[i]를 배열로 만들었다.
- tempArr[0]가 I 일때는 answer배열에 해당 값을 push하자마자, 바로 오름차순 정렬
- tempArr[0]가 D이고, tempArr[1]이 1이면 answer배열에서 pop메서드를 이용
- tempArr[0]가 D이고, tempArr[1]이 1이면 answer배열에서 shift메서드를 이용
- answer 배열의 length가 없다면 [0,0]을, 있다면 위와같이 리턴해준다.