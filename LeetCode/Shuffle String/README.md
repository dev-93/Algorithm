# 문제

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

## 풀이

```javascript
var restoreString = function (s, indices) {
  const N = s.length;
  const arr = [];

  for (let i = 0; i < N; i++) {
    const el = {
      value: s[i],
      index: indices[i],
    };

    arr.push(el);
  }

  arr.sort((a, b) => a.index - b.index);

  return arr
    .map((v) => {
      return v.value;
    })
    .join("");
};
```

### [풀이](https://leetcode.com/submissions/detail/644534800/)
