
function calculateLength() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const result = `Length of the string: ${inputString.length}`;
    displayResult(result);
}

function concatenateStrings() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const secondString = (<HTMLInputElement>document.getElementById("secondStringInput")).value;
    const result = `Concatenated string: ${inputString.concat(secondString)}`;
    displayResult(result);
}

function getCharAt() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const index = parseInt(prompt("Enter index:"));
    const char = inputString.charAt(index);
    const result = `Character at index ${index}: ${char}`;
    displayResult(result);
}

function getCharCode() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const index = parseInt(prompt("Enter index:"));
    const charCode = inputString.charCodeAt(index);
    const result = `Unicode value of character at index ${index}: ${charCode}`;
    displayResult(result);
}

function getSubstring() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const start = parseInt(prompt("Enter start index:"));
    const length = parseInt(prompt("Enter length:"));
    const substring = inputString.substr(start, length);
    const result = `Substring: ${substring}`;
    displayResult(result);
}

function getSlice() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const start = parseInt(prompt("Enter start index:"));
    const end = parseInt(prompt("Enter end index:"));
    const slicedString = inputString.slice(start, end);
    const result = `Sliced string: ${slicedString}`;
    displayResult(result);
}

function getIndexOf() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const substring = prompt("Enter substring:");
    const index = inputString.indexOf(substring);
    const result = `Index of ${substring}: ${index}`;
    displayResult(result);
}

function replaceSubstring() {
    const inputString = (<HTMLInputElement>document.getElementById("stringInput")).value;
    const oldSubstring = prompt("Enter substring to replace:");
    const newSubstring = prompt("Enter new substring:");
    const replacedString = inputString.replace(oldSubstring, newSubstring);
    const result = `Replaced string: ${replacedString}`;
    displayResult(result);
}

function displayResult(result: string) {
    const resultElement = document.getElementById("result");
    if (resultElement) {
        resultElement.innerText = result;
    }
}
