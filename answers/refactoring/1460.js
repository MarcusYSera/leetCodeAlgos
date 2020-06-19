// 1460. Make Two Arrays Equal by Reversing Sub-arrays
// slower than 27% uses more than 71% memory

var canBeEqual = (target, arr) => {
  let leng = target.length;
  if (target[0] === arr[0] && target.length === 1 && arr.length === 1) {
    console.log('target: ' + target[0] + ' arr: ' + arr[0]);
    return true;
  } else if (target.length > 1) {
    for (let i = 0; i < target.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (target[i] === arr[j]) {
          leng--;
          arr.splice(j, 1);
          break;
        }
      }
    }
    // console.log(target);
    // console.log('arr: ' + arr);
    // console.log(count);
    if (arr.length === 0) {
      return true;
    } else if (arr.length !== 0) {
      return false;
    }
  } else {
    return false;
  }
};

// console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
// console.log(canBeEqual([7], [7]));
// console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
// console.log(canBeEqual([172], [84]));
console.log(canBeEqual([1, 2, 2, 3], [1, 1, 2, 3]));
