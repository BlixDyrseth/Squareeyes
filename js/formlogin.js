function checkIfvalidatedLogin(event) {
    if(validateEmail(loginEmail.value) && checkLenght(loginpassword.value, 100)){
    window.location.replace("accountpage_watcher.html")
} else {
    loginError.style.display = "block";
}
}
loginform.addEventListener("submit", loginFormValidation);

loginform.addEventListener("submit", checkIfvalidatedLogin)