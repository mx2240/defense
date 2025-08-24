// Declare a string "25" and a number 5
let strNum = "25";
let num = 5;

// Show type before conversion
console.log("Before conversion:");
console.log("strNum =", strNum, "| type:", typeof strNum);

// Convert the string to a number
let convertedNum = Number(strNum);

// Add it to the other number
let sum = convertedNum + num;

// Show type after conversion
console.log("\nAfter conversion:");
console.log("convertedNum =", convertedNum, "| type:", typeof convertedNum);

// Log the result
console.log("\nResult of addition:", sum);
console.log("Result type:", typeof sum);