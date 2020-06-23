var regEx = x => {
  return /^([a-zA-Z0-9]{6,20})$/.test(x);
};

console.log(regEx('hesaerASDF234'));
console.log(regEx('hesasadfasdf23423423'));
