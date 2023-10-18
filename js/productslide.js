
$(function () {
    $(".productslide_carousel").jCarouselLite({
        btnPrev: '.button_prev',
        btnNext: '.button_next',
        scroll: 1,//每次轉動的張數
        visible: 3,//每次看到的張數
        speed: 500,//轉動的速度
        vertical: true,
    });
});

// 左側小圖區
var nauticaWhite = document.querySelector(".nautica1");
var nauticaGray = document.querySelector(".nautica2");
var nauticaBlack = document.querySelector(".nautica3");
var nauticaYellow = document.querySelector(".nautica4");
var nauticaGreen = document.querySelector(".nautica5");
var optionWhite = document.querySelector(".option_white");
var optionGray = document.querySelector(".option_gray");
var optionBlack = document.querySelector(".option_black");
var optionYellow = document.querySelector(".option_yellow");
var optionGreen = document.querySelector(".option_green");
function displaywhite() {
    // if (nauticaWhite.style.display === "none") {
    nauticaWhite.style.display = "block";
    nauticaGray.style.display = "none";
    nauticaBlack.style.display = "none";
    nauticaYellow.style.display = "none";
    nauticaGreen.style.display = "none";
    optionWhite.style.borderColor = "#3493FB";
    optionGray.style.borderColor = "#ededed";
    optionBlack.style.borderColor = "#ededed";
    optionYellow.style.borderColor = "#ededed";
    optionGreen.style.borderColor = "#ededed";
    // }

}
function displaygray() {
    nauticaWhite.style.display = "none";
    nauticaGray.style.display = "block";
    nauticaBlack.style.display = "none";
    nauticaYellow.style.display = "none";
    nauticaGreen.style.display = "none";
    optionWhite.style.borderColor = "#ededed";
    optionGray.style.borderColor = "#3493FB";
    optionBlack.style.borderColor = "#ededed";
    optionYellow.style.borderColor = "#ededed";
    optionGreen.style.borderColor = "#ededed";
}
function displayblack() {
    nauticaWhite.style.display = "none";
    nauticaGray.style.display = "none";
    nauticaBlack.style.display = "block";
    nauticaYellow.style.display = "none";
    nauticaGreen.style.display = "none";
    optionWhite.style.borderColor = "#ededed";
    optionGray.style.borderColor = "#ededed";
    optionBlack.style.borderColor = "#3493FB";
    optionYellow.style.borderColor = "#ededed";
    optionGreen.style.borderColor = "#ededed";
}
function displayyellow() {
    nauticaWhite.style.display = "none";
    nauticaGray.style.display = "none";
    nauticaBlack.style.display = "none";
    nauticaYellow.style.display = "block";
    nauticaGreen.style.display = "none";
    optionWhite.style.borderColor = "#ededed";
    optionGray.style.borderColor = "#ededed";
    optionBlack.style.borderColor = "#ededed";
    optionYellow.style.borderColor = "#3493FB";
    optionGreen.style.borderColor = "#ededed";
}
function displaygreen() {
    nauticaWhite.style.display = "none";
    nauticaGray.style.display = "none";
    nauticaBlack.style.display = "none";
    nauticaYellow.style.display = "none";
    nauticaGreen.style.display = "block";
    optionWhite.style.borderColor = "#ededed";
    optionGray.style.borderColor = "#ededed";
    optionBlack.style.borderColor = "#ededed";
    optionYellow.style.borderColor = "#ededed";
    optionGreen.style.borderColor = "#3493FB";
}
// 中間主要圖區-放大鏡功能
// 1
document.querySelector(".nautica1").addEventListener('mouseenter', enterHandler);
document.querySelector(".nautica1").addEventListener('mousemove', moveHandler);
document.querySelector(".nautica1").addEventListener('mouseleave', leaveHandler);
document.querySelector(".nautica1").addEventListener('touchstart', enterHandler);
document.querySelector(".nautica1").addEventListener('touchmove', moveHandler);
document.querySelector(".nautica1").addEventListener('touchend', leaveHandler);
// 2
document.querySelector(".nautica2").addEventListener('mouseenter', enterHandler);
document.querySelector(".nautica2").addEventListener('mousemove', moveHandler);
document.querySelector(".nautica2").addEventListener('mouseleave', leaveHandler);
document.querySelector(".nautica2").addEventListener('touchstart', enterHandler);
document.querySelector(".nautica2").addEventListener('touchmove', moveHandler);
document.querySelector(".nautica2").addEventListener('touchend', leaveHandler);
// 3
document.querySelector(".nautica3").addEventListener('mouseenter', enterHandler);
document.querySelector(".nautica3").addEventListener('mousemove', moveHandler);
document.querySelector(".nautica3").addEventListener('mouseleave', leaveHandler);
document.querySelector(".nautica3").addEventListener('touchstart', enterHandler);
document.querySelector(".nautica3").addEventListener('touchmove', moveHandler);
document.querySelector(".nautica3").addEventListener('touchend', leaveHandler);
// 4
document.querySelector(".nautica4").addEventListener('mouseenter', enterHandler);
document.querySelector(".nautica4").addEventListener('mousemove', moveHandler);
document.querySelector(".nautica4").addEventListener('mouseleave', leaveHandler);
document.querySelector(".nautica4").addEventListener('touchstart', enterHandler);
document.querySelector(".nautica4").addEventListener('touchmove', moveHandler);
document.querySelector(".nautica4").addEventListener('touchend', leaveHandler);
// 5
document.querySelector(".nautica5").addEventListener('mouseenter', enterHandler);
document.querySelector(".nautica5").addEventListener('mousemove', moveHandler);
document.querySelector(".nautica5").addEventListener('mouseleave', leaveHandler);
document.querySelector(".nautica5").addEventListener('touchstart', enterHandler);
document.querySelector(".nautica5").addEventListener('touchmove', moveHandler);
document.querySelector(".nautica5").addEventListener('touchend', leaveHandler);
function enterHandler(nau) {
    // 將nau物件增加zoomed的css屬性
    nau.target.setAttribute("zoomed", 1);/* setAttribute:替該物件增加屬性*/
    /* 讓手機板在觸碰時放大的即為觸碰位子 */
    moveHandler(nau);

}
function moveHandler(nau) {
    /* 取得物件精確的大小與位置 */
    let rect = nau.target.getBoundingClientRect();
    let offsetX, offsetY;

    // 判定nau.1的type是否為touch
    if (['touchstart', 'touchmove', 'touchend'].includes(nau.type)) {
        // touch事件的event物件並沒有offsetX,offsetY需自行計算
        // 計算出位移的百分比
        offsetX = nau.touches[0].pageX - rect.left;
        offsetY = nau.touches[0].pageY - rect.top;
        nau.preventDefault()/* 避免手機觸碰時捲動畫面 */

        // 否則即是鼠標
    } else {
        /* offset取得元素的座標 */
        // 將offsetX,offsetY賦值為moveHandler(nau)事件內的對應值
        offsetX = nau.offsetX;
        offsetY = nau.offsetY;
    }
    // 計算游標在圖片上移動的x和y的百分比 /* x除以容器的寬y除以容器的高 */ 

    let x = offsetX / rect.width;
    let y = offsetY / rect.height;
    // 分別將x和y設定為css的變數
    nau.target.style.setProperty('--x', x);
    nau.target.style.setProperty('--y', y);
}
function leaveHandler(nau) {
    // 將nau物件移除zoomed的css屬性
    nau.target.removeAttribute("zoomed");
    moveHandler(nau);/* 讓手機板在觸碰時放大的即為觸碰位子 */
}

