$(document).ready(function () {
  $('#carouselOne').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: false,
    dots: false,
    responsive: {
      //Адаптивность.
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  $('#carouselTwo').owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      //Адаптивность.
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});

$(document).ready(function () {
  $('#carouselThree').owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    dots: false,
    mouseGrag: true,
    touchDrag: true,
    responsive: {
      //Адаптивность.
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $('#carouselFour').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    dots: false,
    mouseGrag: true,
    autoplayTimeout: 2000,
    touchDrag: true,
    responsive: {
      //Адаптивность.
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

$(document).ready(function () {
  $('#carouselFive').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: false,
    nav: true,
    dots: false,
    mouseGrag: true,
    touchDrag: true,
    responsive: {
      //Адаптивность.
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
    },
  });
});
