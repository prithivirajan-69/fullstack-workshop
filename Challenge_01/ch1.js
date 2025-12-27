// Initial values
let count = 0;
let step = 1;

// DOM elements
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const stepButtons = document.querySelectorAll(".step");

// Function to update count display and color
function updateDisplay() {
    countDisplay.textContent = count;

    if (count > 0) {
        countDisplay.style.color = "green";
    } else if (count < 0) {
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}

// Increment button
incrementBtn.addEventListener("click", () => {
    count += step;
    updateDisplay();
});

// Decrement button (count cannot go below 0)
decrementBtn.addEventListener("click", () => {
    if (count - step >= 0) {
        count -= step;
        updateDisplay();
    }
});

// Reset button
resetBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});

// Step selector buttons
stepButtons.forEach(button => {
    button.addEventListener("click", () => {
        step = Number(button.getAttribute("data-step"));
    });
});

// Initial display
updateDisplay();
