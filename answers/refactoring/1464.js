// 1464. Maximum Product of Two Elements in an Array
// not optimized
// Refactor slower: 31% more memory: 42%

var maxProduct = nums => {
  let maxOne = 0;
  let maxTwo = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxOne) {
      maxTwo = maxOne;
      maxOne = nums[i] - 1;
    } else if (nums[i] > maxTwo) {
      maxTwo = nums[i] - 1;
    }
  }
  let product = maxOne * maxTwo;
  return product;
};

// console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([10, 2, 5, 2]));
