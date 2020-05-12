$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      adaptiveHeight: false,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"> <img src="icon/chevron-left.png"> </button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icon/chevron-right.png"></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
          dots: false,
          arrows: false
          }
        }
      ]
    });
  });
 
 
