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

const buttons = document.querySelectorAll('button');
let displayContent = "";

buttons.forEach(button => {
  button.addEventListener('click', () =>  {
    displayContent += button.id;
    writeDisplay(displayContent);
  })
})