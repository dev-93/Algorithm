# 문제

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

## 풀이

```javascript
var largestAltitude = function (gain) {
  const arr = [];
  arr.push(0);

  gain.reduce((acc, cur) => {
    arr.push(acc + cur);
    return acc + cur;
  }, 0);

  return Math.max(...arr);
};
```

### [풀이](https://leetcode.com/submissions/detail/651797074/)
