var sockMerchant = (n, ar) => {
  let map = {};
  let count = 0;
  for (let i of ar) {
    if (map[i]) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }
  for (let i in map) {
    if (map[i] >= 2) {
      let multiple = Math.floor(map[i] / 2);
      count = count + multiple;
    }
  }
  console.log(count);
  return count;
};

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
