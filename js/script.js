    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });
    //  滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });
    // 置頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('',1);
        } else {
            $('#gotop').stop().fadeOut();
        }
    });