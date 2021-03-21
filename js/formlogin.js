function checkIfvalidatedLogin(event) {
    if(validateEmail(loginEmail.value) && checkLenght(loginpassword.value, 100)){
    window.location.replace("accountpage_watcher.html")
    console.log("helloe");
} else {
    loginError.style.display = "block";
    console.log("didn´t work sucka");
}
}
loginform.addEventListener("submit", loginFormValidation);

loginform.addEventListener("submit", checkIfvalidatedLogin)