var one = "I";
var five = "V";
var ten = "X";
var fifty = "L";
var hundred = "C";
var fiveHundred = "D";
var thousand = "M";

function toRomNum(input) {
  var outputArray = []

  // works for inputs 1 - 3
  for (i = 1; i <= input; ++i) {
    outputArray.push(one)
  }
  return outputArray.join("")
}

toRomNum(3)
