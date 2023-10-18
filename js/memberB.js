alert("輸入VIP666847：獲得滿999免運券\n輸入VIP666789：獲得滿10%OFF折價券");
var info = document.querySelector('.my.Info');
var dis = document.querySelector('.my.Dis');
var ord = document.querySelector('.my.Ord');
var fav = document.querySelector('.my.Fav');

function myInfo() {
    info.style.color = '#003060';
    info.style.borderBottom = '3px solid #3493fb';
    dis.style.color = '#656565';
    dis.style.borderBottom = '3px solid #EDEDED';
    ord.style.color = '#656565';
    ord.style.borderBottom = '3px solid #EDEDED';
    fav.style.color = '#656565';
    fav.style.borderBottom = '3px solid #EDEDED';
};
function myDis() {
    info.style.color = '#656565';
    info.style.borderBottom = '3px solid #EDEDED';
    dis.style.color = '#003060';
    dis.style.borderBottom = '3px solid #3493fb';
    ord.style.color = '#656565';
    ord.style.borderBottom = '3px solid #EDEDED';
    fav.style.color = '#656565';
    fav.style.borderBottom = '3px solid #EDEDED';
};
function myOrd() {
    info.style.color = '#656565';
    info.style.borderBottom = '3px solid #EDEDED';
    dis.style.color = '#656565';
    dis.style.borderBottom = '3px solid #EDEDED';
    ord.style.color = '#003060';
    ord.style.borderBottom = '3px solid #3493fb';
    fav.style.color = '#656565';
    fav.style.borderBottom = '3px solid #EDEDED';
};
function myFav() {
    info.style.color = '#656565';
    info.style.borderBottom = '3px solid #EDEDED';
    dis.style.color = '#656565';
    dis.style.borderBottom = '3px solid #EDEDED';
    ord.style.color = '#656565';
    ord.style.borderBottom = '3px solid #EDEDED';
    fav.style.color = '#003060';
    fav.style.borderBottom = '3px solid #3493fb';
};

/* 跳出獲得優惠券的訊息 */
var gotocommentBlack999 = document.getElementById('gotocommentBlack999');
var gotocommentBlack10 = document.getElementById('gotocommentBlack10');
/* 讓送出評論區資料時，不發生網頁跳轉 */
document.getElementById("mycoupon").addEventListener("submit", function (event) {
    event.preventDefault();
    /* 輸入優惠碼，獲得優惠券 */
    var ticketInput = document.getElementById('ticketInput').value;
    var coupon10 = document.getElementById('coupon10');
    var coupon999 = document.getElementById('coupon999');
    if (ticketInput === 'VIP666847') {
        coupon999.style.display = 'flex';
        gotocommentBlack999.style.display = 'block';
    };
    if (ticketInput === 'VIP666789') {
        coupon10.style.display = 'flex';
        gotocommentBlack10.style.display = 'block';
    };
});
function closecoupon999() {
    gotocommentBlack999.style.display = 'none';
}
function closecoupon10() {
    gotocommentBlack10.style.display = 'none';
}