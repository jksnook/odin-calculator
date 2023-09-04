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

function operate(a, b, operator) {
  return operator(a, b);
}

let a;
let b;
let operator;
const display = document.querySelector('.display');

function writeDisplay(content) {
  display.textContent = content;
}

const digits = document.querySelectorAll('.digit');
let displayContent = "";

digits.forEach(digit => {
  digit.addEventListener('click', () =>  {
    displayContent += digit.id;
    writeDisplay(displayContent);
  })
})