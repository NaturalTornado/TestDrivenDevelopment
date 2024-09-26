// reverseString.test.js

// Import the function you want to test (assuming you'll create it later)
const reverseString = require('./reverseString');

// Describe the test suite
describe('reverseString', () => {
  // Test case 1: should capitalize the first letter
  test('should reverse the string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  // Test case 2: should handle empty strings
  test('should return an empty string if input is empty', () => {
    expect(reverseString('')).toBe('');
  });

  // Test case 3: should handle strings with one character
  test('should return a single character string', () => {
    expect(reverseString('a')).toBe('a');
  });
});
