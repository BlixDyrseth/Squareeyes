//go to checkout
const modalRent = document.getElementById("modalRent");
const rentbtn = document.querySelector(".rentbtn");
const close = document.querySelector(".close-me");
const nevermind = document.querySelector(".small-text");
const counter = document.querySelector(".count-container");

console.log(rentbtn);

close.onclick = function() {
    modalRent.style.display = "none"
}

nevermind.onclick = function() {
    modalRent.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == modalRent) {
        modalRent.style.display = "none";
    }
}