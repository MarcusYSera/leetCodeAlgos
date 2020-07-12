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
  } else if (/(.)\1{2,}/.test(s) === true) {
    let x = s.split('');
    while (/(.)\1{2,}/.test(s) === true) {
      x.splice(s.search(/(.)\1{2,}/), 1);
      count++;
      s = x.join('');
    }
    return count;
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
    return count;
  }
};

var changeRepeat = x => {
  return x;
};

// console.log(strongPasswordChecker('ASDFasdfaGWERGW'));
// console.log(strongPasswordChecker('012341asdfa'));
console.log(strongPasswordChecker('00aaaBBB999'));
// console.log(strongPasswordChecker('1236'));
