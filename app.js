'use strict';

// const imgBx = document.querySelector('.imgBx');
const slides = document.querySelectorAll('.imgBx img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
let i = 0;

function nextSlide() {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}
function prevSlide() {
  slides[i].classList.remove('active');
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add('active');
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('click', nextSlideText);
prevBtn.addEventListener('click', prevSlideText);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
