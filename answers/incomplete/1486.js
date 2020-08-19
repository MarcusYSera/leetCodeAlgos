// XOR Operation in an Array

const xorOperation = (n, start) => {
  let newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(start + 2 * i);
  }
  console.log(newArr.reduce((acc, current) => acc ^ current));
  return newArr[n - 2] ^ newArr[n - 1];
};

xorOperation(4, 3);
// xorOperation(10, 5);
