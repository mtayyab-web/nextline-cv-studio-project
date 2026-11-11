
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Check empty fields
    if (email === "" || password === "") {
        alert("Please enter your email and password!");
        return;
    }

    // Dummy login
    alert("Login successful! Welcome to Nextline CV Studio.");

    // Redirect to homepage
    window.location.href = "index.html";

});
