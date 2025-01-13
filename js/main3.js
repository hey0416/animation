$(function () {
    $('.main_desk .people6, .main_desk > img:last-child').click(function () {
        $('.main_desk .people6').toggleClass('on');
    });

    $('.main_desk .desk .click').click(function () {
        $(this).addClass('on');
    });

    $('.main_desk .desk .click .stamp').click(function () {
        $(this).addClass('on');
    });

    $('.main_desk .desk .click .stamp').on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function () {
        if (confirm('귀농하러 가시겠습니다?')) {
            window.location.href = 'index4.html';
        } else {

        }
    });
});