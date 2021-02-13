const maxSumSubArr = arr => {
  let currentMax = 0;
  let globalMax = 0;
  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(0, currentMax + arr[i]);
    globalMax = Math.max(currentMax, globalMax);
  }
  return globalMax;
};

console.log(maxSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
