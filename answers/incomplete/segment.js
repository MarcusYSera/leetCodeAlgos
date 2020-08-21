const segment = (x, space) => {
  if (space.length === 1) {
    return space[0];
  }
  // if ((x = 1)) {
  //   let max = 0;
  //   for (let x of space) {
  //     if (max < x) {
  //       max = x;
  //     }
  //   }
  //   return max;
  // }
  let chunked = chunk(space, x);
  let max = 0;
  for (let i of chunked) {
    let min = i[0];
    for (let x of i) {
      if (min > x) {
        min = x;
      }
    }
    if (min > max) {
      max = min;
    }
  }
  return max;
};

const chunk = (array, size) => {
  const chu = [];
  let index = 0;

  while (index < array.length && size + index <= array.length) {
    chu.push(array.slice(index, index + size));
    index += 1;
  }
  return chu;
};

// segment(1, [1, 2, 3, 1, 2]);
// segment(2, [1, 1, 1]);
segment(3, [2, 5, 4, 6, 8]);
