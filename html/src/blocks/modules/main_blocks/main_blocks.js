import $ from "jquery";
$(function() {
    var skroll = new Skroll()
    .add(".main_blocks__block",{
        animation:"fadeInUp",
        delay:150,
        duration:1000
    })
    .add(".main_sl__title",{
        animation:"fadeInUp",
        delay:100,
        duration:1000
    })
    .add(".main_sl__slides",{
        animation:"fadeInUp",
        delay:100,
        duration:1000
    })
    .add(".main_form__title",{
        animation:"fadeInUp",
        delay:100,
        duration:1000
    })
    // .add(".main_bl__chat--bl",{
    //     animation:"fadeInDown",
    //     delay:1000,
    //     duration:500
    // })
    .init();
    




    var block_show = false;

    function scrollTracking(){
        if (block_show) {
            return false;
        }

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.block_phone').offset().top;
        var eh = $('.block_phone').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            
            // Код анимации
            $('.block_phone').addClass('abc');
        }
    }

    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });
});