// 420. Strong Password Checker

var strongPasswordChecker = s => {
  let count = 0;
  if (/([A-Za-z0-9]{6,20})/.test(s) === false) {
    if (s.length < 6) {
      console.log('s.length < 6');
      return 6 - s.length;
    } else if (s.length > 20) {
      console.log('s.length > 20');
      return s.length - 20;
    }
  } else if (/([A-Za-z0-9]{6,20})/.test(s) === true) {
    console.log('statement was true');
    if (s.length === 20) {
      count++;
    }
    if (/([a-z])/.test(s) === false) {
      console.log('no lower case');
      count++;
    }
    if (/([A-Z])/.test(s) === false) {
      console.log('no upper case');
      count++;
    }
    if (/([0-9])/.test(s) === false) {
      console.log('no num');
      count++;
    }
    console.log(/(.)\1{2,}/.test(s));
    if (/(.)\1{2,}/.test(s) === true) {
      console.log('more than 3');
      count++;
    }
    return count;
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

// console.log(strongPasswordChecker('ASDFasdfaGWERGW'));
// console.log(strongPasswordChecker('012341asdfa'));
console.log(strongPasswordChecker('000aaaBBB999'));
// console.log(strongPasswordChecker('1236'));
