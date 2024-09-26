// calculatorTDD.test.js - rev-01

// Import the class you want to test
const Calculator = require('./calculatorTDD');

// Describe the test suite for the 'add' function
describe('Calculator', () => {
  let calculator;

  // Before each test, create a new Calculator instance
  beforeEach(() => {
    calculator = new Calculator();
  });

  // Test case 1: should add two numbers correctly
  test('should add two numbers', () => {
    // Fixed test case to match the expected output (numbers instead of strings)
    expect(calculator.add(1, 2)).toBe(3);
  });

  // Test case 2: should return the correct difference for subtraction
  test('should subtract two numbers correctly', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  // Test case 3: should multiply two numbers correctly
  test('should multiply two numbers correctly', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });

  // Test case 4: should divide two numbers correctly
  test('should divide two numbers correctly', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  // Test case 5: should handle division by zero
  test('should return Infinity when dividing by zero', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });
});
