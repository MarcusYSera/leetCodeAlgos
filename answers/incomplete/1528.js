// 1528. Shuffle String

// can still be further optimized

// used hash map, it auto sorted the numbers

const restoreString = (s, indices) => {
  let strArr = s.split('');
  let map = {};
  let newStr = [];
  for (let i in indices) {
    map[indices[i]] = strArr[i];
  }
  for (let i in map) {
    newStr.push(map[i]);
  }
  console.log(newStr.join(''));
  return newStr.join('');
};

restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]);
