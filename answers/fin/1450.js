//

var busyStudent = function (startTime, endTime, queryTime) {
  var count = 0;
  for (var i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      count++;
    }
  }
  console.log(count);

  return count;
};

busyStudent([1, 2, 3], [3, 2, 7], 4);
