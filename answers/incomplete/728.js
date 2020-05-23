// Self Dividing Numbers
// refactor: is slower than 88% of other entries
// takes more memory than 97% of other entries

var selfDividingNumbers = (left, right) => {
  var newArr = [];
  for (var i = left; i <= right; i++) {
    if (i > 9) {
      const newNum = i.toString().split('');
      var count = newNum.length;
      for (var x = 0; x < newNum.length; x++) {
        if (Number(newNum[x]) == 0) {
          break;
        }
        if (i % Number(newNum[x]) == 0) {
          count--;
        }
        if (i % Number(newNum[x]) == 0 && count === 0) {
          newArr.push(i);
        }
      }
    } else if (i % i == 0 && i < 10) {
      newArr.push(i);
    }
  }
  console.log(newArr);
  return newArr;
};

selfDividingNumbers(1, 22);
