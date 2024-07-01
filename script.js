const input = [1, 5, 200, 239];
let result;

function add() {
    result = input.reduce((first, last) => first + last)
}
add(input);
console.log(result);

function subtract() {
    result = input.reduce((first, last) => first - last)
}
subtract(input);
console.log(result);

function muliply() {
    result = input.reduce((first, last) => first * last)
}
muliply(input);
console.log(result);

function divide() {
    result = input.reduce((first, last) => first / last)
}
divide(input);
console.log(result);