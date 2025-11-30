const toggleButton = document.getElementById("theme-toggle");

// Load saved theme if exists
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
}

// Button click event
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Update button text
    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
