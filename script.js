const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const displaySum = document.querySelector('.display-sum');
const displayLive = document.querySelector('.display-live');

let inputOne = '';
let operator = '';
let inputTwo = '';
let operatorEqual = '';
let operatorFunc = '';
let arrInput = [];
let arrOp = [];
let cal = '';
let liveSum = ''
let results = '';

numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        inputOne = getInputOne(num, e);
        inputTwo = getInputTwo(num, e);
        arrInput = getArrayNum(inputOne, inputTwo);
        cal = getCal(arrInput, e);
        liveSum = getLiveSum(inputOne, inputTwo);
        console.log('inputOne: ', inputOne);
        console.log('inputTwo: ', inputTwo);
        console.log('arrInput: ', arrInput)
        console.log('cal: ', cal);
        console.log('liveSum: ', liveSum.textContent);
    })
});

operators.forEach(opSelect => {
    opSelect.addEventListener('click', (event) => {
        operator = getOperator(opSelect, event);
        operatorFunc = getOperatorFunc(operator, event);
        operatorEqual = getOperatorEqual(opSelect, event);
        arrOp = getArrayOp(operator, operatorEqual);
        results = getResult(opSelect, event);
        cal = getCal(arrOp, event);
        liveSum = getLiveSum(results, event);
        console.log('operator: ', operator)
        console.log('operatorFunc: ', operatorFunc);
        console.log('arrOP: ', arrOp);
        console.log('results: ', results);
        console.log('cal: ', cal);
        console.log('liveSum: ', liveSum.textContent);
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
    if (inputTwo !== 0) {
        results = arrInput.reduce((acc, val) => acc /= val);
    } else if (inputTwo === 0) {
        return 'ERROR'
    }
    return results

}

function getInputOne(num, e) {
    if (!operator) {
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
    if (operator !== '') {
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
    if (inputOne !== '') {
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
        liveSum.textContent = inputOne;
    } else if (inputTwo !== '' && results === '') {
        liveSum.textContent = inputTwo;
    } else if (results !== '') {
        liveSum.textContent = results;
    }
    return liveSum
}

function getCal(e, event) {
    cal = displaySum;
    if (!operator) {
        cal.textContent = inputOne;
    } else if (operator !== '' && inputTwo === '') {
        cal.textContent = `${arrInput[0]} ${arrOp[0]}`;
    } else if (inputTwo !== '' && results === '') {
        cal.textContent = `${arrInput[0]} ${arrOp[0]} ${arrInput[1]}`;
    } else if (results !== '') {
        cal.textContent = `${arrInput[0]} ${arrOp[0]} ${arrInput[1]} ${arrOp[1]} ${results}`;
    }
    return cal
}