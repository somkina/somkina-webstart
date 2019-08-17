/*Скрипт слайдера*/
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.arrows__left'),
  nextArrow: $('.arrows__right'),
  responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});