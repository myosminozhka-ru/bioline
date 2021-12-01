import $ from "jquery";
$(function() {
    var skroll = new Skroll()
    .add(".main_blocks__block",{
        animation:"fadeInUp",
        delay:500,
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
    .add(".main_form__fr",{
        animation:"fadeInUp",
        delay:100,
        duration:1000
    })
    .add(".main_bl__chat--bl",{
        animation:"fadeInDown",
        delay:1000,
        duration:500
    })
    .init();
});