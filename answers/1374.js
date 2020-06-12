// 1374. Generate a String with Characters that have odd counts

var generateTheString = n => {
  return n % 2 === 1 ? 'a'.repeat(n) : 'a'.repeat(n - 1).concat('b');
};

// console.log(generateTheString(4));
console.log(generateTheString(4));
