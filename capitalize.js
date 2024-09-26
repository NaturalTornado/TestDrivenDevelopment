// capitalize.js

function capitalize(str) {
    if (str.length === 0) return ''; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  module.exports = capitalize;
  