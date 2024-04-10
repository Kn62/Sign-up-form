const password = document.querySelector("#password");
const passwordCheck = document.querySelector("#password-check");

const confirmPassword = function () {
    if (password.value === passwordCheck.value) {
        passwordCheck.setCustomValidity('');
    } else {
        passwordCheck.setCustomValidity('Passwords do not match');
    }
}

password.addEventListener('input', confirmPassword);
passwordCheck.addEventListener('input', confirmPassword);