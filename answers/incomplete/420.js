// 420. Strong Password Checker

var strongPasswordChecker = s => {
  if (/^(a-zA-Z0-9){6,20}$/.test(s) === false) {
    if (s.length < 6) {
      console.log('s.length < 6');
      return 6 - s.length;
    } else if (s.length > 20) {
      console.log('s.length > 20');
      return s.length - 20;
    } else {
      return 'error';
    }
  } else {
    return 0;
  }
  // var count = 0;
  // for (let i = 0; i < s.length; i++) {
  //   if (s.length < 6) {
  //     return 6 - s.length;
  //   } else if (s.length > 20) {
  //     return s.length - 20;
  //   } else if (/d/) {
  //   } else if ((s[i] === s[i + 1]) === s[i + 2]) {
  //     count++;
  //   } else if (count !== 0) {
  //     return count;
  //   } else {
  //     return 0;
  //   }
  // }
};

console.log(strongPasswordChecker('taCqBA1236'));
