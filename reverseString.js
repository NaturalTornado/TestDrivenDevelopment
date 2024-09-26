//reverse string


function reverseString(string) {
    
    const stringer = string;
    
    let stringArr = [];
    
    stringArr = stringer;

    const reverse = [];

    let outputString = '';

    for (var i = 0; i < stringArr.length; i++) {
        reverse[i] = stringArr[stringArr.length-i-1];

        console.log("reverse loop: ", reverse[i]);

    }

    console.log("reverse string: ", reverse);

    outputString = reverse.join('');

    console.log("output string: ", outputString);

    return outputString;

};

const tryString = "Hello";

reverseString(tryString);

reverseString("working");

console.log("Anything?: ", tryString);



module.exports = reverseString;