// 右側尺寸選項區
var sizeS = document.querySelector(".sizeS")
var sizeM = document.querySelector(".sizeM")
var sizeL = document.querySelector(".sizeL")
function sizesOption() {
    sizeS.style.borderColor = "#3493FB";
    sizeM.style.borderColor = "#ededed";
    sizeL.style.borderColor = "#ededed";
}
function sizemOption() {
    sizeS.style.borderColor = "#ededed";
    sizeM.style.borderColor = "#3493FB";
    sizeL.style.borderColor = "#ededed";
}
function sizelOption() {
    sizeS.style.borderColor = "#ededed";
    sizeM.style.borderColor = "#ededed";
    sizeL.style.borderColor = "#3493FB";
}
// 數量增減input
// 減號鍵
function decreaseproductquantity() {
    var productInput = document.getElementById("product_quantity_input")
    var productValue = parseInt(productInput.value)
    if (productValue <= 0) {
        productInput.value = 1;
    } else if (productValue > 1) {
        productInput.value = productValue - 1;
    }
}
// 加號鍵
function increaseproductquantity() {
    var productInput = document.getElementById("product_quantity_input")
    var productValue = parseInt(productInput.value)
    if (productValue < 9) {
        productInput.value = productValue + 1;
    }
}
// 中間input輸入區
function forceInputPositive() {
    var input = document.getElementById('product_quantity_input');
    var value = parseInt(input.value);
    if (value <= 0) {
        input.value = 1;
    }
}