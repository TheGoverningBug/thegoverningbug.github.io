/* Mobile Hamburger Menu */

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function() {
  navLinks.classList.toggle("show");
});

/* Home Page Cat Slider */

const sliderImages = document.querySelectorAll(".cat-slider-image");
const previousCatButton = document.getElementById("previous-cat");
const nextCatButton = document.getElementById("next-cat");

let currentCatImage = 0;

function showCatImage(imageNumber) {
  sliderImages.forEach(function(image) {
    image.classList.remove("active");
  });
  sliderImages[imageNumber].classList.add("active");
}
if (sliderImages.length > 0 && previousCatButton && nextCatButton) {
  showCatImage(currentCatImage);

  nextCatButton.addEventListener("click", function() {
    currentCatImage = currentCatImage +1;

    if (currentCatImage >= sliderImages.length) {
      currentCatImage = 0;
    }
    showCatImage(currentCatImage);
  });

  previousCatButton.addEventListener("click", function() {
    currentCatImage = currentCatImage -1;

    if (currentCatImage <0) {
      currentCatImage = sliderImages.length -1;
    }
    showCatImage(currentCatImage);
  });
}
