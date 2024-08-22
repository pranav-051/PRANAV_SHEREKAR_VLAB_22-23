//Calculate the area of a circle (Take the radius as input)

const prompt = require ("prompt-sync") (); 

let r = prompt ("Enter radius of circle: "); 
console.log("Radius of circle is "+ r)

let area = 3.14*r*r;
console.log("Area is "+area)