// 665. Non-decreasing Array

var checkPossibility = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.length < 6) {
      return 6 - nums.length;
    } else if (nums.length > 20) {
      return nums.length - 20;
    } else if (){

    }else {
      return 0;
    }
  }
};

console.log(checkPossibility([4, 2, 3]));
