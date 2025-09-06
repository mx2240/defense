document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirmPassword").value.trim();

            // Validate empty fields
            if (!name || !email || !password || !confirmPassword) {
                alert("⚠️ All fields are required!");
                return;
            }

            // Validate email format (basic check)
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("❌ Please enter a valid email address.");
                return;
            }

            // Validate password length
            if (password.length < 8) {
                alert("❌ Password must be at least 8 characters long.");
                return;
            }

            // Confirm password match
            if (password !== confirmPassword) {
                alert("❌ Passwords do not match.");
                return;
            }

            // Success
            alert("✅ Registration successful! Welcome, " + name);

            // Reset form
            registerForm.reset();
        });
    } else {
        console.error("Form not found in DOM.");
    }
});