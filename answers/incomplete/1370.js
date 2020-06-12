var sortString = s => {
  var turn = 'forward';
  var newArr = [];
  var nomers =  s =>{
    const temp = s.split('').sort();
    if (turn === 'forward' && temp.length !== 0) {
      var step = 'stepOne';
      for (var i = 0; i < temp.length; ) {
        // console.log('run throughs should appear three times: ' + step);
        // console.log(i);
        if (step === 'stepOne') {
          newArr.push(temp[0]);
          temp.shift();
          step = 'stepTwo';
          continue;
        }
        if (step === 'stepTwo') {
          if (temp[i] === newArr[newArr.length - 1]) {
            // console.log('here is temp: ' + temp[i]);
            i++;
            step = 'stepThree';
            continue;
          } else if (temp[i] !== newArr[newArr.length - 1]) {
            // console.log('test2');
            newArr.push(temp[i]);
            temp.splice(i, 1);
            step = 'stepThree';
            continue;
          }
        }
        if (step === 'stepThree') {
          step = 'stepTwo';
          turn = 'reverse';
          continue;
        }
      }
    }
    if (temp.length !== 0 && turn === 'reverse') {
      var step = 'stepFour';
      for (var m = 0; m < temp.length; ) {
        if (step === 'stepFour') {
          newArr.push(temp[temp.length - 1]);
          temp.pop();
          step = 'stepFive';
          continue;
        }
        if (step === 'stepFive') {
          if (temp[temp.length - m - 1] === newArr[newArr.length - 1]) {
            m++;
            step = 'stepSix';
            continue;
          } else if (temp[temp.length - m - 1] !== newArr[newArr.length - 1]) {
            newArr.push(temp[temp.length - m - 1]);
            // console.log(temp[temp.length - m]);
            temp.splice(temp.length - m - 1, 1);
            step = 'stepSix';
            // console.log(newArr);
            continue;
          }
        }
        if (step === 'stepSix') {
          step = 'stepFive';
          turn = 'forward';
          continue;
        }
      }
    }
    if (temp.length !== 0) {
      nomers(temp.join(''));
    }
    return newArr;
  };
  nomers(s);
  return newArr.join('')
};

console.log(nomers('aaaabbbbcccc'));
// sortString('rat');
// sortString('leetcode');
// sortString('spo');
