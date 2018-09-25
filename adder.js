// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though.

var args = process.argv.slice(2);

console.log("args", args);

function convertToNumber(arrayOfNumbers) {
  var numbers = [];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var number = parseInt(arrayOfNumbers[i], 10);
    numbers.push(number);
  }

  return numbers;
}

var numbers = convertToNumber(args);

console.log("numbers", numbers);
