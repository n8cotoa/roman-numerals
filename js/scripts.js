var i = "I";
var v = "V";
var x = "X";
var l = "L";
var c = "C";
var d = "D";
var m = "M";

function makeReverseUserArray(inputNum) {
  var userArray = inputNum.toString().split("").reverse();
  return userArray
}



function find1To3(input, repeater) {
  var outputArray = []

  // works for inputs 1 - 3
  for (j = 1; j <= input; ++j) {
    outputArray.push(repeater)
  }
  return outputArray.join("")
}
var finalArray = []

function translateOnesPlace(input){
  var onesPlace = parseInt(makeReverseUserArray(input)[0])
  var outputArray = []
  if (onesPlace === 1 || onesPlace === 2 || onesPlace === 3 ) {
    return find1To3(onesPlace, i)
  } else if (onesPlace === 4) {
      return i + v
  } else if (onesPlace === 9) {
      return i + x
  } else if (onesPlace === 0 || onesPlace === typeof(undefined)) {
      return ""
  } else {
    var oneToThreeVar = find1To3(onesPlace - 5, i)
    return v + oneToThreeVar;
  }
}

function translateTensPlace(input) {
  var tensPlace = parseInt(makeReverseUserArray(input)[1])
  var outputArray = []
  if (tensPlace === 1 || tensPlace === 2 || tensPlace === 3 ) {
    return find1To3(tensPlace, x)
  } else if (tensPlace === 4) {
      return x + l
  } else if (tensPlace === 9) {
      return x + c
  } else if (tensPlace === 0 || tensPlace === NaN) {
    return ""
  } else {
      var oneToThreeVar = find1To3(tensPlace - 5, x)
      return l + oneToThreeVar;
  }
}

function translateHundredsPlace(input) {
  hundredsPlace = parseInt(makeReverseUserArray(input)[2])
  outputArray = []
  if (hundredsPlace === 1 || hundredsPlace === 2 || hundredsPlace === 3) {
    return find1To3(hundredsPlace, c)
  } else if (hundredsPlace === 4) {
    return c + d
  } else if (hundredsPlace === 9) {
    return m + c
  } else if (hundredsPlace === 0 || hundredsPlace === NaN) {
    return ""
  } else {
    console.log(hundredsPlace, "translateHundresPlace")
    var oneToThreeVar = find1To3(hundredsPlace - 5, c)
    return d + oneToThreeVar;
  }
}

function translateThousandsPlace(input) {
  thousandsPlace = parseInt(makeReverseUserArray(input)[3])
  outputArray = []
  if (thousandsPlace === 1 || thousandsPlace === 2 || thousandsPlace === 3) {
    return find1To3(thousandsPlace, m)
  } else if (thousandsPlace === 0 || thousandsPlace === NaN) {
    return ""
  }
}

function returnOutput(input) {
  var userArray = makeReverseUserArray(input)
  if (userArray.length === 4) {
    return translateThousandsPlace(input) + translateHundredsPlace(input) + translateTensPlace(input) + translateOnesPlace(input)
  } else if (userArray.length === 3) {
    return translateHundredsPlace(input) + translateTensPlace(input) + translateOnesPlace(input)
  } else if (userArray.length === 2) {
    return translateTensPlace(input) + translateOnesPlace(input)
  } else if (userArray.length === 1) {
    return translateOnesPlace(input)
  } else {
    return "Please put in a number"
  }

}

//
// function find20Or30(input) {
//   var outputArray = []
//   for (y = 1; y <= input/10; ++y) {
//   outputArray.push(x);
//   }
//   return outputArray.join("")
// }

// Translates 1 - 3, and 10, 20, 30 by branching
// function find1To3Or10Or30or50To80(input){
//   var outputArray = []
//   if (input <= 3) {
//     for (j = 1; j <= input; ++j) {
//       outputArray.push(i)
//     }
//     return outputArray.join("")
//   } else if (input === 10 || input === 20 || input === 30) {
//     for (y = 1; y <= input/10; ++y) {
//     outputArray.push(x);
//     }
//     return outputArray.join("")
//   }
// }
//
// function find4Or9(input) {
//   if (input === 4) {
//     return i + v
//   } else if (input === 9) {
//     return i + x
//   }
// }
//
// function find6To8(input) {
//   // works for inputs 6 - 8
//   var oneToThreeVar = find1To3(input - 5)
//   return v + oneToThreeVar;
// }
//
// function findTeens(input) {
//   // works for inputs 11 - 19
//   if ((input <= 13) && (input >= 11)) {
//     return x + find1To3(input - 10)
//   } else if (input === 14 || input === 19) {
//     return x + find4Or9(input - 10)
//   } else if ((input <= 18) && (input >= 16)) {
//     return x + find6To8(input - 10)
//   }
// }
//
// function findTwoDigit(input) {
//   // works for inputs 11 - 19
//   var tens = parseInt(makeUserArray(input)[0])
//   console.log(tens, typeof(tens))
//   if ((input <= parseInt(tens.toString() + 3)) && (input >= parseInt((tens.toString() + 1)))) {
//     var xString = ""
//     for (b = 1; b <= 3; ++b) {
//       xString = xString.concat(x);
//     }
//     console.log("xString", xString)
//     return xString + find1To3Or10Or30(input - (tens * 10))
//   } else if (input === 14 || input === 19) {
//     return x + find4Or9(input - 10)
//   } else if ((input <= 18) && (input >= 16)) {
//     return x + find6To8(input - 10)
//   }
// }

// function biquinary(input) {
//     if (input === 10) {
//     return x
//   } else if (input === 50) {
//     return l
//   } else if (input === 100) {
//     return c
//   } else if (input === 500) {
//     return d
//   } else if (input === 1000) {
//     return m
//   }
// }
