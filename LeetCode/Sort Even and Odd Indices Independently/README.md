# 문제

You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

## 풀이

```javascript
var sortEvenOdd = function (nums) {
  const odd = [];
  const even = [];
  const arr = [];

  nums.forEach((v, i) => {
    if (i % 2 === 0) {
      odd.push(v);
    } else {
      even.push(v);
    }
  });

  even.sort((a, b) => b - a);
  odd.sort((a, b) => a - b);

  const max = even.length >= odd.length ? even.length : odd.length;

  for (let i = 0; i < max; i++) {
    if (odd[i]) {
      arr.push(odd[i]);
    }

    if (even[i]) {
      arr.push(even[i]);
    }
  }

  return arr;
};
```

### [풀이](https://leetcode.com/submissions/detail/644008390/)
