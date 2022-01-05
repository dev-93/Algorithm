# 문제
> (English)

An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

## 풀이

```javascript
function solution(A) {
    if (A.length === 0) return -1;

    let map = new Map();
    const moreThanHalf = parseInt(A.length/2) + 1;

    for(let i = 0; i < A.length; i++) {
        let keyVal = A[i];
        if(map.has(keyVal)) {
            map.get(keyVal).push(i);
        } else {
            let valArr = [i];
            map.set(keyVal, valArr);
        }
    }

    for(let value of map.values()) {
        if(value.length >= moreThanHalf) return value[0];
    }

    return -1;
}
```

### [풀이](https://app.codility.com/demo/results/training47TWNK-SUG/) (100 점)
- **time complexity: O(N*log(N)) or O(N))** 
- 풀지 못하여서 다른 사람의 퓰이 참고하였음
- Map 객체를 만들고, 과반수를 비교하기 위해 배열의 길이/ 2에 +1을 해주었다.
- Map 객체에 똑같은 값이 없다면, 배열형태로 만들어서 인덱스를 넣어주고, 값이 있다면 기존 배열에서 push를 한다.
- Map 객체에서 과반수 이상인 value의 배열에서 아무값이나 리턴해주면 된다.