// 1370. Increasing Decreasing String

var sortString = s => {
  var newArr = [];
  var m = s.split('');
  for (var i = 0; i < m.length; i++) {
    console.log(m[i]);
    newArr.push(m.sort()[0]);
   }
  console.log(newArr);
};

// sortString('aaaabbbbcccc');

sortString('rat');

// sortString('leetcode');

// sortString('ggggggg');

// sortString('spo');
