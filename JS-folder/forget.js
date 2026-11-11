
const forgetForm = document.getElementById("forgetForm");

forgetForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get email value
    const email = document.getElementById("email").value.trim();

    // Check empty email
    if (email === "") {
        alert("Please enter your email address!");
        return;
    }

    // Show success message
    alert("A password reset link has been sent to " + email);

    // Redirect to login page
    window.location.href = "./login.html";

});
