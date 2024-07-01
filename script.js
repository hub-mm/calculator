const input = [1, 5, 200, 239];
let result;

function add() {
    result = input.reduce((first, last) => first + last)
}
add(input);
console.log(result)