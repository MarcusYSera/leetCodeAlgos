// 657. Robot Return to Origin
// slower than 65% more memory than 86%

var judgeCircle = moves => {
  moves = moves.split('');
  var direction = { U: 1, D: -1, L: 2, R: -2 };
  let score = 0;
  for (let i = 0; i < moves.length; i++) {
    score = score + direction[moves[i]];
  }
  return score === 0 ? true : false;
};

// console.log(judgeCircle('UD'));
// console.log(judgeCircle('LL'));
console.log(judgeCircle('LDRRLRUULR'));
