// Self Dividing Numbers

var selfDividingNumbers = (left, right) => {
  var newArr = [];
  for (var i = left; i <= right; i++) {
    if (i > 9) {
      const newNum = i.toString().split('');
      var count = newNum.length - 1;
      for (var x = 0; x < newNum.length - 1; x++) {
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
