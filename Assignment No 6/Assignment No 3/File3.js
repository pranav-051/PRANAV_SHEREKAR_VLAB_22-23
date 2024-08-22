//Take input from the user as a string and find all the vowels in the string
// Function to find all vowels in a string

const prompt = require ("prompt-sync") (); 
function findVowels(inputString) {
    var vowels = [];
    inputString = inputString.toLowerCase();
    
    for (var i = 0; i < inputString.length; i++) {
        if ('aeiou'.indexOf(inputString[i]) !== -1) {
            vowels.push(inputString[i]);
        }
    }
    return vowels;
}

var userInput = prompt("Enter a string:");

var vowelsFound = findVowels(userInput);

if (vowelsFound.length > 0) {
    console.log("Vowels found in the input string: " + vowelsFound.join(", "));
} else {
    console.log("No vowels found in the input string.");
}
