const countingValleys = (n, s) => {
  let count = 0;
  let countMem = 0;
  let valleys = 0;
  for (let i of s) {
    countMem = count;
    if (i === 'U') {
      count++;
    } else if (i === 'D') {
      count--;
    }
    if (count === -1 && countMem === 0) {
      valleys++;
    }
  }
  console.log(valleys);
  return valleys;
};

countingValleys(8, 'UDDDUDUU');
