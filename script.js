// Function to update the total price
function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach(item => {
        const quantity = parseInt(item.querySelector(".quantity").textContent);
        const unitPriceText = item.querySelector(".unit-price").textContent;
        const unitPrice = parseFloat(unitPriceText.match(/[\d.]+/)[0]); // Extracts only the numeric part
        total += quantity * unitPrice;
    });
    document.querySelector(".total").textContent = `${total.toFixed(2)} TND`;
}

// Event listeners for "+" buttons to increase quantity
document.querySelectorAll(".fa-plus-circle").forEach(button => {
    button.addEventListener("click", () => {
        const quantityElement = button.nextElementSibling;
        quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
        updateTotal();
    });
});

// Event listeners for "-" buttons to decrease quantity
document.querySelectorAll(".fa-minus-circle").forEach(button => {
    button.addEventListener("click", () => {
        const quantityElement = button.previousElementSibling;
        if (parseInt(quantityElement.textContent) > 0) {  // Prevent negative quantity
            quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
            updateTotal();
        }
    });
});

// Event listeners for delete (trash) buttons to remove items
document.querySelectorAll(".fa-trash-alt").forEach(button => {
    button.addEventListener("click", () => {
        button.closest(".card-body").remove();
        updateTotal();
    });
});

// Event listeners for heart buttons to toggle like (color change)
document.querySelectorAll(".fa-heart").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("liked");  // Toggle 'liked' class
    });
});
