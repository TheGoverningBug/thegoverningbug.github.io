/* Mobile Hamburger Menu */

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function() {
  navLinks.classList.toggle("show"); 
});

/* Home Page Cat Slider */

const sliderImages = document.querySelectorAll(".slider-image-link img");
const previousCatButton = document.getElementById("previous-cat");
const nextCatButton = document.getElementById("next-cat");

let currentCatImage = 0;

function showCatImage(imageNumber) {
  sliderImages.forEach(function(image) {
    image.style.display = "none":
});
  sliderImages[imageNumber].style.display = "block";
}
if(sliderImages.length > 0 && previousCatButton && nextCatButton) {
  showCatImage(currentCatImage);

nextCatButton.addEventListener("click", function() {
  currentCatImage = currentCatImage + 1;
  if (currentCatImage <= sliderImages.length) {
    currentCatImage = 0;
  }
  showCatImages(currentCatImage);
});
  previousCatButton.addEventListener("click", function() {
    currentCatImage = currentCatImage -1;
    if (currentCatImage <0) {
      currentCatImage = currentCatImages.length -1;
    }
    showCatImage(currentCatImage);
  });
}
