const emailSubForm = document.querySelector(".emailSubForm");
const emailSubInput = document.querySelector(".emailSubInput");
const emailSubBtn = document.querySelector(".emailSubBtn");
const errorIcon = document.querySelector(".errorIcon");
const errorMsg = document.querySelector(".errorMsg");

emailSubForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const emailTest = emailSubInput.value;

    if (!isValidEmail(emailTest)) {
        emailSubInput.classList.add("errorBorder");
        errorIcon.style.display = "inline";
        errorMsg.style.display = "block";
        console.log(`${emailTest} is invalid`);
    } else {
        emailSubInput.classList.remove("errorBorder");
        errorIcon.style.display = "none";
        errorMsg.style.display = "none";
        emailSubInput.value = "";
        console.log(`${emailTest} is valid`);
    }
});

// Email validation
function isValidEmail(emailTest) {
    return /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+\@([A-Za-z0-9_-]+\.)+[A-Za-z]{2,4}$/.test(
        emailTest
    );
}
