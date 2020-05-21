// Find N Unique Integers Sum up to Zero

// refactor to speed up
// memory usage 100%

var sumZero = n => {
  // console.log(n);
  var newArr = [];
  for (var i = 0; i < n; i++) {
    // console.log(i);
    if (n % 2 === 0) {
      newArr.push(n - i);
      newArr.push((n - i) * -1);
      i++;
    } else if (n % 2 == 1) {
      if (newArr[0] == null) {
        newArr.push(0);
        i++;
      } else if (newArr[0] != null) {
        newArr.push(n - i);
        newArr.push((n - i) * -1);
        i++;
      }
    }
    // return;
  }
  return newArr;
};

sumZero(5);
// sumZero(4);
// sumZero(1);
// sumZero(7);
