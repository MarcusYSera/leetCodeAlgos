// Replace Elements with Greatest Element on Right Side
// refactor for time. slower than 75% of entries

var replaceElements = function (arr) {
  var greatest = 0;
  var count = arr.length - 1;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr);
    if (arr[i + 1] == null) {
      arr[i] = -1;
      console.log('finished: ' + arr);
      return arr;
    }
    while (count > i) {
      if (greatest <= arr[count]) {
        greatest = arr[count];
        count--;
      } else {
        count--;
      }
    }
    arr[i] = greatest;
    greatest = 0;
    count = arr.length - 1;
    // i = count;
  }
};

replaceElements([17, 18, 5, 4, 6, 1]);
