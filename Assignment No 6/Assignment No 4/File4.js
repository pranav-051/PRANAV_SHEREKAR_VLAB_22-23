//Create a simple interest calculator(take the principle cost and time as input)

const prompt = require ("prompt-sync") (); 

function calculateSimpleInterest(principle, rate, time) {
    return (principle * rate * time) / 100;
}

var principle = parseFloat(prompt("Enter the principle amount:"));
var rate = parseFloat(prompt("Enter the rate of interest (in percentage):"));
var time = parseFloat(prompt("Enter the time period (in years):"));

var simpleInterest = calculateSimpleInterest(principle, rate, time);
var totalAmount = principle + simpleInterest;

console.log("Principle Amount: $" + principle);
console.log("Rate of Interest: " + rate + "%");
console.log("Time Period: " + time + " years");
console.log("Simple Interest: $" + simpleInterest);
console.log("Total Amount: $" + totalAmount);
