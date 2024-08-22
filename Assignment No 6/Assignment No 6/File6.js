//Create a factorial calculator

const prompt = require ("prompt-sync") (); 

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
    var number = parseInt(prompt("Enter a non-negative integer to calculate its factorial:"));

    if (Number.isInteger(number) && number >= 0) {
        var result = factorial(number);
        console.log("The factorial of " + number + " is: " + result);
    } else {
        console.log("Invalid input. Please enter a non-negative integer.");
    }
}

calculateFactorial();
