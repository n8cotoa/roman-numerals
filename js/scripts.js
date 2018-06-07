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

function findSimpleTeens(input) {
  // works for inputs 11 - 13 or 16-18
  if ((input <= 13) && (input >= 11)) {
    return x + find1To3(input - 10)
  } else if (input === 14 || input === 19) {
    return x + find4Or9(input - 10)
  } else if ((input <= 18) && (input >= 16)) {
    return x + find6To8(input - 10)
  }
}

findSimpleTeens(14)
