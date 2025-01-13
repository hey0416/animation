$(function () {
    $('.lounge .angry_people').click(function () {
        $(this).toggleClass('on');
        $('.speech img:first-child').toggleClass('on');
    });

    $('.coffee_girl').click(function () {
        $('.coffee_girl img:first-child').toggleClass('on');
        $('.speech>img:nth-child(2)').toggleClass('on');
    });

});