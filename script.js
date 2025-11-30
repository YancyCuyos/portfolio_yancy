const toggleButton = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        toggleButton.textContent = "Dark Mode";
        localStorage.setItem("theme", "light");
    }
});
