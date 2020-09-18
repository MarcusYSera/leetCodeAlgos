// const mock = q => {
//   return;
// };

// console.log(mock());

// 5 email validation with 1-6 letters, optional _, and 0-4 numbers @ hackerrankteam.com
const regMatch = str => {
  let re = new RegExp(/^[a-z]{1,6}_?\d{0,4}@hackerrankteam.com/, 'g');
  return re.test(str);
};

// console.log(regMatch('aasdff_8369@hackerrankteam.com')); // pass
// console.log(regMatch('aasdffa_8369@hackerrankteam.com')); // 7 letters fail
// console.log(regMatch('aasdffa_38369@hackerrankteam.com')); // 5 numbers fail
// console.log(regMatch('aasdff3369@hackerrankteam.com')); // no underscore pass
// console.log(regMatch('aasdff@hackerrankteam.com')); // no numbers pass
// console.log(regMatch('aasdff@hackerrankteam.com')); // missing ending

// 1 matching parenthesis

// 2 trailing numbers, find the max difference

// 3 get request from a sample api to display a return from the json object solved

// 4 fibonnaci not optimized, print off full array of fib
var x = [];
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    x.push(Object.values(cache));
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// const fib = n => {
//   let newArr = [];
//   if (n < 2) {
//     if (n === 1) {
//       newArr.push(0, 1);
//     } else if (n === 0) {
//       newArr.push(0);
//     }
//   }
//   for (let i = 1; i <= n; i++) {
//     console.log((memoize(slowFib(i))));
//     // newArr.push(memoize(slowFib(i)));
//   }
//   return newArr;
// };

const fib = memoize(slowFib);

console.log(fib(4));
console.log(x[x.length - 1]);

// function braces(values) {
//   let answers = [];
//   let stack = [];
//   let charMap = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   };
//   for (let x = 0; x < values.length; x++) {
//     for (let i = 0; i < values[x].length; i++) {
//       if (values[x][i] === '(' || values[x][i] === '[' || values[x][i] === '{') {
//         stack.push(values[x][i]);
//       } else {
//         let check = stack.pop();
//         if (values[x][i] !== charMap[check]) {
//           answers.push('NO');
//           console.log(values);
//           console.log('NO');
//           break;
//         }
//       }
//     }
//     if (stack.length !== 0) {
//       answers.push('NO');
//       return;
//     } else {
//       answers.push('YES');
//     }
//   }
//   return answers;
// }
