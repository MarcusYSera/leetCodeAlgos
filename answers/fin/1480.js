// 1480. Running Sum of 1d Array
// slower than 17% of other submissions and uses the least amount of memory

var runningSum = nums => {
  let newArr = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + sum;
    newArr.push(sum);
  }
  return newArr;
};

console.log(runningSum([1, 2, 3, 4]));
