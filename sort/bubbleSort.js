//O(n2)

const bubbleSort = x => {
  let swap;
  let n = x.length - 1;
  let a = x;
  do {
    swap = false;
    for (let i = 0; i < n; i++) {
      if (a[i] < a[i + 1]) {
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return a;
};
console.log(bubbleSort([5, 10, 6, 12, 15, 1]));
