const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const actionBtn = document.querySelectorAll('.action');
const displaySum = document.querySelector('.display-sum');
const displayLive = document.querySelector('.display-live');

let inputOne = '';
let operator = '';
let inputTwo = '';
let operatorEqual = '';
let operatorFunc = '';
let arrInput = [];
let arrOp = [];
let sum = '';
let liveSum = '';
let results = '';
let clearAction = '';

numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        newCal(e);
        inputOne = getInputOne(num, e);
        inputTwo = getInputTwo(num, e);
        arrInput = getArrayNum(inputOne, inputTwo);
        sum = getSum(arrInput, e);
        liveSum = getLiveSum(inputOne, inputTwo);
    })
});

operators.forEach(opSelect => {
    opSelect.addEventListener('click', (event) => {
        newCal(results, event);
        operator = getOperator(opSelect, event);
        operatorFunc = getOperatorFunc(operator, event);
        operatorEqual = getOperatorEqual(opSelect, event);
        arrOp = getArrayOp(operator, operatorEqual);
        results = getResult(opSelect, event);
        inputOne = getInputOne(results);
        sum = getSum(arrOp, event);
        liveSum = getLiveSum(results, event);
    });
});

actionBtn.forEach(action => {
    action.addEventListener('click', (eAction) => {
        newCal(eAction);
        inputOne = switchPosNegOne(inputOne, eAction);
        inputTwo = switchPosNegTwo(inputTwo, eAction);
        arrInput = getArrayNum(inputOne, inputTwo);
        sum = getSum(eAction);
        liveSum = getLiveSum(eAction);
        clearAction = allClear(eAction);
    })
});

function add(arrInput) {
    results = arrInput.reduce((acc, val) => acc += val);
    return results
}
function subtract(arrInput) {
    results = arrInput.reduce((acc, val) => acc -= val);
    return results
}
function multiply(arrInput) {
    results = arrInput.reduce((acc, val) => acc *= val);
    return results
}
function divide(arrInput) {
    results = arrInput.reduce((acc, val) => acc /= val);
    return results
}
function switchPosNegOne(inputOne, eAction) {
    if (inputTwo === '' && eAction.target.innerText === '+/-') {
        if (inputOne > 0) {
            inputOne = `-${inputOne}`;
        }
    }
    return inputOne
}
function switchPosNegTwo(inputTwo, eAction) {
    if (inputTwo !== '' && eAction.target.innerText === '+/-') {
        if (inputTwo > 0) {
            inputTwo = `-${inputTwo}`;
        }
    }
    return inputTwo
}

function getInputOne(num, e) {
    if (!operator) {
        inputOne += e.target.innerText;
    }
    return inputOne
}

function getOperator(opSelect, event) {
    if (event.target.innerText === '-') {
        operator = event.target.innerText;
    } else if (inputOne !== '' && inputTwo === '' && results === '') {
        operator = event.target.innerText;
    } else if (inputOne === results) {
        operator = event.target.innerText;
    }
    return operator
}

function getInputTwo(num, e) {
    if (operator !== '' && operator !== '=' && results === '') {
        inputTwo += e.target.innerText;
    }
    return inputTwo
}

function getOperatorEqual(opSelect, event) {
    if (event.target.innerText === '=') {
        operatorEqual = event.target.innerText;
    }
    return operatorEqual
}

function getArrayNum(inputOne, inputTwo) {
    if (inputOne !== '' || clearAction !== '') {
        arrInput = [parseFloat(inputOne), parseFloat(inputTwo)];
    }
    return arrInput
}

function getArrayOp(operator, operatorEqual) {
    if (operator !== '') {
        arrOp = [operator, operatorEqual];
    }
    return arrOp
}

function getOperatorFunc(operator) {
    if (inputOne !== '' && operator !== '' && inputTwo !== '') {
        if (operator === '+') {
            operatorFunc = add(arrInput);
        } else if (operator === '-') {
            operatorFunc = subtract(arrInput);
        } else if (operator === 'X') {
            operatorFunc = multiply(arrInput);
        } else if (operator === '/' && arrInput[1] === 0) {
            operatorFunc = 'ERROR';
        } else if (operator === '/') {
            operatorFunc = divide(arrInput);
        }
    }
    return operatorFunc
}

function getResult(opSelect, event) {
    if (event.target.innerText === '=') {
        results = operatorFunc;
    }
    return results
}

function newCal(opSelect, event) {
    if (results && opSelect !== '=') {
        inputOne = results;
        operator = operator;
        inputTwo = '';
        results = '';
    }
    return inputOne
}

function getLiveSum(event) {
    liveSum = displayLive;
    if (!operator) {
        liveSum.textContent = parseFloat(inputOne).toLocaleString();
    } else if (inputTwo !== '' && results === '') {
        liveSum.textContent = parseFloat(inputTwo).toLocaleString();
    } else if (results !== '') {
        liveSum.textContent = results.toLocaleString();
    }
    return liveSum
}

function getSum(e, event) {
    sum = displaySum;
    if (!operator && !results || arrInput[0] !== '' && arrOp[1] !== '=' && arrInput[1] !== '' && results !== '') {
        sum.textContent = `${arrInput[0].toLocaleString()}`;
    } else if (operator !== '' && inputTwo === '') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0]}`;
    } else if (inputTwo !== '' && results === '') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0]} ${arrInput[1].toLocaleString()}`;
    } else if (results !== '' && event.target.textContent === '=') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0]} ${arrInput[1].toLocaleString()} ${arrOp[1]} ${results.toLocaleString()}`;
    }
    return sum
}

function allClear(eAction) {
    if (eAction.target.innerText === 'AC') {
        inputOne = '';
        operator = '';
        inputTwo = '';
        arrInput = [inputOne, inputTwo];
        arrOp = [operator, operatorEqual];
        results = '';
        liveSum.textContent = '';
        sum.textContent = '';
    }
}

// relook at sum, one step behind with showing calculation.