let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}




var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

// Change slide on button click
document.querySelector(".prev").addEventListener("click", function() {
  showSlide(currentSlide - 1);
});

document.querySelector(".next").addEventListener("click", function() {
  showSlide(currentSlide + 1);
});

// Automatically change slide every 5 seconds
setInterval(function() {
  showSlide(currentSlide + 1);
}, 5000);
