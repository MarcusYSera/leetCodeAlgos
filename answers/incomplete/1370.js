var sortString = function (s) {
  var alp = 'abcdefghijklmnopqrstuvwxyz';
  var newOb = new Object();
  for (var i = 0; i < alp.length; i++) {
    newOb.i = alp.slice(i, i + 1);
  }
  console.log(newOb);
  var arr = [];
  // for (var i = 0; i < s.length; i++) {
  //   console.log(i);
  // }
};

// sortString('aaaabbbbcccc');
sortString('rat');
// sortString('leetcode');
// sortString('spo');
