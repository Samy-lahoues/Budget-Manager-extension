// Select DOM elements
const spendBtn = document.getElementById("submit");
const alertSpan = document.getElementById("alert");
const clearBtn = document.getElementById("clear");
const displayTotal = document.getElementById("display-total");
const displayLimit = document.getElementById("display-limit");
const h1 = document.querySelector("h1");
const amountInput = document.getElementById("amount");

// Initialize total from localStorage or set to 0
let total = parseFloat(localStorage.getItem("total")) || 0;
let limit = parseFloat(localStorage.getItem("limit")) || 200;
updateDisplayTotal(total);
updateDisplayLimit(limit);

// Event listener for the Spend button
spendBtn.onclick = () => {
    const amount = parseFloat(amountInput.value);

    // Validate the input
    if (isNaN(amount)) {
        showAlert("Please enter a valid number", "yellow", "black");
        return;
    }

    // Update the total
    total += amount;
    localStorage.setItem("total", total);
    updateDisplayTotal(total);

    // Check if the total is within the limit range
    if (total >= (limit - 25) && total <= limit) {
        showAlert("You've reached your limit", "red", "white");
    } else {
        clearAlert();
    }
};

// Event listener for the Clear button
clearBtn.onclick = () => {
    total = 0;
    localStorage.setItem("total", total);
    updateDisplayTotal(total);
    amountInput.value = "";
    clearAlert();
};

// Helper functions
function updateDisplayTotal(value) {
    displayTotal.textContent = value.toFixed(2);
}
function updateDisplayLimit(value){
    displayLimit.textContent = value.toFixed(2);
}
function showAlert(message, bgColor, textColor) {
    h1.style.marginTop = "15px";
    alertSpan.style.backgroundColor = bgColor;
    alertSpan.style.color = textColor;
    alertSpan.style.width = "185px";
    alertSpan.style.padding = "3px 5px";
    alertSpan.textContent = message;
}

function clearAlert() {
    alertSpan.textContent = "";
    alertSpan.style.padding = "0";
    h1.style.marginTop = "0";
}

