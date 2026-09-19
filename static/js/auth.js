
document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // Show / Hide Password
    // ==============================

    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");

    if (togglePassword && password) {

        togglePassword.addEventListener("click", function () {

            if (password.type === "password") {
                password.type = "text";
                togglePassword.textContent = "Hide";
            } else {
                password.type = "password";
                togglePassword.textContent = "Show";
            }

        });

    }


    // ==============================
    // Login Form
    // ==============================

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            clearErrors();

            const email = document.getElementById("email").value.trim();
            const passwordValue = document.getElementById("password").value.trim();

            let valid = true;

            if (email === "") {
                showError("emailError", "Email is required.");
                valid = false;
            }

            if (passwordValue === "") {
                showError("passwordError", "Password is required.");
                valid = false;
            }

            if (!valid) {
                return;
            }

            const message = document.getElementById("formMessage");

            message.textContent = "Frontend validation successful.";

            // Django authentication will be connected here later.
        });
    }


    // ==============================
    // Registration Form
    // ==============================

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", function (event) {

            event.preventDefault();

            clearErrors();

            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const passwordValue = document.getElementById("password").value;
            const confirmPassword =
                document.getElementById("confirmPassword").value;

            let valid = true;

            // Username
            if (username === "") {

                showError(
                    "usernameError",
                    "Username is required."
                );

                valid = false;
            }


            // Email
            if (email === "") {

                showError(
                    "emailError",
                    "Email is required."
                );

                valid = false;

            } else if (!isValidEmail(email)) {

                showError(
                    "emailError",
                    "Enter a valid email address."
                );

                valid = false;
            }


            // Password
            if (passwordValue.length < 8) {

                showError(
                    "passwordError",
                    "Password must contain at least 8 characters."
                );

                valid = false;
            }


            // Confirm Password
            if (passwordValue !== confirmPassword) {

                showError(
                    "confirmPasswordError",
                    "Passwords do not match."
                );

                valid = false;
            }


            if (!valid) {
                return;
            }

            const message = document.getElementById("formMessage");

            message.textContent = "Frontend validation successful.";

            // Django registration will be connected here later.
        });
    }


    // ==============================
    // Helper Functions
    // ==============================

    function showError(elementId, message) {

        const element = document.getElementById(elementId);

        if (element) {
            element.textContent = message;
        }
    }


    function clearErrors() {

        const errors = document.querySelectorAll(".error");

        errors.forEach(function (error) {
            error.textContent = "";
        });

        const message = document.getElementById("formMessage");

        if (message) {
            message.textContent = "";
        }
    }


    function isValidEmail(email) {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

});
