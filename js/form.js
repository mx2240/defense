const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent actual form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate Name
        if (name === "") {
            alert("Name is required.");
            return;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate Password
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        // If all validations pass
        alert("Form submitted!");
        form.reset(); // Clear form after submission
    });
}