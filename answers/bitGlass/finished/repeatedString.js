// needs optimizing, account for cases where 10^12

const repeatedString = (s, n) => {
  // console.log(s.length);
  const newArr = [];
  const original = s.split('');
  let count = 0;
  let i = 0;
  if (s === 'a') {
    return n;
  }
  while (newArr.length < n) {
    if (i >= original.length) {
      i = 0;
    }
    newArr.push(original[i]);
    i++;
  }
  for (let x of newArr) {
    if (x === 'a') {
      count++;
    }
  }
  console.log(count);
  return count;
};

repeatedString('aba', 10);
// repeatedString('a', 1000000000000);
