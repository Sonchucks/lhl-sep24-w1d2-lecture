// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though.

function convertToNumber(arrayOfNumbers) {
  var numbers = [];

  for (var i = 0; i < arrayOfNumbers.length; i++) {
    var number = Number(arrayOfNumbers[i]);
    if (Number.isInteger(number)) {
      numbers.push(number);
    }
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

function sub(array) {
  var output = 0;
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    output -= number;
  }

  return output;
}

function processCommand(cmd, numbers) {
  if (cmd === "add") {
    return sum(numbers);
  } else if (cmd === "sub") {
    return sub(numbers);
  } else {
    return null;
  }
}

// MAIN
var args = process.argv.slice(2);
console.log("args", args);

var command = args[0];
var arrayOfNumbers = args.slice(1);

var numbers = convertToNumber(arrayOfNumbers);

console.log("numbers", numbers);

var output = processCommand(command, numbers);

if (output === null) {
  console.log("Please use either the add or sub command.");
} else {
  console.log("Result:", output);
}
