var createTargetArray = function (nums, index) {
  targetArr = [];
  for (var i = 0; i < nums.length; i++) {
    targetArr.splice(index[i], 0, nums[i]);
  }
  console.log(targetArr);
  return targetArr;
};

createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
