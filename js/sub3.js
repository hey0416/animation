$(function () {
    $('.farming .farmer').click(function () {
        $(this).toggleClass('on');
        $('.speech>img:first-child').toggleClass('on');
    });

});