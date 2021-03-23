function addTwoDigits(n) {
  let sum = 0;
  n = n.toString().split('');
  console.log(n);
}

// addTwoDigits(29);

function centuryFromYear(year) {
  let century = 0;
  if (year < 100) {
    century = 1;
  }
  year = year.toString().split('');
  console.log(parseInt(year[0] + year[1]));
  return century;
}

console.log(centuryFromYear(200));
