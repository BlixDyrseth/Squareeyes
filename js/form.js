const form = document.querySelector("#signupform");
const loginForm = document.querySelector("#loginform");
const formWatcher = document.querySelector("#signupformwatcher")
const firstName = document.querySelector("#firstname");
const firstNameError = document.querySelector("#firstnameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastnameError");
const password = document.querySelector("#makePassword");
const passwordError = document.querySelector("#makepasswordError");
const repeatpassword = document.querySelector("#repeatPassword");
const repeatpasswordError = document.querySelector("#repeatPasswordError");
const email = document.querySelector("#addEmail");
const emailError = document.querySelector("#emailError");
const button = document.querySelector("#signupbtn");
const loginEmail = document.querySelector("#email");
const loginEmailError = document.querySelector("#loginemailError");
const loginpassword = document.querySelector("#password");
const loginpasswordError = document.querySelector("#passwordError");
const loginError = document.querySelector("#loginfailed")


function validateForm(event) {
    event.preventDefault();

    if(checkLenght(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }

    if(checkLenght(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(checkLenght(password.value, 10) === true) {
        passwordError.style.display = "none";
    } else {
        passwordError.style.display = "block";
    }

    if(repeatpassword.value === password.value) {
        repeatpasswordError.style.display = "none";
    } else {
        repeatpasswordError.style.display = "block";
    }

    if(validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }  

    console.log("denne funka da")
}

function loginFormValidation(event){
    event.preventDefault();

    if(validateEmail(loginEmail.value) === true) {
        loginEmailError.style.display = "none";
    } else {
        loginEmailError.style.display = "block";
    }

    if(checkLenght(loginpassword.value, 100) === true) {
        loginpasswordError.style.display = "none";
    } else {
        loginpasswordError.style.display = "block";
    }
    console.log("juppsi")
}


function checkLenght(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



