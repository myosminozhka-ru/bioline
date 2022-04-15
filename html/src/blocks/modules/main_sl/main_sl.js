import $ from "jquery";
import "slick-carousel";
$(function() {
    var block_show2 = false;

    function scrollTracking(){
        if (block_show2) {
            return false;
        }

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.main_sl__title').offset().top;
        var eh = $('.main_sl__title').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show2 = true;
            
            // Код анимации
            $('.main_sl__title').addClass('abc');
            $(".sl25-js").slick({
                dots: true,
                infinite: true,
                speed: 4000,
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
        }
    }

    $(window).scroll(function(){
        scrollTracking();
    });
});