document.addEventListener("DOMContentLoaded", function () {

    // Select the form
    const loginForm = document.getElementById("loginForm");

    // Make sure the form exists
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get input values
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            // Validation
            if (!username || !password) {
                alert("⚠️ Please fill in both fields.");
                return;
            }

            // Hardcoded credentials (for demo)
            const validUsername = "admin";
            const validPassword = "12345";

            if (username === validUsername && password === validPassword) {
                alert("✅ Login successful! Welcome " + username);
                // Redirect to another page if needed
                // window.location.href = "welcome.html";
            } else {
                alert("❌ Invalid username or password");
            }

            // Reset the form after submission
            loginForm.reset();
        });
    } else {
        console.error("❌ Error: loginForm element not found in DOM");
    }

});

