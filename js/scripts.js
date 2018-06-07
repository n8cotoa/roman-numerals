var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";

function find1To3(input) {
  var outputArray = []

  // works for inputs 1 - 3
  for (i = 1; i <= input; ++i) {
    outputArray.push(one)
  }
  return outputArray.join("")


}

function find6To8(input) {
  // works for inputs 6 - 8
  var oneToThreeVar = find1To3(input - 5)
  return five + oneToThreeVar;
}

find6To8(7)
