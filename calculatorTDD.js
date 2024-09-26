// calculatorTDD.js - rev-01

class Calculator {
    // Constructor is not needed to pass arguments, methods will accept parameters directly
    constructor() {}

    // Add two numbers and return the result
    add(a, b) {
        return a + b;
    }

    // Subtract two numbers and return the result
    subtract(a, b) {
        return a - b;
    }

    // Multiply two numbers and return the result
    multiply(a, b) {
        return a * b;
    }

    // Divide two numbers and return the result
    divide(a, b) {
        return a / b;
    }
}

// Export the Calculator class for use in tests
module.exports = Calculator;
