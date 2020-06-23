// 420. Strong Password Checker

var checkPossibility = nums => {
  if (/^(a-zA-Z0-9){6,20}$/.test(nums) === false) {
    if (nums.length < 6) {
      console.log('nums.length < 6');
      return 6 - nums.length;
    } else if (nums.length > 20) {
      console.log('nums.length > 20');
      return nums.length - 20;
    }
  } else {
    return 0;
  }
  // var count = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums.length < 6) {
  //     return 6 - nums.length;
  //   } else if (nums.length > 20) {
  //     return nums.length - 20;
  //   } else if (/d/) {
  //   } else if ((nums[i] === nums[i + 1]) === nums[i + 2]) {
  //     count++;
  //   } else if (count !== 0) {
  //     return count;
  //   } else {
  //     return 0;
  //   }
  // }
};

// console.log(checkPossibility([4, 2, 3]));
console.log(
  checkPossibility([
    4,
    5,
    6,
    1,
    0,
    2,
    3,
    5,
    3,
    2,
    1,
    3,
    4,
    4,
    2,
    5,
    3,
    'A',
    'b',
    'T',
    2,
    9,
    ,
    'H',
    2,
    9,
    8,
  ]),
);
