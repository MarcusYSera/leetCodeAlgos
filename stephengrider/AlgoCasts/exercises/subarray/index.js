// Three variations

//kadane's algo

// Check for maximum sub array

// const maxSumSubArr = arr => {
//   let currentMax = 0;
//   let globalMax = 0;
//   for (let x of arr) {
//     currentMax = Math.max(0, currentMax + x);
//     globalMax = Math.max(currentMax, globalMax);
//   }
//   return globalMax;
// };

// Check for smallest sum sub arr

// Get sub arr of maximum amount

// const maxSumSubArr = arr => {
//   let currentMax = 0;
//   let globalMax = 0;
//   let best_start = 0;
//   let best_end = 0;
//   let start = 0;
//   for (let [i, x] of arr.entries()) {
//     if (currentMax <= 0) {
//       start = i;
//       currentMax = x;
//     } else {
//       currentMax += x;
//     }
//     if (currentMax > globalMax) {
//       globalMax = currentMax;
//       best_start = start;
//       best_end = i + 1;
//     }
//   }
//   return arr.slice(best_start, best_end);
// };

console.log(maxSumSubArr([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
