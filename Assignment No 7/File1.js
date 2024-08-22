//Take an AP/GP series as an input and print the sum of the series

const prompt = require ("prompt-sync") (); 

function sumOfAP(firstTerm, commonDifference, numberOfTerms) {
    return numberOfTerms * (2 * firstTerm + (numberOfTerms - 1) * commonDifference) / 2;
}

function sumOfGP(firstTerm, commonRatio, numberOfTerms) {
    if (commonRatio === 1) {
        return firstTerm * numberOfTerms;
    } else {
        return firstTerm * (Math.pow(commonRatio, numberOfTerms) - 1) / (commonRatio - 1);
    }
}

function getSeriesTypeAndValues() {
    var seriesType = prompt("Enter 'AP' for Arithmetic Progression or 'GP' for Geometric Progression:");
    var firstTerm = parseFloat(prompt("Enter the first term:"));
    var commonDifferenceOrRatio = parseFloat(prompt("Enter the common difference (for AP) or common ratio (for GP):"));
    var numberOfTerms = parseInt(prompt("Enter the number of terms:"));
    return [seriesType, firstTerm, commonDifferenceOrRatio, numberOfTerms];
}

function main() {
    var [seriesType, firstTerm, commonDifferenceOrRatio, numberOfTerms] = getSeriesTypeAndValues();

    if (seriesType.toUpperCase() === 'AP') {
        var sum = sumOfAP(firstTerm, commonDifferenceOrRatio, numberOfTerms);
        console.log("The sum of the Arithmetic Progression series is: " + sum);
    } else if (seriesType.toUpperCase() === 'GP') {
        var sum = sumOfGP(firstTerm, commonDifferenceOrRatio, numberOfTerms);
        console.log("The sum of the Geometric Progression series is: " + sum);
    } else {
        console.log("Invalid series type.");
    }
}

main();
