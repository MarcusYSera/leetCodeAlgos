// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {}

module.exports = maxChar;

// function maxChar(str) {
// let charMap = {};
// let max = 0;
// let charMax = '';
// for (let char of str) {
//   if (charMap[char]) {
//     charMap[char]++;
//   } else {
//     charMap[char] = 1;
//   }
// }
// for(let char in charMap){
//   if(charMap[char] > max){
//     max = charMap[char];
//     charMax = char;
//   }
// }
// return charMax;
// }

// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let charMax = '';
//   for(let char of str){
//     charMap[char] = charMap[char]++ || 1;
//   }
//   for(let char in charMap){
//     if(charMap[char]> max){
//       max = charMap[char];
//       charMax = char;
//     }
//   }
//   return charMax;
// }
