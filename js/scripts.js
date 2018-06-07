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

$(document).ready(function() {
  $("#submit").click(function(e){
    e.preventDefault();
    var results = returnOutput($("#userInput").val())
    $("#results").text(results)
  })
})
