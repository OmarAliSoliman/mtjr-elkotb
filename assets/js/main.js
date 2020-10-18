$(document).ready(function () {
  if ($(".header-slider").length) {
    $(".header-slider").slick({
      dots: false,
      arrows: false,
    });
  }

  // books-slider
  if ($(".books-slider").length) {
    $(".books-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      arrowa: true,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".more-slider").length) {
    $(".more-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".company-slider")) {
    $(".company-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".latest-offers-slider").length) {
    $(".latest-offers-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if (".writters-slider".length) {
    $(".writters-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if($(".about-slider").length){
    $(".about-slider").slick({
      dots: true,
      arrows: false
    });
  }

  if ($("#example").length) {
    $("#example").htmlNumberSpinner();
  }

  if ($("#example2").length) {
    $("#example2").htmlNumberSpinner();
  }


});

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.right = "-200px";
}
