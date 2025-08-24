// Log message to the console
console.log("Hello, World!");

// Display message in an alert box
alert("Hello, World!");




// Declare two numeric variables
let a = 10;
let b = 5;

// Perform calculations
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

// Log results with meaningful messages
console.log("a =", a, " b =", b);
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);




// Prompt user for their age
let age = prompt("Please enter your age:");

// Convert input to a number
age = Number(age);

// Check age category
if (age < 18) {
    alert("You are a minor.");
} else if (age >= 18 && age <= 64) {
    alert("You are an adult.");
} else if (age >= 65) {
    alert("You are a senior.");
} else {
    alert("Invalid input. Please enter a valid age.");
}








function calculateArea(width, height) {
    // Declare area with let (block scope)
    let area = width * height;

    // Example of block scope with let
    if (area > 0) {
        let message = "The calculated area is: " + area; // 'message' exists only in this block
        console.log(message);
    }

    // Uncommenting the line below would throw an error, because 'message' is block-scoped
    // console.log(message);

    return area;
}

// Call the function with width = 5, height = 10
let result = calculateArea(5, 10);
console.log("Returned area:", result);