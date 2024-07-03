const numbers = document.querySelectorAll('.number');
console.log(numbers)
const operators = document.querySelectorAll('.operator')
console.log(operators)

const display = document.querySelector('.display');

let inputOne = '';
let inputTwo = '';
let input = [inputOne, inputTwo];
let result;
const operator = [add, subtract, muliply, divide];

function add() {
    result = input.reduce((first, last) => first + last)
}

function subtract() {
    result = input.reduce((first, last) => first - last)
}

function muliply() {
    result = input.reduce((first, last) => first * last)
}

function divide() {
    result = input.reduce((first, last) => first / last)
}

add(input);
subtract(input);
muliply(input);
divide(input);

function opertate() {
    display.textContent = inputOne;
    display.textContent = inputTwo;
    display.textContent = result;
}

numbers.forEach(num => {
    num.addEventListener('click', updateDisplay);
});

function updateDisplay(num) {
    let displayText = display.textContent;
    for (let i = 0; i < numbers.length; i++) {
        let numberText = numbers[i].innerText;
        console.log([numberText])
    }
}