// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = fn => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
};

const slowFib = n => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

const fib = memoize(slowFib);

module.exports = fib;

// #1 recursive

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }
//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   };
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

// #2 iterative

// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }

// #3 recursive, but it takes exponential time 2^n, meaning time doubles for each element

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
