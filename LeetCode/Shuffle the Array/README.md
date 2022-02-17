# 문제

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

## 풀이

```javascript
var shuffle = function (nums, n) {
  const N = nums.length;

  const x = nums.slice(0, n);
  const y = nums.slice(n, N);
  const arr = [];

  for (let i = 0; i < x.length; i++) {
    arr.push(x[i]);
    arr.push(y[i]);
  }

  return arr;
};
```

### [풀이](https://leetcode.com/submissions/detail/643243071/)
