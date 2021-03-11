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
