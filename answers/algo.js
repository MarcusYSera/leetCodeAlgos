var minTimeToVisitAllPoints = function (points) {
  var seconds = 0;
  var difOne = 0;
  var difTwo = 0;
  for (var i = 0; i < points.length; i++) {
    if (points[i + 1] != null) {
      difOne = Math.abs(points[i][0] - points[i + 1][0]);
      difTwo = Math.abs(points[i][1] - points[i + 1][1]);
      if (difOne > difTwo) {
        seconds = seconds + difOne;
      } else {
        seconds = seconds + difTwo;
      }
      console.log('this is difOne: ' + difOne);
      console.log('this is difTwo: ' + difTwo);
    }
  }
  console.log(seconds);
  return seconds;
};

minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0],
]);
