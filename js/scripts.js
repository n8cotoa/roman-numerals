var i = "I";
var v = "V";
var x = "X";
var l = "L";
var c = "C";
var d = "D";
var m = "M";

function find1To3(input) {
  var outputArray = []

  // works for inputs 1 - 3
  for (j = 1; j <= input; ++j) {
    outputArray.push(i)
  }
  return outputArray.join("")


}

function find4Or9(input) {
  if (input === 4) {
    return i + v
  } else if (input === 9) {
    return i + x
  }
}

function find6To8(input) {
  // works for inputs 6 - 8
  var oneToThreeVar = find1To3(input - 5)
  return v + oneToThreeVar;
}

function findTeens(input) {
  // works for inputs 11 - 19
  if ((input <= 13) && (input >= 11)) {
    return x + find1To3(input - 10)
  } else if (input === 14 || input === 19) {
    return x + find4Or9(input - 10)
  } else if ((input <= 18) && (input >= 16)) {
    return x + find6To8(input - 10)
  }
}

function biquinary(input) {
    if (input === 10) {
    return x
  } else if (input === 50) {
    return l
  } else if (input === 100) {
    return c
  } else if (input === 500) {
    return d
  } else if (input === 1000) {
    return m
  }
}

findSimpleTeens(14)
