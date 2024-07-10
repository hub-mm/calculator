const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const displaySum = document.querySelector('.display-sum');
const displayLive = document.querySelector('.display-live');

let inputOne = parseFloat('');
let inputTwo = parseFloat('');
let arrInput = [inputOne, inputTwo,];
let operator = '';
let equals;
let results;

numbers.forEach(input => {
    input.addEventListener('click', (e) => {
        getInputOne(input, e)
        getInputTwo(input, e)
    })
});

operators.forEach(operatorText => {
    operatorText.addEventListener('click', (event) => {
        getOperator(operatorText, event);
        getResult(operatorText, event);
    })
});

function add() {
    results = arrInput.reduce((acc, val) => acc += val)
    return results
}
function subtract() {
    results = arrInput.reduce((acc, val) => acc -= val)
    return results
}
function multiply() {
    results = arrInput.reduce((acc, val) => acc *= val)
    return results
}
function divide() {
    if (inputTwo !== 0) {
        results = arrInput.reduce((acc, val) => acc /= val)
    } else if (inputTwo === 0) {
        results = 'ERROR';
    }
    return results
}

function getInputOne(input) {
    if (!operator) {
        inputOne = input.innerText;
        inputTwo = '';
        displayLive.textContent += inputOne;
        displaySum.textContent += inputOne;
        console.log('inputOne: ', inputOne)
    }
    return inputOne
}

function getOperator(operatorText) {
    if (inputOne) {
        operator = operatorText.innerText;
        // displayLive.textContent = operator;
        displaySum.textContent += ` ${operator} `;
        console.log('operator: ', operator)
    }
    return operator
}

function getInputTwo(input) {
    if (operator) {
        if (!inputTwo) {
            displayLive.textContent = '';
        }
        inputTwo = input.innerText;
        displayLive.textContent += inputTwo;
        displaySum.textContent += inputTwo;
        console.log('inputTwo: ', inputTwo)
    }
    return inputTwo
}

function getResult(operatorText, results) {
    if (operatorText.innerText === '=') {
        displaySum.textContent += results;
    }
    return results
}

function operate(operator) {
    if (operator === '+') {
        results = add(arrInput);
        console.log(results)
    } else if (operator === '-') {
        results = subtract(arrInput);
        console.log(results)
    } else if (operator === 'X') {
        results = multiply(arrInput);
        console.log(results)
    } else if (operator === '/') {
        results = divide(arrInput);
        console.log(results)
    }
    return results
}