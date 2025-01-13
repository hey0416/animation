$(function () {
    $('.meeting .people .angry_girl').click(function () {
        $(this).toggleClass('on');
        $('.meeting .speech img:first-child').toggleClass('on');
    });

    $('.meeting .people .angry_boy').click(function () {
        $(this).toggleClass('on');
        $('.meeting .speech img:last-child').toggleClass('on');
    });

    const animationDuration = 2000;
    
    setTimeout(function() {
        $('.loading').fadeOut(1000);
    }, animationDuration);
});