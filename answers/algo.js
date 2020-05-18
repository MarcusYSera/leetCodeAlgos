var freqAlphabets = function (s) {
  var kAndV = {
    '1': 'a',
    '2': 'b',
    '3': 'c',
    '4': 'd',
    '5': 'e',
    '6': 'f',
    '7': 'g',
    '8': 'h',
    '9': 'i',
    '10#': 'j',
    '11#': 'k',
    '12#': 'l',
    '13#': 'm',
    '14#': 'n',
    '15#': 'o',
    '16#': 'p',
    '17#': 'q',
    '18#': 'r',
    '19#': 's',
    '20#': 't',
    '21#': 'u',
    '22#': 'v',
    '23#': 'w',
    '24#': 'x',
    '25#': 'y',
    '26#': 'z',
  };
  var newArr = s.split('');
  var blankArr = [];
  // var runThrough = newArr.map(x => {
  //   console.log(x);
  // });
  for (var i = 0; i < newArr.length; i++) {
    // console.log(newArr[i]);
    if (newArr[i + 2] == '#') {
      // console.log(newArr[i] + newArr[i + 1] + newArr[i + 2]);
      const n = (newArr[i] + newArr[i + 1] + newArr[i + 2]).toString();
      console.log(n);
      // blankArr.kAndV(n);
      const newChar = (i = i + 2);
    } else {
      // console.log('else: ' + newArr[i]);
    }
  }
  var ans = blankArr.toString();
  // console.log('answer: ' + ans);
  return ans;
};

freqAlphabets('10#11#12');
freqAlphabets('1326#');
