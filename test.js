function toggleMenu() {
  var menuToggleCheckbox = document.getElementById("menu-toggle-checkbox");
  var bmenuContent = document.getElementById("burgermenu","bmenu-content");

  if (menuToggleCheckbox.checked) {
    bmenuContent.style.display = "flex";
  } else {
    bmenuContent.style.display = "none";
  }
  if (menuToggleCheckbox.unchecked){
    bmenuContent.hidden = false;
  } else {
    bmenuContent.hidden = true;
  }

  
}
function toggleDropdown() {
  var burgerMenu = document.getElementById("burgermenu");
  var bmenuContent = document.getElementById("bmenu-content");

  if (bmenuContent.style.display === "none") {
    bmenuContent.style.display = "flex";
    burgerMenu.classList.add("active");
  } else {
    bmenuContent.style.display = "none";
    burgerMenu.classList.remove("active");
  }
}
