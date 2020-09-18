// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// Example Start

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

// Example Start

// let _ = require('lodash');
// return _.isEqual(aArray, bArray);

// counting sort should run in O(n)

// counting sort with map creation, not optimized

// const countingSortAnagram = (s, t) => {
//   if (!t || !s) {
//     return false;
//   }
//   if (s.length !== t.length) {
//     return false;
//   }
//   let aArray = countingSort(s);
//   let bArray = countingSort(t);
//   for (let i = 0; i < aArray.length; i++) {
//     if (aArray[i] !== bArray[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const countingSort = arr => {
//   const baseStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const count = {};
//   const newArr = [];
//   for (let i = 0; i < 52; i++) {
//     count[baseStr[i]] = 0;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     count[arr[i]] += 1;
//   }
//   for (let i in count) {
//     newArr.push(count[i]);
//   }
//   return newArr;
// };

// example start

// counting sort optimized with only array creation

const countingSortAnagram = (s, t) => {
  if (!t || !s) {
    return false;
  }
  if (s.length !== t.length) {
    return false;
  }
  let aArray = countingSort(s);
  let bArray = countingSort(t);
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] !== bArray[i]) {
      return false;
    }
  }
  return true;
};

const countingSort = str => {
  const baseStr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const newArr = [];
  for (let i = 0; i < 52; i++) {
    if (str.includes(baseStr[i])) {
      let newR = new RegExp(baseStr[i], 'g');
      let x = str.replace(newR, '');
      newArr.push(str.length - x.length);
    } else {
      newArr.push(0);
    }
  }
  return newArr;
};

// console.log(countingSortAnagram('hello', 'good'));
// console.log(countingSortAnagram('hello', 'hello'));
// console.log(countingSortAnagram('', 'hello'));
console.log(countingSortAnagram('hello'));
// console.log(countingSortAnagram('kajshdfg', 'asdfghjk'));
// console.log(countingSortAnagram('hilltop', 'waterfall'));
console.log(countingSortAnagram('jungle', 'gnulej'));
// console.log(countingSortAnagram('jungle', 'tnulej'));;
