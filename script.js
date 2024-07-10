const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');

let inputOne = parseFloat('');
let inputTwo = parseFloat('');
let arrInput = [inputOne, inputTwo,];
let operator;
let results;

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


add();
subtract();
multiply();
divide();