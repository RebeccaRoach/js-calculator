// define constants to simulate user input
const exampleAdditionInput = {
  num1: 1.4,
  num2: 8.2,
  operation: ['add', '+']
}

const exampleSubtractionInput = {
  num1: 27,
  num2: 4,
  operation: ['subtract', '-']
}

const exampleMultiplicationInput = {
  num1: 4,
  num2: 8,
  operation: ['multiply', '*']
}

const exampleDivisionInput = {
  num1: 100,
  num2: 20,
  operation: ['divide', '/']
}

// helper methods for four operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;


// helper method to validate input
const isNumValid = function(input) {
  if (typeof(input) !== 'number') {
    return false;
  } else {
    return true;
  }
}


// main calculator logic
const calculate = function(input) {
  // validate input nums
  if (!isNumValid(input.num1) || !isNumValid(input.num2)) {
    console.log("Oops! Input must be a number.");
    return;
  } else {
    // only word and symbol allowed for each operation
    if (input['operation'].includes('add') || input['operation'].includes('+')) {
      result = add(input['num1'], input['num2']);
    } else if (input['operation'].includes('subtract') || input['operation'].includes('-')) {
      result = subtract(input['num1'], input['num2']);
    } else if (input['operation'].includes('multiply') || input['operation'].includes('*')) {
        result = multiply(input['num1'], input['num2']);
    } else if (input['operation'].includes('divide') || input['operation'].includes('/')) {
      if (input['num2'] === 0) {
        console.log('Oops! Cannot divide by zero.');
        return;
      } else {
        result = divide(input['num1'], input['num2']);
      }
    } else {
      console.log('Oops! The operator must be a valid operation word or symbol.');
      return;
    }

    return `Your result: ${result}`
  }
}


//   switch (suppliedOperation) {
//     case 'add':
//     case '+':
//       add(input['num1'], input['num2']);
//       break;
//     case 'subtract':
//     case '-':
//       result = num1 - num2;
//       break;
//     case 'multiply':
//     case '*':
//       result = num1 * num2;
//       break;
//     case 'divide':
//     case '/':
//       result = num1 / num2;
//       break;
//     default: 
//       console.log('Sorry, did not understand operation.')
//   }
//   return `Your result: ${result}`;
// }


console.log(calculate(exampleAdditionInput));
console.log(calculate(exampleSubtractionInput));
console.log(calculate(exampleMultiplicationInput));
console.log(calculate(exampleDivisionInput));