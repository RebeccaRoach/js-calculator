// define four example constants to simulate user input
const exampleAdditionInput = {
  num1: 8,
  num2: 8.2,
  operation: ['add', '+']
}

const exampleSubtractionInput = {
  num1: 28,
  num2: -80,
  operation: ['subtract', '-']
}

const exampleMultiplicationInput = {
  num1: 5,
  num2: 9,
  operation: ['multiply', '*']
}

const exampleDivisionInput = {
  num1: 100,
  num2: 4,
  operation: ['divide', '/']
}

// helper methods for four operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

// helper method to validate input numbers
const isNumValid = function(input) {
  return (typeof(input) === 'number' ? true : false);
}

// main calculator logic
const calculate = function(input) {
  // validate two input nums
  if (!isNumValid(input.num1) || !isNumValid(input.num2)) {
    return "Oops! Input must be a number.";
  } else {
    let result = null;
    // only word and symbol allowed for each operation
    if (input['operation'].includes('add') || input['operation'].includes('+')) {
      result = add(input['num1'], input['num2']);
    } else if (input['operation'].includes('subtract') || input['operation'].includes('-')) {
      result = subtract(input['num1'], input['num2']);
    } else if (input['operation'].includes('multiply') || input['operation'].includes('*')) {
        result = multiply(input['num1'], input['num2']);
    } else if (input['operation'].includes('divide') || input['operation'].includes('/')) {
      if (input['num2'] === 0) {
        return 'Oops! Cannot divide by zero.';
      } else {
        result = divide(input['num1'], input['num2']);
      }
    } else {
      return 'Oops! The operator must be a valid operation word or symbol.';
    }

    return `Your result: ${result}`
  }
}

// for testing purposes:
console.log(calculate(exampleAdditionInput));
console.log(calculate(exampleSubtractionInput));
console.log(calculate(exampleMultiplicationInput));
console.log(calculate(exampleDivisionInput));