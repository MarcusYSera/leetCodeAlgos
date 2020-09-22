// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3 Solutions

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('abcd'));
console.log(reverse('hasdfgweqrg'));
// reverse('hello');

module.exports = reverse;
