# 문제

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

## 풀이

```javascript
var subtractProductAndSum = function (n) {
  const N = n.toString().split("").map(Number);

  const product = N.reduce((acc, cur) => acc * cur, 1);
  const sum = N.reduce((acc, cur) => acc + cur, 0);

  return product - sum;
};
```

### [풀이](https://leetcode.com/submissions/detail/644572552/)
