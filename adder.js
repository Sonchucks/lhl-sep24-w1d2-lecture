// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though.

function convertToNumber(arrayOfNumbers) {
  var numbers = [];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var number = parseInt(arrayOfNumbers[i], 10);
    numbers.push(number);
  }

  return numbers;
}

function sum(array) {
  var output = 0;
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    output += number;
  }

  return output;
}

// MAIN
var args = process.argv.slice(2);

console.log("args", args);

var numbers = convertToNumber(args);

console.log("numbers", numbers);

var output = sum(numbers);

console.log("Result:", output);
