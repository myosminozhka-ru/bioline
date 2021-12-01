import $ from "jquery";
import "slick-carousel";
$(function() {
    $(".sl25-js").slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        vertical: true,
        slidesToScroll: 1
    });
});