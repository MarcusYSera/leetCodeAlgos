// Self Dividing Numbers

var selfDividingNumbers = (left, right) => {
  var newArr = [];
  for (var i = left; i <= right; i++) {
    console.log();
    break;
    if (i % i == 0) {
      newArr.push(i);
    }
  }
  console.log(newArr);
  return newArr;
};

selfDividingNumbers(1, 22);
