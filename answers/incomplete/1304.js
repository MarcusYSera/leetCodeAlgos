// Find N Unique Integers Sum up to Zero

var sumZero = n => {
  // console.log(n);
  var newArr = [];
  for (var i = 0; i < n; i++) {
    // console.log(i);
    if (n % 2 === 0) {
      // console.log('even');
    } else if (n % 2 == 1) {
      newArr.push(0);
      // console.log('odd');
      console.log(newArr);
      
    }
  }
};

sumZero(5);
sumZero(4);
// sumZero(1);
// sumZero(7);
