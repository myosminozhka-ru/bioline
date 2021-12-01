import $ from "jquery";
import "slick-carousel";
$(function() {
    $(".sl25-js").slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        swipe: false,
        vertical: true,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                vertical: false
            }
          }
        ]
    });
});