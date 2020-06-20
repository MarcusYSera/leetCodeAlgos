// 136. Single Number
// slower than 60% uses more memory than 15%

var singleNumber = nums => {
  nums = nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
};

console.log(singleNumber([2, 2, 1]));
