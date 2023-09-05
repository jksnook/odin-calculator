// adds two numbers together
function add(a, b) {
  return a + b;
}

// subtracts one number from another
function subtract(a, b) {
  return a - b;
}

// multiplies two numbers together
function multiply(a, b) {
  return a * b;
}

// divides number a by number b
function divide(a, b) {
  return a / b;
}

// takes a, b, operator as strings, returns operator(a, b)
function operate(a, b, operator) {
  if (operator === 'add') return add(Number(a), Number(b));
  if (operator === 'subtract') return subtract(Number(a), Number(b));
  if (operator === 'multiply') return multiply(Number(a), Number(b));
  if (operator === 'divide') return divide(Number(a), Number(b));
}

let a;
let b;
let operator;
let displayContent = '0';
let decimal = false;
let firstNumber = true;
let newNumber = true;
const display = document.querySelector('.display');

// writes content to the display
function writeDisplay(content) {
  display.textContent = content;
}

// adds content to display if max length is not exceeded
function addDisplayContent(content) {
  if (displayContent.length >= 10) return;
  displayContent += content;
  writeDisplay(displayContent);
}

// round string number to 10 digits and return new string number
function roundResult(result) {
  const wholeDigits = String(Math.round(Number(result))).length
  const tenPower = (10 ** (10 - wholeDigits));
  result = String(Math.round(Number(result) * tenPower) / tenPower);
  if (result.length > 10) return "Overflow";
  return result;
}

function evaluate() {
  if (a && operator && !newNumber) {
    b = displayContent;
    displayContent = operate(a, b, operator);
    a = displayContent;
    b = '';
    operator = '';
    writeDisplay(roundResult(displayContent));
    newNumber = true;
  }
}
const digits = document.querySelectorAll('.digit');

// add event listeners for each of the digit buttons
digits.forEach(digit => {
  digit.addEventListener('click', () =>  {
    if (newNumber) {
      newNumber = false;
      displayContent = digit.id[5];
      writeDisplay(displayContent);
    } else {
      addDisplayContent(digit.id[5])
    }
  })
})

const point = document.getElementById('.');

// add event listener for decimal point
point.addEventListener('click', () => {
  if (newNumber) {
    newNumber = false;
    decimal = true;
    displayContent = '0.'
    writeDisplay(displayContent);
  } else {
    if (decimal === false && displayContent.length < 10) {
      decimal = true;
      displayContent += '.';
      writeDisplay(displayContent);
    }
  }
})

const operators = document.querySelectorAll('.operator');

// add event listeners for the mathematical operators.
operators.forEach(element => {
  element.addEventListener('click', () => {
    if (firstNumber) {
      firstNumber = false;
      decimal = false;
      a = displayContent;
      operator = element.id;
      newNumber = true;
    } else {
      evaluate()
      operator = element.id;
      a = displayContent;
    }
  })
})

const equals = document.getElementById('equals');

// add equals button functionality
equals.addEventListener('click', () => {
  evaluate()
  firstNumber = true;
})

const clear = document.getElementById('clear');

// add clear button functionality
clear.addEventListener('click', () => {
  displayContent = '0';
  a = '';
  b = '';
  operator = '';
  firstNumber = true;
  newNumber = true;
  decimal = false;
  writeDisplay(displayContent);
})