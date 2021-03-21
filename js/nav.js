//dropdown menu

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("funker denne egentlig?")
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




