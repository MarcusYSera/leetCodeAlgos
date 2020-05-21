// 1436. Destination City

var destCity = function (paths) {
  // var start = paths[0][0];
  var fin = paths[0][1];
  var i = 0;
  while (paths[i + 1] != null) {
    console.log('nom');
    i++;
  }
  console.log(fin);
  return fin;
};

destCity([
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
]);

// destCity([
//   ['B', 'C'],
//   ['D', 'B'],
//   ['C', 'A'],
// ]);
