// capitalize.test.js

// Import the function you want to test (assuming you'll create it later)
const capitalize = require('./capitalize');

// Describe the test suite
describe('capitalize', () => {
  // Test case 1: should capitalize the first letter
  test('should capitalize the first letter of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  // Test case 2: should handle empty strings
  test('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  // Test case 3: should handle strings with one character
  test('should capitalize a single character string', () => {
    expect(capitalize('a')).toBe('A');
  });
});
