// 1021. Remove Outermost Parentheses

var removeOuterParentheses = S => {
  var newArr = S.split('');
  var countOpen = 0;
  // var countClosed = 0;
  for (var i = 0; i < S.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      countOpen++;
    } else {
      newArr.splice(i, 1);
      newArr.splice()
    }
  }
};

console.log(removeOuterParentheses('(()())(())'));
// removeOuterParentheses('(()())(())(()(()))');
