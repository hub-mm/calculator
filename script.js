const numbers = document.querySelectorAll('.number');
console.log(numbers);

let inputOne = '20';
let inputTwo = '10';
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
    results = parseFloat(inputOne) / parseFloat(inputTwo);
    return results;
}

operatorAdd = add();
console.log('Add:', operatorAdd)
operatorSubtract = subtract();
console.log('Subtract:', operatorSubtract);
operatorMultiply = multiply();
console.log('Multiply:', operatorMultiply);
operatorDivide = divide();
console.log('Divide:', operatorDivide);