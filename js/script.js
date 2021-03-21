// modal

const modal = document.getElementById("modal");
const btn = document.querySelector(".login");
const span = document.querySelector(".close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//pick me button
const infoBox = document.getElementById("boxone");
const pickMeBtn = document.querySelector(".pickme");
const closebtn = document.querySelector(".close-create");

pickMeBtn.onclick = function() {
    infoBox.style.display = "block";
}

closebtn.onclick = function() {
    infoBox.style.display = "none"
}

window.onclick = function(event) {
    if(event.target == infoBox) {
        infoBox.style.display = "none";
    }
}







