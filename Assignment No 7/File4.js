//Any Competitive Programming Question based on the array concept
//Find the maximum and minimum elements in the array.

const prompt = require ("prompt-sync") (); 
function findMaxMin(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return max + " " + min;
}

const array = [5, 2, 9, 1, 7];
const result = findMaxMin(array);
console.log("Maximum and Minimum elements:", result);
