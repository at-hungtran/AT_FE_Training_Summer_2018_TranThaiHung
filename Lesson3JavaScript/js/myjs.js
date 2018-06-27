function computeTheSum(numberOne, numberTwo) {
  var sum = numberOne + numberTwo;

  if(numberOne === numberTwo)
    return sum * 3;
  return sum;
}

function computeTheAbsolute(numInput) {  
  var numOutPut;

  if(numInput <= 19)
    numOutPut = 19 - numInput;
  else 
    numOutPut = (numInput - 19) * 3;
  return numOutPut; 
}

function findMaskedNumber(input) {
  var output = [];

  for(var i = 0; i <= 9; i++) {
    var inputAfterReplace=input.replace('*', i);
    if(parseInt(inputAfterReplace) % 3 === 0)
      output.push(inputAfterReplace);
  }
  return output;
}

function findMaskedNumber(input) {
  var output = [];

  for(var i = 0; i <= 9; i++) {
    var inputAfterReplace=input.replace('*', i);
    if(parseInt(inputAfterReplace) % 6 === 0) {
      output.push(inputAfterReplace);
    }
  }
  return output;
}

