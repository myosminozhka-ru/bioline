import $ from "jquery";
import "slick-carousel";
$(function() {
    $(".sl13-js").slick({
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
              // dots: true,
              slidesToShow: 1
            }
          }
        ]
    });
    
    function setEqualHeight(columns) {
        var tallestcolumn = 0,
            currentHeight = '';
        columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
        columns.height(tallestcolumn);
    }
    $(document).ready(function() {
        setEqualHeight($(".main_pref__text"));
        setEqualHeight($(".main_pref__result"));
    });
});