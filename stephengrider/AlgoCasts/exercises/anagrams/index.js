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
  let charMapA = createCharMap(stringA);
  let charMapB = createCharMap(stringB);
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false;
    }
  }
  return true;
}

const createCharMap = str => {
  let charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
};

module.exports = anagrams;

// Example Start

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// const cleanString = str => {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// };

// Example Start

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }
