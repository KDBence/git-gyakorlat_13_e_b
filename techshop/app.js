const btnWelcome = document.getElementById("btnWelcome");

if (btnWelcome) {
    btnWelcome.addEventListener("click", () => {
        alert("Köszönjük, hogy a TechShopot választotta!");
    });
}

const cartCountElement = document.getElementById("kosar-tartalma");

if (cartCountElement) {
    document.querySelectorAll(".products button").forEach(button => {
        button.addEventListener("click", () => {
            const currentCount = Number.parseInt(cartCountElement.textContent, 10) || 0;
            cartCountElement.textContent = currentCount + 1;
        });
    });
}
