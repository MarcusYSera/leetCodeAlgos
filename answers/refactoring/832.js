// Flipping an Image

// BAD REDO LATER

var flipAndInvertImage = function (A) {
  for (var i = 0; i < A.length; i++) {
    if (A[i].length % 2 === 0) {
      for (let x = 0; x < A[i].length / 2; x++) {
        let holder = A[i][x];
        A[i][x] = A[i][A[x].length - (x + 1)];
        A[i][A[x].length - (x + 1)] = holder;
      }
    } else if (A[i].length % 2 == 1) {
      for (let x = 0; x < A[i].length / 2 - 1; x++) {
        let holder = A[i][x];
        A[i][x] = A[i][A[x].length - (x + 1)];
        A[i][A[x].length - (x + 1)] = holder;
      }
    }
    for (let m = 0; m < A[i].length; m++) {
      if (A[i][m] === 0) {
        A[i][m] = 1;
      } else {
        A[i][m] = 0;
      }
    }
  }
  console.log(A);
  return A;
};

// flipAndInvertImage([
//   [1, 1, 0, 0, 0],
//   [1, 0, 1, 1, 0],
//   [0, 0, 0, 0, 1],
//   [0, 0, 0, 1, 1],
// ]);

flipAndInvertImage([
  [1, 1, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 1, 1],
  [1, 0, 1, 0],
]);
