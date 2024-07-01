// Function to toggle between login and sign up forms
function toggleForm() {
    let loginForm = document.getElementById("loginForm");
    let signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    } else {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        clearSignupForm();
    }
}

// Function to handle form submission (login)
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any stored user
    let foundUser = storedUsers.find(user => user.username === username && user.password === password);

    if (foundUser) {
        alert(`Welcome back, ${username}!`);
        // Redirect to another page upon successful login
        window.location.href = "https://bharath2521.github.io/I-TECH-WEB/"; // Replace with your desired URL
    } else {
        alert("Incorrect username or password.");
    }
});

// Function to create a new account
function createAccount() {
    let newUsername = document.getElementById("newUsername").value;
    let newPassword = document.getElementById("newPassword").value;

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username is already taken
    if (storedUsers.some(user => user.username === newUsername)) {
        alert("Username already taken. Please choose another.");
        return;
    }

    // Add new user to the stored users array
    storedUsers.push({ username: newUsername, password: newPassword });

    // Save updated users array to local storage
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Account created successfully! Please log in with your new credentials.");
    clearSignupForm();
}

// Function to clear the sign up form
function clearSignupForm() {
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
}
