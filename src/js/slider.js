
$(document).ready(function(){
  $('.slider__wrapper')?.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev down-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next down-arrow"></button>',
    responsive: [
        {
        breakpoint: 992,
        settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
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
});

$(document).ready(function(){
$('.news__content')?.slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 3,
dots: false,
arrows: true,
prevArrow: '<button type="button" class="slick-prev news-arrow"></button>',
nextArrow: '<button type="button" class="slick-next news-arrow"></button>',
responsive: [
    {
    breakpoint: 992,
    settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        }
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
});

$(document).ready(function(){
    $('.resources__content')?.slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev news-arrow"></button>',
      nextArrow: '<button type="button" class="slick-next news-arrow"></button>',
      responsive: [
          {
          breakpoint: 992,
          settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
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
  });
