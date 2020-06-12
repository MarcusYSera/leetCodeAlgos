var sortString = function (s) {
  const newArr = [];
  const temp = s.split('').sort();
  for (var i = 0; i < temp.length; ) {
    console.log(i);
    if (i === 0) {
      newArr.push(temp[0]);
      i++;
      continue;
    }
    if (i === 1) {
      if (temp[i] === newArr[newArr.length - 1]) {
        console.log('test');
        i++;
        continue;
      } else if (temp[i] !== newArr[newArr.length - 1]) {
        console.log('test2');
        newArr.push(temp[i]);
        i++;
        continue;
      }
    }
    if (i === 2) {
      i = 1;
      continue;
    }
  }
  console.log('sorted original ' + temp);
  console.log('newArr: ' + newArr);
  return newArr;
};

// sortString('aaaabbbbcccc');
sortString('rat');
// sortString('leetcode');
// sortString('spo');
