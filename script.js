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
  if (operator === '+') return add(Number(a), Number(b));
  if (operator === '-') return subtract(Number(a), Number(b));
  if (operator === '*') return multiply(Number(a), Number(b));
  if (operator === '/') return divide(Number(a), Number(b));
}

let a;
let b;
let operator;
let decimal = false;
let firstNumber = true;
const display = document.querySelector('.display');

// writes content to the display
function writeDisplay(content) {
  display.textContent = content;
}

const digits = document.querySelectorAll('.digit');
let displayContent = "";

// add event listeners for each of the digit buttons
digits.forEach(digit => {
  digit.addEventListener('click', () =>  {
    displayContent += digit.id;
    writeDisplay(displayContent);
  })
})

const point = document.getElementById('.');

// add event listener for decimal point
point.addEventListener('click', () => {
  if (decimal === false) {
    decimal = true;
    displayContent += '.';
    writeDisplay(displayContent);
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
      displayContent = '';
      writeDisplay(displayContent);
    }
  })
})

const equals = document.getElementById('=');

equals.addEventListener('click', () => {
  if (a && operator) {
    b = displayContent;
    displayContent = operate(a, b, operator);
    a = displayContent;
    b = '';
    operator = '';
    writeDisplay(displayContent);
  }
})

const clear = document.getElementById('clear');

clear.addEventListener('click', () => {
  displayContent = '';
  a = '';
  b = '';
  operator = '';
  firstNumber = true;
  writeDisplay(displayContent);
})