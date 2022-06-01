function zeroDarkThirty(num) {
  debugger;
  if (num === 0) {
    return NaN;
  } else {
    let noZeros = ''
    let strNum = num.toString();
    for (let i = 0; i < strNum.length; i++)
      if (strNum[i] !== '0') {
        noZeros += strNum[i];
      } return parseInt(noZeros);
  } 
}

zeroDarkThirty(90.210);