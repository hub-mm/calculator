const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let inputOne = parseFloat('');
let inputTwo = parseFloat('');
let arrInput = [inputOne, inputTwo,];
let operator = '';
let results;

numbers.forEach(input => {
    input.addEventListener('click', (e) => {
        getInputOne(input, e)
        getInputTwo(input, e)
    })
});


operators.forEach(operatorText => {
    operatorText.addEventListener('click', (e) => {
        getOperator(operatorText, e);
    })
});

function add() {
    results = arrInput.reduce((acc, val) => acc += val)
    console.log(results)
}
function subtract() {
    results = arrInput.reduce((acc, val) => acc -= val)
    console.log(results)
}
function multiply() {
    results = arrInput.reduce((acc, val) => acc *= val)
    console.log(results)
}
function divide() {
    if (inputTwo !== 0) {
        results = arrInput.reduce((acc, val) => acc /= val)
    } else if (inputTwo === 0) {
        results = 'ERROR';
    }
    console.log(results)
}

function getInputOne(input) {
    inputOne = input.innerText;
    display.textContent = inputOne;
    console.log('inputOne: ', inputOne)
}

function getOperator(operatorText) {
    operator = operatorText.innerText;
    display.textContent = operator;
    console.log('operator: ', operator)
}

function getInputTwo(input) {
    inputTwo = input.innerText;
    display.textContent = inputTwo;
    console.log('inputTwo: ', inputTwo)
}

add();
subtract();
multiply();
divide();