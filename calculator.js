// def add_5(num):
//   return num+5
//   end
  
// my_func = add_5

// answer = my_func(4) 
// answer = 9

// define constants to substitute/simulate user input
const exampleAdditionInput = {
  num1: 3,
  num2: 97,
  operation: ['add', '+']
}

const exampleSubtractionInput = {
  num1: 55,
  num2: 15,
  operation: ['subtract', '-']
}

const exampleMultiplicationInput = {
  num1: 4,
  num2: 8,
  operation: ['multiply', '*']
}

const exampleDivisionInput = {
  num1: 100,
  num2: 5,
  operation: ['divide', '/']
}

// define helper methods for four operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;


// validate input


let calculate = function(input) {

  if (input['operation'].includes('add') || input['operation'].includes('+')) {
    result = add(input['num1'], input['num2']);
  } else if (input['operation'].includes('subtract') || input['operation'].includes('-')) {
    result = subtract(input['num1'], input['num2']);
  } else if (input['operation'].includes('multiply') || input['operation'].includes('*')) {
      result = multiply(input['num1'], input['num2']);
  } else if (input['operation'].includes('divide') || input['operation'].includes('/')) {
    if (input['num2'] === 0) {
      console.log('Cannot divide by zero.');
      return;
    } else {
      result = divide(input['num1'], input['num2']);
    }
  } else {
    console.log('Sorry, operator invalid.');
  }

  return `Your result: ${result}`
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