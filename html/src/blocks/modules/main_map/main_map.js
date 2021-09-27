import $ from "jquery";
$(function() {
    $('.main_map__l--title').on('click', function() {
        $('.main_map__l--pop').removeClass('active');
        $(this).parent('li').find('.main_map__l--pop').toggleClass('active');
        $('.main_map__l--cls').on('click', function() {
            $('.main_map__l--pop').removeClass('active');
        });
        $(document).on('click', function(e){
            if( $(e.target).closest('.main_map__l--pop').length || $(e.target).closest('.main_map__l--title').length)
            return
            
            $('.main_map__l--pop').removeClass('active');
        });
    })
});