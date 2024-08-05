
const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
const slide = document.querySelector(".slide").clientWidth + 20;
const secondSlide = document.querySelector(".slide").clientWidth + 40;
const nextButton = document.querySelector(".btn-right");
const prevButton = document.querySelector(".btn-left");

// Match-Medias.

const smallScreen = window.matchMedia('(max-width: 600px)');
const mediumScreen = window.matchMedia('(min-width: 600px) and (max-width:830px)');
const largeScreen = window.matchMedia('(min-width: 830px) and (max-width:1120px)');
const largerScreen = window.matchMedia('(min-width:1120px)');

var slideIndex = 0;
var slideLimit = 4;

function moveSlider() {
    slidesWrapper.style.transform = `translateX(${-slide * slideIndex}px)`;
    updateSlideLimit()
}

function updateSlideLimit() {
  if (smallScreen.matches) {
    slideLimit = 1; // 
  } else if (mediumScreen.matches) {
    slideLimit = 2; 
  } else if (largeScreen.matches) {
    slideLimit = 3; 
  } else if (largerScreen.matches) {
    slideLimit = 4;
  } else {
    slideLimit = 4;
  }
}

nextButton.addEventListener("click", () => {
  
      if (slideIndex < slides.length - slideLimit) {
        slideIndex++;
      } else {
        slideIndex = 0;
      }
      moveSlider();
    
    
});

