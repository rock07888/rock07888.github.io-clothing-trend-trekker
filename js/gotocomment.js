/* ---------- 滑動置頂按鈕 ---------- */
/* ---------- 進入評論區按鈕 ---------- */
// 按鈕滑動置頂
$("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
});
// 置頂按鈕淡出淡入
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#gotop').stop().fadeTo('', 1);
        $('#gotocomment').stop().fadeTo('', 1)
    } else {
        $('#gotop').stop().fadeOut('fast');
        $('#gotocomment').stop().fadeOut('fast');
    }
});
/* 儲存設定 */
var saveset = document.getElementById("saveset");
function savesetting() {
    saveset.value = "已儲存";
    saveset.style.color = "#ffffff";
    saveset.style.backgroundColor = "#3493fb";
}
/* 已給予評論後，該評論區消失 */
var gotocommentB1 = document.getElementById('gotocommentB1');
var gotocommentB2 = document.getElementById('gotocommentB2');
/* 已給予評論後，您尚有 (？) 件商品未評論 */
var gotocommentB2 = document.getElementById('gotocommentB2');
/* 根據尚未評論商品數，控制相關設定 */
var gotocommentTitle = document.getElementById('gotocommentTitle');
/* 顯示與關閉評論區塊 */
var gotocommentBlack = document.getElementById('gotocommentBlack');
/* 顯示獲得優惠券 */
var gotocommentBlack2 = document.getElementById('gotocommentBlack2');
var gotocommentBlack3 = document.getElementById('gotocommentBlack3');
function showgotocomment() {
    gotocommentBlack.style.display = 'block';
}
function closegotocomment() {
    gotocommentBlack.style.display = 'none';
}
function sentgotocomment1() {
    gotocommentBlack.style.display = 'none';
    gotocommentB1.style.display = 'none';
    console.log(gotocommentB1.style.display);
    if ((gotocommentB1.style.display === "none") && (gotocommentB2.style.display === "none")) {
        remaining.style.display = 'none';
        gotocommentTitle.innerHTML = "您尚有 (0) 件商品未評論";
        gotocommentBlack3.style.display = 'block';
    } else {
        remaining.querySelector("img").setAttribute('src', '../images/comment/remind1.svg');
        gotocommentTitle.innerHTML = "您尚有 (1) 件商品未評論";
        gotocommentBlack2.style.display = 'block';
    }
}
function sentgotocomment2() {
    gotocommentBlack.style.display = 'none';
    gotocommentB2.style.display = 'none';
    console.log(gotocommentB2.style.display);
    if ((gotocommentB1.style.display === "none") && (gotocommentB2.style.display === "none")) {
        remaining.style.display = 'none';
        gotocommentTitle.innerHTML = "您尚有 (0) 件商品未評論";
        gotocommentBlack3.style.display = 'block';
    } else {
        remaining.querySelector("img").setAttribute('src', '../images/comment/remind1.svg');
        gotocommentTitle.innerHTML = "您尚有 (1) 件商品未評論";
        gotocommentBlack2.style.display = 'block';
    }
}
/* 關閉999免運視窗 */
function closecoupon1() {
    gotocommentBlack2.style.display = 'none';
}
/* 關閉10%折扣視窗 */
function closecoupon2() {
    gotocommentBlack3.style.display = 'none';
}
/* 第一件商品選擇星星 */
var starA1 = document.getElementById('starA1');
var starA2 = document.getElementById('starA2');
var starA3 = document.getElementById('starA3');
var starA4 = document.getElementById('starA4');
var starA5 = document.getElementById('starA5');
function stara1() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara2() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara3() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara4() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara5() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
}
function stara1red() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara2red() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara3red() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara4red() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function stara5red() {
    starA1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA4.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starA5.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
}
/* 第二件商品選擇星星 */
var starB1 = document.getElementById('starB1');
var starB2 = document.getElementById('starB2');
var starB3 = document.getElementById('starB3');
var starB4 = document.getElementById('starB4');
var starB5 = document.getElementById('starB5');
function starb1() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb2() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb3() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb4() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb5() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starYellow.svg");
}
function starb1red() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb2red() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb3red() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb4red() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starGray.svg");
}
function starb5red() {
    starB1.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB2.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB3.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB4.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
    starB5.querySelector("img").setAttribute("src", "../images/comment/starRed.svg");
}
/* 讓送出評論區資料時，不發生網頁跳轉 */
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
});
