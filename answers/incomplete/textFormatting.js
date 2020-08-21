const textFormatting = (starting, ending, style) => {
  let max = 0;
  let count = 0;
  for (let i of ending) {
    if (max < i) {
      max = i;
    }
  }
  let hashMap = {};
  for (let i = 0; i < max; i++) {
    for (let j = starting[i]; j <= ending[i]; j++) {
      if (hashMap[j]) {
        let holder = hashMap[j];
        if (!holder.includes(style[i])) {
          hashMap[j].push(style[i]);
        }
      } else {
        hashMap[j] = [style[i]];
      }
    }
  }
  for (let i in hashMap) {
    if (hashMap[i].includes('b')) {
      let m = i;
      while (hashMap[m].includes('b')) {
        m++;
      }
    }
    if (hashMap[i].includes('u')) {
    }
    if (hashMap[i].includes('i')) {
    }
  }
  // console.log(hashMap);
};

textFormatting(
  [1, 17, 3, 3, 1, 13],
  [5, 20, 8, 12, 1, 18],
  ['b', 'b', 'i', 'i', 'u', 'u'],
);
