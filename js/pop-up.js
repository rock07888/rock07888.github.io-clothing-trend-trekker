/* ---------- 滑動置頂按鈕 ---------- */
// 按鈕滑動置頂
$("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
});
// 置頂按鈕淡出淡入
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('#gotop').stop().fadeTo('', 1);
    } else {
        $('#gotop').stop().fadeOut('fast');
    }
});

window.addEventListener('resize', function () {
    var container = document.getElementById('product');
    var content = document.querySelector('.list-box');
    var sec2 = document.getElementById('sec2');
    var content2 = document.querySelector('.sec2-list-box');

    if (container.offsetWidth < content.scrollWidth) {
        container.style.overflowX = 'scroll'; /* 显示滚动条 */
    } else {
        container.style.overflowX = 'hidden'; /* 隐藏滚动条 */
    }
    if (sec2.offsetWidth < content2.scrollWidth) {
        sec2.style.overflowX = 'scroll'; /* 显示滚动条 */
    } else {
        sec2.style.overflowX = 'hidden'; /* 隐藏滚动条 */
    }
});

/* ---------- 以下為 pop 專用的 navbar 淡入淡出 ---------- */
window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var navbarA = document.getElementById("popMenu");
    var navbarB = document.getElementById("popMenuB");
    var hamburgerMenu = document.querySelector(".hamburgerMenu");
    var windowHeight = window.innerHeight;

    var fadeOutStart = 50; // 開始消失的滾動位置
    var fadeInStart = 50; // 開始出現的滾動位置

    // 計算透明度的百分比（從 0 到 1）
    var fadeOutPercent = Math.max(0, Math.min((scrollPosition - fadeOutStart) / (windowHeight / 3), 1));
    var fadeInPercent = Math.max(0, Math.min((scrollPosition - fadeInStart) / (windowHeight / 3), 1));

    // 應用透明度
    navbarA.style.opacity = 1 - fadeOutPercent;
    navbarB.style.opacity = fadeInPercent;

    // 如果超過了開始消失的滾動位置，則隱藏 navbarA
    if (scrollPosition >= fadeOutStart) {
        navbarA.style.display = "none";
        hamburgerMenu.style.height = "calc(100vh - 60px)";
        hamburgerMenu.style.top = "60px";
    } else {
        navbarA.style.display = "";
        hamburgerMenu.style.height = "calc(100vh - 120px)";
        hamburgerMenu.style.top = "120px";
    }

    // 如果超過了開始出現的滾動位置，則顯示 navbarB
    if (scrollPosition >= fadeInStart) {
        navbarB.style.top = "0";
        hamburgerMenu.style.height = "calc(100vh - 60px)";
        hamburgerMenu.style.top = "60px";
    } else {
        navbarB.style.top = "-200px";
        hamburgerMenu.style.height = "calc(100vh - 120px)";
        hamburgerMenu.style.top = "120px";
    }

});
/* ---------- 以上為 pop 專用的 navbar 淡入淡出 ---------- */

/* ---------- 手機版漢堡按鈕選單：所有商品、品牌分類 ----------*/
$(document).ready(function () {
    $('.pophamburger').click(function () {
        $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
    });
});
$(document).on('click', function (event) {
    var target = $(event.target);
    if ((!target.closest('.pophamburger').length) && (!target.closest('#popMenuB').length) && (!target.closest('.navigation').length)) {
        if ($('.hamburgerMenu').hasClass('show-hamburgerMenu')) {
            $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
        }
    }
});