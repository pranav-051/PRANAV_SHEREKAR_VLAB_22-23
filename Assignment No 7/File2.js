//Binary Search Implementation Program

const prompt = require ("prompt-sync") (); 

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const array = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
const target = 13;
const index = binarySearch(array, target);
if (index !== -1) {
    console.log("Target", target, "found at index", index);
} else {
    console.log("Target", target, "not found in the array");
}
