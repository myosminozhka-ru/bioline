import $ from "jquery";
import "slick-carousel";
$(function() {
    $(".sl3-js").slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 130,
        responsive: [
          {
            breakpoint: 1281,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 811,
            settings: {
              dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
});