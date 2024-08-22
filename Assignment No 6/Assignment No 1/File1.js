//Calculate the area of a triangle : Take the required inputs from the user
// (eg; lengths of sides or angle) and find the area.

const prompt = require("prompt-sync")();

function calculateTriangleArea(base, height) {
  let area = 0.5 * base * height;
  return area;
}

var side1 = parseFloat(prompt("Enter Length :"));
var side2 = parseFloat(prompt("Enter Height:"));

var area = calculateTriangleArea(side1, side2);
console.log("The area of the triangle is: " + area);
