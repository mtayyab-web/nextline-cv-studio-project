
const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function (event) {

    // Stop default form submission
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Get terms checkbox
    const terms = document.getElementById("terms");

    // Check empty fields
    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Check password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return;
    }

    // Check terms and conditions
    if (!terms.checked) {
        alert("Please agree to the Terms of Use and Privacy Policy!");
        return;
    }

    // Dummy signup success
    alert("Account created successfully! Welcome, " + name + "!");

    // Redirect to homepage
    window.location.href = "index.html";

});
