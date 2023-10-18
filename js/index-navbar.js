/* ---------- 以下為 index 專用的 navbar 淡入淡出 ---------- */
// 所有商品與品牌分類需移動位置
var allProductA = document.getElementById("allProduct");
var brandClassA = document.getElementById("brandClass");
allProductA.style.top = "205px";
brandClassA.style.top = "205px";

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var navbarA = document.getElementById("navbarA");
    var navbarB = document.getElementById("navbarB");
    var windowHeight = window.innerHeight;

    var fadeOutStart = 120; // 開始消失的滾動位置
    var fadeInStart = 120; // 開始出現的滾動位置

    // 計算透明度的百分比（從 0 到 1）
    var fadeOutPercent = Math.max(0, Math.min((scrollPosition - fadeOutStart) / (windowHeight / 3), 1));
    var fadeInPercent = Math.max(0, Math.min((scrollPosition - fadeInStart) / (windowHeight / 3), 1));

    // 應用透明度
    navbarA.style.opacity = 1 - fadeOutPercent;
    navbarB.style.opacity = fadeInPercent;

    // 如果超過了開始消失的滾動位置，則隱藏 navbarA
    if (scrollPosition >= fadeOutStart) {
        navbarA.style.display = "none";
        allProductA.style.top = "130px";
        brandClassA.style.top = "130px";
    } else {
        navbarA.style.display = "";
    }

    // 如果超過了開始出現的滾動位置，則顯示 navbarB
    if (scrollPosition >= fadeInStart) {
        navbarB.style.top = "0";
    } else {
        navbarB.style.top = "-200px";
    }

    if (scrollPosition < fadeOutStart) {
        allProductA.style.top = "205px";
        brandClassA.style.top = "205px";
    }

});
/* ---------- 以上為 index 專用的 navbar 淡入淡出 ---------- */

/* ---------- 網頁版選單：所有商品、品牌分類 ----------*/

/* 所有商品 */
var mp = document.getElementById("mp");
var mpA = document.querySelector('.mp');
var allProduct = document.getElementById("allProduct");

mp.addEventListener('mouseenter', showAllproduct);
mp.addEventListener('mouseleave', hideAllproduct);
allProduct.addEventListener('mouseenter', showAllproduct);
allProduct.addEventListener('mouseleave', hideAllproduct);

function showAllproduct() {
    mp.style.color = "#3493fb";
    mpA.style.color = "#3493fb";
    allProduct.style.opacity = '1';
    allProduct.style.visibility = 'visible';
    allProduct.style.transform = 'translateY(0)';
}

function hideAllproduct() {
    mp.style.color = "#656565";
    mpA.style.color = "#656565";
    allProduct.style.opacity = '0';
    allProduct.style.visibility = 'hidden';
    allProduct.style.transform = 'translateY(-20px)';
}

/* 品牌分類 */
var bc = document.getElementById("bc");
var bcA = document.querySelector('.bc');
var brandClass = document.getElementById("brandClass");

bc.addEventListener('mouseenter', showBrandclass);
bc.addEventListener('mouseleave', hideBrandclass);
brandClass.addEventListener('mouseenter', showBrandclass);
brandClass.addEventListener('mouseleave', hideBrandclass);

function showBrandclass() {
    bc.style.color = "#3493fb";
    bcA.style.color = "#3493fb";
    brandClass.style.opacity = '1';
    brandClass.style.visibility = 'visible';
    brandClass.style.transform = 'translateY(0)';
}

function hideBrandclass() {
    bc.style.color = "#656565";
    bcA.style.color = "#656565";
    brandClass.style.opacity = '0';
    brandClass.style.visibility = 'hidden';
    brandClass.style.transform = 'translateY(-20px)';
}

/* ---------- 手機版漢堡按鈕選單：所有商品、品牌分類 ----------*/
$(document).ready(function () {
    $('.hamburger.home').click(function () {
        $(this).toggleClass('is-active');
        $('.overlay').toggleClass('show-overlay');
        $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
        $('body').toggleClass('hidden-overflow');
    });
});
$(document).on('click', function (event) {
    var target = $(event.target);
    if ((!target.closest('.home-navbar').length) && (!target.closest('.hamburgerMenu').length)) {
        if ($('.hamburger.home').hasClass('is-active')) {
            $('.hamburger.home').toggleClass('is-active');
            $('.overlay').toggleClass('show-overlay');
            $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
            $('body').toggleClass('hidden-overflow');
        }
    }
});
$(document).ready(function () {
    $('.hamburger.C').click(function () {
        $(this).toggleClass('is-active');
        $('.overlay').toggleClass('show-overlay');
        $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
        $('body').toggleClass('hidden-overflow');
    });
});
$(document).on('click', function (event) {
    var target = $(event.target);
    if ((!target.closest('.index-navbar').length) && (!target.closest('.hamburgerMenu').length)) {
        if ($('.hamburger.C').hasClass('is-active')) {
            $('.hamburger.C').toggleClass('is-active');
            $('.overlay').toggleClass('show-overlay');
            $('.hamburgerMenu').toggleClass('show-hamburgerMenu');
            $('body').toggleClass('hidden-overflow');
        }
    }
});
