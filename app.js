let responsiveSlider = function () {
  let slider = document.getElementById('slider');
  let sliderWidth = slider.offsetWidth;
  let slideList = document.getElementById('sliderWrap');
  let items = slideList.querySelectorAll('li').length;

  let count = 0;

  let num = document.getElementById('num');
  slideNums = num.querySelectorAll('div');

  let prev = document.getElementById('prev');
  let next = document.getElementById('next');

  let addColor = function (pos) {
    slideNums[pos].style.boxShadow = '0 0 10px 2px rgb(196, 253, 255)';
    slideNums[pos].style.background = '#fff';
  };

  let removeColor = function (pos) {
    slideNums[pos].style.boxShadow = '0 0 10px 2px transparent';
    slideNums[pos].style.background = 'rgba(255, 255, 255, .3)';
  };

  addColor(0);

  slideNums[0].addEventListener('click', function () {
    removeColor(count);
    count = 0;
    addColor(count);
    slideList.style.left = '0px';
  });
  slideNums[1].addEventListener('click', function () {
    removeColor(count);
    count = 1;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[2].addEventListener('click', function () {
    removeColor(count);
    count = 2;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[3].addEventListener('click', function () {
    removeColor(count);
    count = 3;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[4].addEventListener('click', function () {
    removeColor(count);
    count = 4;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[5].addEventListener('click', function () {
    removeColor(count);
    count = 5;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[6].addEventListener('click', function () {
    removeColor(count);
    count = 6;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });
  slideNums[7].addEventListener('click', function () {
    removeColor(count);
    count = 7;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });

  window.addEventListener('resize', function () {
    sliderWidth = slider.offsetWidth;
    slideList.style.left = '-' + count * sliderWidth + 'px';
  });

  let prevSlide = function () {
    removeColor(count);
    if (!count) count = items - 1;
    else count--;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  };

  let nextSlide = function () {
    removeColor(count);
    if (count == items - 1) count = 0;
    else count++;
    addColor(count);
    slideList.style.left = '-' + count * sliderWidth + 'px';
  };

  next.addEventListener('click', function () {
    nextSlide();
  });

  prev.addEventListener('click', function () {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 6000);
};

window.onload = function () {
  responsiveSlider();
};
