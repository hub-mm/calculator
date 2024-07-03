const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let inputOne = '';
let inputTwo = '';
let operator;
let results;

function add() {
    results = parseFloat(inputOne) + parseFloat(inputTwo);
    return results;
}

function subtract() {
    results = parseFloat(inputOne) - parseFloat(inputTwo);
    return results;
}

function multiply() {
    results = parseFloat(inputOne) * parseFloat(inputTwo);
    return results;
}

function divide() {
    if (parseFloat(inputTwo) !== 0) {
        results = parseFloat(inputOne) / parseFloat(inputTwo);
    } else {
        results = 'ERROR'
    }
    return results;
}

const operatorAdd = add();
const operatorSubtract = subtract();
const operatorMultiply = multiply();
const operatorDivide = divide();

numbers.forEach(num => {
    num.addEventListener('click', getInputOne);
    num.addEventListener('click', getInputTwo);
});

operators.forEach(op => {
    op.addEventListener('click', getOperator)
})

function getInputOne(e) {
    if (!operator) {
    inputOne = e.target.innerText;
    display.textContent += inputOne;
    console.log(e.target.innerText);
    }
}

function getOperator(e) {
    operator = e.target.innerText;
    display.textContent = '';
    console.log(e.target.innerText)
}

function getInputTwo(e) {
    if (operator) {
    inputTwo = e.target.innerText;
    display.textContent += inputTwo
    }
}

function operate() {
    
}