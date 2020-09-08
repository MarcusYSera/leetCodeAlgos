// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3 Methods

function reverse(str) {
        return str.split('').reduce((accumulate,current)=>current+accumulate);
}

// reverse('abcd');

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   return str.split('').reduce((accumulate, current) => current + accumulate);
// }

// function reverse(str) {
//   let answer = '';
//   for (let char of str) {
//     answer = char + answer;
//   }
//   return answer;
// }
