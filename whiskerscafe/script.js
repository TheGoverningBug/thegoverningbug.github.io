/* Mobile Compatibility */

const menuButton = document.getElementById("menu-button"); /* Finds Hamburger Menu ID */
const navLinks = document.getElementById("nav-links"); /* Finds Navigation Links */

menuButton.addEventListener("click", function() { /* Runs Nested Code When Hamburger Button Is Clicked */
  navLinks.classList.toggle("show"); /* Nested Code */
});
