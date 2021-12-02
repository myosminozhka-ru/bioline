// удалить при публикации
import $ from "jquery";
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