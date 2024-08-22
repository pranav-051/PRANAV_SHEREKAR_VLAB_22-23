function calculateLength() {
    var inputString = document.getElementById("stringInput").value;
    var result = "Length of the string: ".concat(inputString.length);
    displayResult(result);
}
function concatenateStrings() {
    var inputString = document.getElementById("stringInput").value;
    var secondString = document.getElementById("secondStringInput").value;
    var result = "Concatenated string: ".concat(inputString.concat(secondString));
    displayResult(result);
}
function getCharAt() {
    var inputString = document.getElementById("stringInput").value;
    var index = parseInt(prompt("Enter index:"));
    var char = inputString.charAt(index);
    var result = "Character at index ".concat(index, ": ").concat(char);
    displayResult(result);
}
function getCharCode() {
    var inputString = document.getElementById("stringInput").value;
    var index = parseInt(prompt("Enter index:"));
    var charCode = inputString.charCodeAt(index);
    var result = "Unicode value of character at index ".concat(index, ": ").concat(charCode);
    displayResult(result);
}
function getSubstring() {
    var inputString = document.getElementById("stringInput").value;
    var start = parseInt(prompt("Enter start index:"));
    var length = parseInt(prompt("Enter length:"));
    var substring = inputString.substr(start, length);
    var result = "Substring: ".concat(substring);
    displayResult(result);
}
function getSlice() {
    var inputString = document.getElementById("stringInput").value;
    var start = parseInt(prompt("Enter start index:"));
    var end = parseInt(prompt("Enter end index:"));
    var slicedString = inputString.slice(start, end);
    var result = "Sliced string: ".concat(slicedString);
    displayResult(result);
}
function getIndexOf() {
    var inputString = document.getElementById("stringInput").value;
    var substring = prompt("Enter substring:");
    var index = inputString.indexOf(substring);
    var result = "Index of ".concat(substring, ": ").concat(index);
    displayResult(result);
}
function replaceSubstring() {
    var inputString = document.getElementById("stringInput").value;
    var oldSubstring = prompt("Enter substring to replace:");
    var newSubstring = prompt("Enter new substring:");
    var replacedString = inputString.replace(oldSubstring, newSubstring);
    var result = "Replaced string: ".concat(replacedString);
    displayResult(result);
}
function displayResult(result) {
    var resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = result;
    }
}
