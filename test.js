document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.getElementById("burgermenu");
  burgerMenu.style.display = "flex";
  burgerMenu.addEventListener("click", toggleDropdown);
  burgerMenu.addEventListener("touchend", toggleDropdown);
});

function toggleDropdown() {
  var bmenuContent = document.getElementById("bmenu-content");
  var isVisible = window.getComputedStyle(bmenuContent).display !== "none";

  bmenuContent.style.display = isVisible ? "none" : "flex";
}

function toggleMenu() {
  var menuToggleRadio = document.getElementById("menu-toggle-radio");
  //var menuToggleRadio1 = document.getElementById("menu-toggle-radio1");
  //var menuToggleRadio2 = document.getElementById("menu-toggle-radio2");
  var bmenuContent = document.getElementById("bmenu-content");
  var burgerMenu = document.getElementById("burgermenu");
  //var header = document.getElementById("header");
  //var hdparent = document.getElementById("hdparent");

  var anyChecked = Array.from(menuToggleRadio).some(function (radio) {
    return radio.checked;
  });

  if (anyChecked) {
    bmenuContent.style.display = "none";
    burgerMenu.style.display = "none";
  } else {
    bmenuContent.style.display = "none";
    burgerMenu.style.display = "flex";
  }
  //if ((menuToggleRadio1 = radio.checked)) {
  //  hdparent.style.display = "flex";
  //  bmenuContent.style.display = "none";
  //  burgerMenu.style.display = "none";
  //}
}
