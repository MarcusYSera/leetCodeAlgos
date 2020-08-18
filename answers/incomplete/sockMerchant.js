var sockMerchant = (n, ar) => {
  let map = {};
  let count = 0;
  for (let i of ar) {
    map[i] = map[i]++ || 1;
  }
  console.log(map);
};

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
