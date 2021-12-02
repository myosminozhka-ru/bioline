import $ from "jquery";
// удалить при публикации
$(function() {
    $('.main_form__next').on('click', function() {
        if ( $('.main_form__ques').hasClass('active')) {
            $(this).removeClass('active')
        } else {

        }
        $('.main_form__ques').toggleClass('active');
    })
})
// удалить при публикации
$(function() {
    var block_show = false;

    function scrollTracking(){
        if (block_show) {
            return false;
        }

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.main_form').offset().top;
        var eh = $('.main_form').outerHeight();
        var dh = $(document).height();   
    
        if (wt + wh >= et || wh + wt == dh || eh + et < wh){
            block_show = true;
            
            // Код анимации
            $('.main_form').addClass('abc2');
        }
    }

    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });
});