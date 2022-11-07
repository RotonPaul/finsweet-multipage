// navbar scrolling
$(window).scroll(function () {
  var scrolling = $(window).scrollTop();

  if (scrolling > 70) {
    $('.menu_bg').addClass('bg')
  } else {
    $('.menu_bg').removeClass('bg')
  };
});
// navbar scrolling
// 991px navbar toogler
$('.menu_btn').click(function () {
  $('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
  $('.menu_btn i').toggleClass("xxxx");
});
// 991px navbar toogler

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.back2top').fadeIn('slow');
  } else {
    $('.back2top').fadeOut('slow');
  };
});
// Back to top button


$('.client_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  loop: true,
  // arrows:false,
  infinite: true,
  speed: 1500,
  // fade: true,
  cssEase: 'linear',
  autoplay: true,
  nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
  prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
});
// team slider
$('.team_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  loop: true,
  arrows: false,
  infinite: true,
  speed: 1500,
  // fade: true,
  cssEase: 'linear',
  autoplay: true,
  responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

// mixitup
var config = document.querySelector('.mixit_box');
var mixer = mixitup(config);
// mixitup