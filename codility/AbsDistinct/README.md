# 문제
> (English)

A non-empty array A consisting of N numbers is given. The array is sorted in non-decreasing order. The absolute distinct count of this array is the number of distinct absolute values among the elements of the array.

For example, consider array A such that:

  A[0] = -5
  A[1] = -3
  A[2] = -1
  A[3] =  0
  A[4] =  3
  A[5] =  6
The absolute distinct count of this array is 5, because there are 5 distinct absolute values among the elements of this array, namely 0, 1, 3, 5 and 6.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N numbers, returns absolute distinct count of array A.

For example, given array A such that:

  A[0] = -5
  A[1] = -3
  A[2] = -1
  A[3] =  0
  A[4] =  3
  A[5] =  6
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647];
array A is sorted in non-decreasing order.
Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

## 풀이

```javascript
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const mySet = new Set();

    for (let num of A) {
        const abs = Math.abs(num);
        mySet.add(abs);
    }

    return mySet.size;
}
```

### [풀이](https://app.codility.com/demo/results/trainingZBNVCQ-2TC/) (100 점)
- **time complexity: O(N*log(N)) or O(N))** 
- 배열을 순회하면서, 절대값의 길이를 찾는 문제였다.
- Set 자료구조를 이용하여, 절대값을 Set에 add를 해주었고, 중복제거도 같이 고려하였다.