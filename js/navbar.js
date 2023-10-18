/* ---------- 網頁版選單：所有商品、品牌分類 ----------*/

/* 所有商品 */
var mp = document.getElementById("mp");
var allProduct = document.getElementById("allProduct");

mp.addEventListener('mouseenter', showAllproduct);
mp.addEventListener('mouseleave', hideAllproduct);
allProduct.addEventListener('mouseenter', showAllproduct);
allProduct.addEventListener('mouseleave', hideAllproduct);

function showAllproduct() {
    mp.style.color = "#3493fb";
    allProduct.style.opacity = '1';
    allProduct.style.visibility = 'visible';
    allProduct.style.transform = 'translateY(0)';
}

function hideAllproduct() {
    mp.style.color = "#656565";
    allProduct.style.opacity = '0';
    allProduct.style.visibility = 'hidden';
    allProduct.style.transform = 'translateY(-20px)';
}

/* 品牌分類 */
var bc = document.getElementById("bc");
var brandClass = document.getElementById("brandClass");

bc.addEventListener('mouseenter', showBrandclass);
bc.addEventListener('mouseleave', hideBrandclass);
brandClass.addEventListener('mouseenter', showBrandclass);
brandClass.addEventListener('mouseleave', hideBrandclass);

function showBrandclass() {
    bc.style.color = "#3493fb";
    brandClass.style.opacity = '1';
    brandClass.style.visibility = 'visible';
    brandClass.style.transform = 'translateY(0)';
}

function hideBrandclass() {
    bc.style.color = "#656565";
    brandClass.style.opacity = '0';
    brandClass.style.visibility = 'hidden';
    brandClass.style.transform = 'translateY(-20px)';
}

/* ---------- 手機版漢堡按鈕選單：所有商品、品牌分類 ----------*/
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.overlay').toggleClass('show-overlay');
        $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
        $('body').toggleClass('hidden-overflow');
    });
});
$(document).on('click', function (event) {
    var target = $(event.target);
    if ((!target.closest('.navbar').length) && (!target.closest('.hamburgerMenu').length)) {
        if ($('.hamburger').hasClass('is-active')) {
            $('.hamburger').toggleClass('is-active');
            $('.overlay').toggleClass('show-overlay');
            $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
            $('body').toggleClass('hidden-overflow');
        }
    }
});
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