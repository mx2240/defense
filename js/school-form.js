const form = document.getElementById("feedbackForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Check if email looks valid
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    alert("Thank you for your feedback, " + name + "!");

    // Reset the form
    form.reset();
});







