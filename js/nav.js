//dropdown menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.profilbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  const searchbtn = document.querySelector("#searchBtn");

  searchbtn.onclick = function()  {
    document.getElementById("search").scrollIntoView({
       behavior: "smooth"
    });
}

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");

menuBtn.onclick = function() {
  menu.style.display = "flex";
}

closeMenu.onclick = function() {
  menu.style.display = "none";
}

window.onclick = function(event) {
  if(event.target == menu) {
    menu.style.display = "none";
    closeMenu.style.display = "none";
}
}




