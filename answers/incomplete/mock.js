const countingSortAnagram = (s, t) => {
  if (!t || !s) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  let aArray = countingSort(s);
  let bArray = countingSort(t);
  // return _.isEqual(aArray, bArray);
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] !== bArray[i]) {
      return false;
    }
  }
  return true;
};

const countingSort = arr => {
  const baseStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const count = {};
  const newArr = [];
  // map creation
  for (let i = 0; i < 52; i++) {
    count[baseStr[i]] = 0;
  }
  // console.log(count);
  // looping through for increments
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  // pulling out values to a direct array
  for (let i in count) {
    newArr.push(count[i]);
  }
  // return count;
  return newArr;
};

// console.log(countingSortAnagram('hello', 'good'));
console.log(countingSortAnagram('hello', 'hello'));
// console.log(countingSortAnagram('', 'hello'));
// console.log(countingSortAnagram('hello'));
// console.log(countingSortAnagram('kajshdfg', 'asdfghjk'));
// console.log(countingSortAnagram('hilltop', 'waterfall'));
// console.log(countingSortAnagram('jungle', 'gnulej'));