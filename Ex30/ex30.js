function operate(num1, num2, callback) {
    return callback(num1, num2);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Multiplication:", operate(10, 5, multiply));
console.log("Division:", operate(10, 5, divide));