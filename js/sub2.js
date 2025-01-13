$(function () {
    $('.wrap .apple img:first-child').click(function () {
        $('.wrap .apple img:nth-child(2)').toggleClass('on');
        $('.speech>img:first-child').toggleClass('on');
    });

    $('.watermelon img:first-child,.watermelon img:nth-child(3)').click(function () {
        $('.watermelon img:nth-child(3)').toggleClass('on');
        $('.watermelon img:last-child').toggleClass('on');
        $('.speech>img:nth-child(2)').toggleClass('on');
    });
});