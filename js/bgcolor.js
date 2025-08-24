


// Select buttons
const colorBtn = document.getElementById("colorBtn");
const alertBtn = document.getElementById("alertBtn");

// Function: Random background color
colorBtn.addEventListener("click", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 75%)`;
    document.body.style.backgroundColor = randomColor;
});

// Function: Show alert
alertBtn.addEventListener("click", () => {
    alert("Hello! Thanks for visiting my website 🚀");
});





// one color backgroundColor


// const colorBtn = document.getElementById("colorBtn");
// const alertBtn = document.getElementById("alertBtn");

// // Function: Change background to one fixed color
// colorBtn.addEventListener("click", () => {
//   document.body.style.backgroundColor = "#87CEFA"; // Light Blue
// });

// // Function: Show alert
// alertBtn.addEventListener("click", () => {
//   alert("Hello! Thanks for visiting my website 🚀");
// });