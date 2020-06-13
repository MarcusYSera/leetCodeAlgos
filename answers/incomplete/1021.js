// 1021. Remove Outermost Parentheses

var removeOuterParentheses = S => {
  var newArr = S.split('');
  var countOpen = 0;
  // var countClosed = 0;
  for (var i = 0; i < S.length; i++) {
    if (newArr[i] === newArr[i + 1] || ) {
      countOpen++;
    }
    if (newArr[i] === ')' && newArr[i - 1] === '(') {
      continue;
    }
    if (newArr[i] === ')' && newArr[i - 1] !== '(') {
      newArr.splice(i + countOpen - 1, 1);
      newArr.splice(0, 1);
    }
    console.log('progression: ' + newArr);
  }
  return newArr.join('');
};

// console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())'));
// removeOuterParentheses('(()())(())(()(()))');
