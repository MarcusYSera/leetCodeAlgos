const maxStrength = n => {
  const newArr = [];
  newArr.push(n);
  let finished = false;
  while (!finished) {
    const x = newArr[newArr.length - 1].toString().split('');
    let sum = 0;
    for (let i of x) {
      sum += factorial(parseInt(i));
    }
    for (let i of newArr) {
      // refactor needed here, repeat code, can be convereted to own function
      const y = sum.toString().split('');
      let add = 0;
      for (let j of x) {
        add += factorial(parseInt(j));
      }
      if (i === add) {
        finished = true;
        continue;
      }
    }
    if (!finished) {
      newArr.push(sum);
    }
  }
  let max = 0;
  for (let i of newArr) {
    if (i > max) {
      max = i;
    }
  }
  return max * newArr.length;
};

const factorial = n => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

// maxStrength(540);
maxStrength(5);
