// Elements

const amountInput = document.getElementById("amount");
const gstRateSelect = document.getElementById("gstRate");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const originalAmount = document.getElementById("originalAmount");
const gstAmount = document.getElementById("gstAmount");
const totalAmount = document.getElementById("totalAmount");

const gstButtons = document.querySelectorAll(".gst-btn");


// GST Buttons

gstButtons.forEach(button => {

    button.addEventListener("click", () => {

        gstButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const rate = button.dataset.rate;

        gstRateSelect.value = rate;
    });

});


// Calculate GST

calculateBtn.addEventListener("click", () => {

    const amount = parseFloat(amountInput.value);

    const gstRate = parseFloat(gstRateSelect.value);

    if (!amount || amount <= 0) {

        alert("Please enter a valid amount.");

        return;
    }

    const gstValue =
        (amount * gstRate) / 100;

    const total =
        amount + gstValue;

    originalAmount.textContent =
        `₹${amount.toFixed(2)}`;

    gstAmount.textContent =
        `₹${gstValue.toFixed(2)}`;

    totalAmount.textContent =
        `₹${total.toFixed(2)}`;

});


// Reset

resetBtn.addEventListener("click", () => {

    amountInput.value = "";

    gstRateSelect.value = "18";

    originalAmount.textContent =
        "₹0.00";

    gstAmount.textContent =
        "₹0.00";

    totalAmount.textContent =
        "₹0.00";

    gstButtons.forEach(btn =>
        btn.classList.remove("active")
    );

    document
        .querySelector('[data-rate="18"]')
        .classList.add("active");

});


// Select Dropdown -> Active Button Sync

gstRateSelect.addEventListener("change", () => {

    gstButtons.forEach(btn =>
        btn.classList.remove("active")
    );

    const selectedBtn =
        document.querySelector(
            `[data-rate="${gstRateSelect.value}"]`
        );

    if (selectedBtn) {
        selectedBtn.classList.add("active");
    }

});

// const darkModeBtn =
// document.getElementById("darkModeBtn");

// darkModeBtn.addEventListener("click", () => {

//     document.body.classList.toggle("dark");

//     if(document.body.classList.contains("dark")){
//         darkModeBtn.innerHTML =
//         "☀️ Light Mode";
//     }else{
//         darkModeBtn.innerHTML =
//         "🌙 Dark Mode";
//     }

// });


// Load Theme

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    darkModeBtn.innerHTML="☀️ Light Mode";
}

// Save Theme

darkModeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
        darkModeBtn.innerHTML="☀️ Light Mode";
    }else{
        localStorage.setItem("theme","light");
        darkModeBtn.innerHTML="🌙 Dark Mode";
    }

});