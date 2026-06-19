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

/* Bookings Page Form Validation */

const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const emailAddress = document.getElementById("email-address").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const ageConfirmed = document.getElementById("age-confirmed").checked;
    const selectedTimeslot = document.getElementById("input[name='timeslot']:checked");
    const visitorNumber = document.getElementById("visitor-number").value;
    const rulesConfirmed = document.getElementById("rules-confirmed").checked;
    const bookingMessage = document.getElementById("booking-message");
    
    bookingMessage.className = "";
    bookingMessage.textContent = "";

    if (firstName === "" || lastName === "") {
      showBookingError("Please enter your first and last name.");
      return;
    }
    if (emailAddress === "" || !emailAddress.includes("@")) {
      showBookingError("Please enter a valid email address.");
      return;
    }
    if (phoneNumber === "" || phoneNumber.length < 10) {
      showBookingError("Please enter a valid phone number.");
      return;
    }
    if (!ageConfirmed) {
      showBookingError("Please confirm that you are at least eighteen years old.");
      return;
    }
    if (visitorNumber === "" || visitorNumber < 1 || visitorNumber > 6) {
      showBookingError("Please enter between 1 and 6 visitors.");
      return;
    }
    if (!rulesConfirmed) {
      showBookingError("Please agree to the cafe rules before booking.");
      return;
    }
    bookingMessage.textContent = "Booking Submitted.";
    bookingMessage.classList.add("booking-success");

    bookingForm.reset();
  });
}

function showBookingError(message) {
  const bookingMessage = document.getElementById("booking-message");
  bookingMessage.textContent = message;
  bookingMessage.classList.add("booking-error");
}

/* Menu Page Filtering */

const categoryButtons = document.querySelectorAll(".category-filter");
const dietButtons = document.querySelectorAll(".diet-filter");
const menuItems= document.querySelectorAll(".menu-item");
const noMenuMessage = document.getElementById("no-menu-message");

let selectedCategory = "";
let selectedDiet = "all";

function updateMenuItems() {
  let visibleItems = 0;

  menuItems.forEach(function(item) {
    const itemCategory = item.getAttribute("data-category");
    const itemDiet = item.getAttribute("data-diet");

    const categoryMatches = selectedCategory === "" || selectedCategory === itemCategory;
    const dietMatches = selectedDiet === "all" || selectedDiet === itemDiet;

    if (categoryMatches && dietMatches) {
      item.style.display = "flex";
      visibleItems = visibleItems +1;
    } else {
      item.style.display = "none";
    }
  });

  if (noMenuMessage) {
    if (visibleItems === 0) {
      noMenuMessage.style.display = "block";
    } else {
      noMenuMessage.style.display = "none";
    }
  }
}

categoryButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const clickedCategory = button.getAttribute("data-category");

    categoryButtons.forEach(function(btn) {
      btn.classList.remove("active-filter");
    });
    if (selectedCategory === clickedCategory) {
      selectedCategory = "";
    } else {
      selectedCategory = clickedCategory;
      button.classList.add("active-filter");
    }
    updateMenuItems();
  });
});

dietButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    selectedDiet = button.getAttribute("data-diet");

    dietButtons.forEach(function(btn) {
      btn.classList.remove("active-filter");
    });
    button.classList.add("active-filter");
    updateMenuItems()
  });
});
