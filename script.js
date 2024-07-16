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
const arrNewLive = [];
let results = '';
let eventAction = '';

numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        inputOne = getInputOne(num, e);
        inputTwo = getInputTwo(num, e);
        arrInput = getArrayNum(inputOne, inputTwo);
        sum = getCal(arrInput, e);
        liveSum = getLiveSum(inputOne, inputTwo);
        operatorHover(inputOne, inputTwo)
    })
});

operators.forEach(opSelect => {
    opSelect.addEventListener('click', (event) => {
        operator = getOperator(opSelect, event);
        operatorFunc = getOperatorFunc(operator, event);
        operatorEqual = getOperatorEqual(opSelect, event);
        arrOp = getArrayOp(operator, operatorEqual);
        results = getResult(opSelect, event);
        sum = getCal(arrOp, event);
        liveSum = getLiveSum(results, event);
        operatorHover(event)
    })
});

actionBtn.forEach(action => {
    action.addEventListener('click', (eAction) => {
        eventAction = allClear(eAction);
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

function switchPosNeg() {

}

function getInputOne(num, e) {
    if (!operator || !operator && eventAction !== '') {
        inputOne += e.target.innerText;
    }
    return inputOne
}

function getOperator(opSelect, event) {
    if (inputOne !== '' && inputTwo === '') {
        operator = event.target.innerText;
    }
    return operator
}

function getInputTwo(num, e) {
    if (operator !== '' && operator !== '=' || operator !== '' && eventAction !== '') {
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
    if (inputOne !== '' || eventAction !== '') {
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

function getCal(e, event) {
    sum = displaySum;
    if (!operator) {
        sum.textContent = parseFloat(inputOne).toLocaleString();
    } else if (operator !== '' && inputTwo === '') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0].toLocaleString()}`;
    } else if (inputTwo !== '' && results === '') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0].toLocaleString()} ${arrInput[1].toLocaleString()}`;
    } else if (results !== '') {
        sum.textContent = `${arrInput[0].toLocaleString()} ${arrOp[0].toLocaleString()} ${arrInput[1].toLocaleString()} ${arrOp[1].toLocaleString()} ${results.toLocaleString()}`;
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

function operatorHover(event) {
    const operators = document.querySelectorAll('.operator');

    if (inputOne !== '' && operator !== '' && inputTwo !== '') {
        operators.forEach(op => {
            op.style.background = 'orange';
            op.addEventListener('mouseover', () => {
                op.style.background = 'rgb(255, 202, 103)';
            })
            op.addEventListener('mouseout', () => {
                op.style.background = 'orange';
            })
        });
    } else if (inputOne !== '' && operator !== '' && inputTwo === '' || inputOne !== '' && operator !== '' && inputTwo === '' && eventAction !== '') {
        event.target.style.background = 'rgb(255, 202, 103)';
    }

}
