$(function () {
    $('.wrap .bee img:nth-child(2)').click(function () {
        $('.wrap .bee img:nth-child(7)').toggleClass('on');
        $('.wrap .bee img:last-child ').toggleClass('on');
        $('.speech img:first-child').toggleClass('on');
    });

    $('.wrap .henhouse img:first-child').click(function () {
        $('.wrap .henhouse img:nth-child(2)').toggleClass('on');
        $('.speech img:nth-child(2)').toggleClass('on');
    });
});
