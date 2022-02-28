# 문제

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

## 풀이

```javascript
var checkIfPangram = function (sentence) {
  const str = [];
  let bool = true;

  for (let i = 97; i <= 122; i++) {
    str.push(String.fromCharCode(i));
  }

  str.forEach((v) => {
    if (sentence.indexOf(v) === -1) {
      bool = false;
    }
  });

  return bool;
};
```

### [풀이](https://leetcode.com/submissions/detail/649094660/)
