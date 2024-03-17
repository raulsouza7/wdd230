document.addEventListener("DOMContentLoaded", function () {
    const confirmPassword = document.getElementById("confirmPassword");
    const form = document.getElementById("surveyForm");
    const password = document.getElementById("password");
    const pageRating = document.getElementById("pageRating");
    const ratingValue = document.getElementById("ratingValue");

    pageRating.addEventListener("input", function () {
        ratingValue.textContent = this.value;
    });

    form.addEventListener("submit", function (event) {
        if (password.value !== confirmPassword.value) {
            event.preventDefault();
            alert("Passwords do not match. Please re-enter.");
            password.value = "";
            confirmPassword.value = "";
            password.focus();
        }
    });

    ratingValue.textContent = pageRating.value;
});
