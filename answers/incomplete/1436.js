// 1436. Destination City
// refactor: run time slower than 67% of other submissions

var destCity = function (paths) {
  // var start = paths[0][0];
  var fin = paths[0][1];
  console.log(fin);
  for (var i = 0; i < paths.length; i++) {
    if (fin == paths[i][0]) {
      fin = paths[i][1];
      i = 0;
    }
  }
  console.log(fin);
  return fin;
};

// destCity([
//   ['London', 'New York'],
//   ['New York', 'Lima'],
//   ['Lima', 'Sao Paulo'],
// ]);

// destCity([
//   ['pYyNGfBYbm', 'wxAscRuzOl'],
//   ['kzwEQHfwce', 'pYyNGfBYbm'],
// ]);

destCity([
  ['qMTSlfgZlC', 'ePvzZaqLXj'],
  ['xKhZXfuBeC', 'TtnllZpKKg'],
  ['ePvzZaqLXj', 'sxrvXFcqgG'],
  ['sxrvXFcqgG', 'xKhZXfuBeC'],
  ['TtnllZpKKg', 'OAxMijOZgW'],
]);

// destCity([
//   ['B', 'C'],
//   ['D', 'B'],
//   ['C', 'A'],
// ]);
