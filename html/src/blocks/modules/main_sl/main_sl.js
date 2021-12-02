import $ from "jquery";
import "slick-carousel";
$(function() {
    $(".sl25-js").slick({
        dots: true,
        infinite: false,
        speed: 2000,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        vertical: true,
        slidesToScroll: 1,
        pauseOnHover: false,
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