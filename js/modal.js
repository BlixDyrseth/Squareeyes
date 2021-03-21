//go to checkout
const modalRent = document.getElementById("modalRent");
const rentbtn = document.getElementById("rentbtn");
const close = document.querySelector(".close-me");
const nevermind = document.querySelector(".small-text");

rentbtn.onclick = function() {
    modalRent.style.display = "block";
}

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