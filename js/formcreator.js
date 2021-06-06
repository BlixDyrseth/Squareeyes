function checkIfvalidated(event) {
    if(checkLenght(firstName.value, 0) && checkLenght(lastName.value, 0) && checkLenght(password.value, 10) && repeatpassword.value === password.value && validateEmail(email.value) === true){
    window.location.replace("accountpage_creator.html")
} else {
}
}

form.addEventListener("submit", validateForm);

form.addEventListener("submit", checkIfvalidated);

