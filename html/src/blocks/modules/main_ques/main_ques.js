import $ from "jquery";
$(function() {
    $('.main_ques__name').on('click', function() {
        $(this).parent().toggleClass('active');
    })
});