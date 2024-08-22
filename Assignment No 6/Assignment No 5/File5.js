//Create a prime number calculator

const prompt = require ("prompt-sync") (); 

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function primeNumberCalculator() {
    var number = parseInt(prompt("Enter a number to check if it's prime:"));

    if (isPrime(number)) {
        console.log(number + " is a prime number.");
    } else {
        console.log(number + " is not a prime number.");
    }
}

primeNumberCalculator();