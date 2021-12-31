# 문제
> (English)

A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.

Write an efficient algorithm for the following assumptions:

N is an odd integer within the range [1..1,000,000];
each element of array A is an integer within the range [1..1,000,000,000];
all but one of the values in A occur an even number of times.

> (한글)

N개의 정수로 구성된 비어 있지 않은 배열 A가 제공됩니다. 배열에는 홀수개의 요소가 포함되어 있으며, 배열의 각 요소는 짝을 이루지 않은 한 요소를 제외하고 동일한 값을 가진 다른 요소와 짝을 이룰 수 있습니다.

예를 들어, 다음과 같은 배열 A에서:
  A[0] = 9 A[1] = 3 A[2] = 9
  A[3] = 3 A[4] = 9 A[5] = 7
  A[6] = 9
인덱스 0과 2에 있는 요소의 값은 9이고,
인덱스 1과 3에 있는 요소의 값은 3이고,
인덱스 4와 6에 있는 요소의 값은 9이고,
인덱스 5의 요소는 값이 7이고 쌍을 이루지 않습니다.

function solution(A);

위의 조건을 충족하는 N개의 정수로 구성된 배열 A가 주어지면 짝을 이루지 않은 요소의 값을 반환합니다.
예를 들어, 주어진 배열 A는 다음과 같습니다.

  A[0] = 9 A[1] = 3 A[2] = 9
  A[3] = 3 A[4] = 9 A[5] = 7
  A[6] = 9
함수는 위의 예에서 설명한 대로 7을 반환해야 합니다.

다음 가정에 대한 효율적인 알고리즘을 작성하십시오.

N은 [1..1,000,000] 범위 내의 홀수 정수입니다.
배열 A의 각 요소는 [1..1,000,000,000] 범위 내의 정수입니다.
A 의 값 중 하나를 제외한 모든 값이 짝수번 발생합니다.

## 풀이

```javascript
function solution(A) {
    let element = new Set();
    
    for(let i in A){
        !element.has(A[i]) ? element.add(A[i]) : element.delete(A[i]);
    }
    
    const result = [...element];
    
    return result[0];
}
```

- 1차 풀이(66점)

결국엔 짝수가 되지 않는 값을 찾는 것이고,
반복문을 돌면서 값이 1인 수를 찾으면 된다.
reduce함수를 이용해 빈 object에 값의 이름과 같이 값을 넣어주고,
값이 1인 값의 이름을 출력하고자 한다.

- 2차 풀이 (100점)

다른 사람의 풀이를 참고 하게 되었음
배열 A를 반복문을 돌며 값이 없으면 해당 값을 추가하고, 있으면 해당 값을 지우게 된다.
결국 짝이 없는 요소의 값만 남게 됨 -> 항상 한 개의 값만 남게 되므로 해당 값을 리턴해주면 된다.
