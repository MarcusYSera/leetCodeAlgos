const countingSortAnagram = (s, t) => {
  if (!t || !s) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  let aArray = countingSort(s);
  let bArray = countingSort(t);
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] !== bArray[i]) {
      return false;
    }
  }
  return true;
};

const countingSort = str => {
  const baseStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const newArr = [];
  for (let i = 0; i < 52; i++) {
    if (str.includes(baseStr[i])) {
      let newR = new RegExp(baseStr[i], 'g');
      let x = str.replace(newR, '');
      newArr.push(str.length - x.length);
    } else {
      newArr.push(0);
    }
  }
  return newArr;
};

// console.log(countingSortAnagram('hello', 'good'));
// console.log(countingSortAnagram('hello', 'hello'));
// console.log(countingSortAnagram('', 'hello'));
console.log(countingSortAnagram('hello'));
// console.log(countingSortAnagram('kajshdfg', 'asdfghjk'));
// console.log(countingSortAnagram('hilltop', 'waterfall'));
console.log(countingSortAnagram('jungle', 'gnulej'));
// console.log(countingSortAnagram('jungle', 'tnulej'));
