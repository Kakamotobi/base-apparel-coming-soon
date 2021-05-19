const emailSubForm = document.querySelector(".emailSubForm");
const emailSubInput = document.querySelector(".emailSubInput");
const emailSubBtn = document.querySelector(".emailSubBtn");
const errorIcon = document.querySelector(".errorIcon");
const errorMsg = document.querySelector(".errorMsg");

emailSubBtn.addEventListener("click", function () {
    if (emailSubInput.validity.typeMismatch) {
        emailSubInput.classList.add("errorBorder");
        errorIcon.style.display = "inline";
        errorMsg.style.display = "block";
    } else {
        emailSubForm.addEventListener("submit", function (evt) {
            evt.preventDefault();
            console.log(emailSubInput.value);
            emailSubInput.classList.remove("errorBorder");
            errorIcon.style.display = "none";
            errorMsg.style.display = "none";
            emailSubInput.value = "";
        });
    }
});
