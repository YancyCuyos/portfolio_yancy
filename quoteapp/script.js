const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("btn");

async function getQuote() {
  try {
    // Show loading state
    quoteText.textContent = "Loading...";
    authorText.textContent = "";

    // Fetch quote from Advice Slip API
    const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    // Update quote and author
    quoteText.textContent = `"${data.slip.advice}"`;
    authorText.textContent = "— Advice Slip";
  } catch (error) {
    console.error(error);
    quoteText.textContent = "Unable to load quote. Please try again.";
    authorText.textContent = "";
  }
}

// Button click event
button.addEventListener("click", getQuote);

// Load a quote when the page first loads
getQuote();
