# 문제

You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

## 풀이

```javascript
var replaceDigits = function (s) {
  const str = [];

  const temp = s.split("");

  for (let i = 97; i <= 122; i++) {
    str.push(String.fromCharCode(i));
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] % 1 === 0) {
      const findChar = str[str.indexOf(s[i - 1]) + Number(s[i])];
      temp.splice(i, 1, findChar);
    }
  }

  return temp.join("");
};
```

### [풀이](https://leetcode.com/submissions/detail/649094660/)
