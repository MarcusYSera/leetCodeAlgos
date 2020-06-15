// 1021. Remove Outermost Parentheses
// Had to look at LeetCode, revisit later

var removeOuterParentheses = S => {
  var newStr = '';
  var outer = 0;
  for (var i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      if (outer > 0) {
        newStr += '(';
      }
      outer++;
    } else if (S[i] === ')') {
      if (outer > 1) {
        newStr += ')';
      }
      outer--;
    }
  }
  return newStr;
};

// console.log(removeOuterParentheses('(()())(())'));
// console.log(removeOuterParentheses('(()())'));
console.log(removeOuterParentheses('(()())(())(()(()))'));
