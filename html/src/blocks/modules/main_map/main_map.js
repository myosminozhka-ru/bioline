import $ from "jquery";
$(function() {
    $('.main_map__l--title').on('click', function() {
        $('.main_map__l--pop').removeClass('active');
        $(this).removeClass('active');
        $('.main_map__l li').removeClass('active');
        $(this).parent('li').toggleClass('active');
        $(this).parent('li').find('.main_map__l--pop').toggleClass('active');
        $('.main_map__l--cls').on('click', function() {
            $('.main_map__l--pop').removeClass('active');
            $('.main_map__l li').removeClass('active');
        });
        $('.main_map__l--pp').on('click', function() {
            $('.main_map__l--pop').removeClass('active');
            $('.main_map__l li').removeClass('active');
        });
        $(document).on('click', function(e){
            if( $(e.target).closest('.main_map__l--pop').length || $(e.target).closest('.main_map__l--title').length)
            return
            
            $('.main_map__l--pop').removeClass('active');
            $('.main_map__l li').removeClass('active');
        });
    });
    $('.feedback').click(function() {
        $('.form-wrapper').addClass('opened');
        return false;
    });
    $('.form-wrapper .icon-close').click(function() {
        $('.form-wrapper').removeClass('opened');
        return false;
    });
    $(document).click( function(event){
        if( $(event.target).closest('.form-wrapper-inner').length ) 
          return;
        $('.form-wrapper').removeClass('opened');
        event.stopPropagation();
    })
    $(document).keydown(function(event){
        if (event.which == 27) {
            $('.form-wrapper').removeClass('opened');
        }
    });
});