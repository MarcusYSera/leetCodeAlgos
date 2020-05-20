// Flipping an Image

var flipAndInvertImage = function (A) {
  // var reverseArr = A;
  // var invArr = [];
  for (var i = 0; i < A.length; i++) {
    console.log('reset');
    if (A[i].length % 2 === 0) {
      for (var x = 0; x < A[i].length / 2; x++) {
        console.log('here is even: ');
      }
    } else if (A[i].length % 2 == 1) {
      console.log('here is odd before: ' + A[i]);
      for (var x = 0; x < A[i].length / 2; x++) {
        const holder = A[i][x];
        A[i][x] = A[i][A[i].length - 1];
        A[i][A[i].length - 1] = holder;
        // return;
      }
      console.log('here is odd after: ' + A[i]);
      return;
    }
  }
};

flipAndInvertImage([
  [1, 1, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1],
]);

// flipAndInvertImage([
//   [1, 1, 0, 0],
//   [1, 0, 0, 1],
//   [0, 1, 1, 1],
//   [1, 0, 1, 0],
// ]);
