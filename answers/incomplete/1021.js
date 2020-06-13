// 1021. Remove Outermost Parentheses

var removeOuterParentheses = S => {
  var newArr = S.split('');
  var count = 0;
  for (var i = 0; i < S.length; i++) {
    if ('(' === newArr[i]) {
      console.log('open');
    }
  }
};

console.log(removeOuterParentheses('(()())(())'));
// removeOuterParentheses('(()())(())(()(()))');
