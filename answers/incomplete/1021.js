// 1021. Remove Outermost Parentheses

var removeOuterParentheses = S => {
  var newArr = S.split('');
  var start = 0;
  var finish = 0;
  var open = false;
  var closing = false;
  // var countClosed = 0;
  for (var i = 0; i < S.length; i++) {
    if(newArr[i]==='(' && ){
      start = i;
    }
    if (open === true && closing === true) {
      newArr.splice(start, 1);
      newArr.splice(finish + 1, 1);
      open = false;
      closing = false;
    }
    console.log('progression: ' + newArr);
  }
  return newArr.join('');
};

// console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('(()())'));
// removeOuterParentheses('(()())(())(()(()))');
