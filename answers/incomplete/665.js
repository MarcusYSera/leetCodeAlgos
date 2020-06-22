// 665. Non-decreasing Array

var checkPossibility = nums => {
  var count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums.length < 6) {
      return 6 - nums.length;
    } else if (nums.length > 20) {
      return nums.length - 20;
    } else if ((nums[i] === nums[i + 1]) === nums[i + 2]) {
      count++;
    } else {
      return 0;
    }
  }
};

console.log(checkPossibility([4, 2, 3]));
