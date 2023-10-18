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

// 移除收藏好物的叉叉鍵
var myCollection1 = document.getElementById("myCollection1");
function mycollectDelete1() {
    myCollection1.style.display = "none";
};

var myCollection2 = document.getElementById("myCollection2");
function mycollectDelete2() {
    myCollection2.style.display = "none";
};

// 當2個收藏好物都被移除，顯示出購物車已空的圖示
document.addEventListener('click', function () {
    var myCollection1 = document.getElementById("myCollection1");
    var myCollection2 = document.getElementById("myCollection2");
    var myCollection3 = document.getElementById("myCollection3");
    if ((myCollection1.style.display === 'none') && (myCollection2.style.display === 'none')) {
        myCollection3.style.display = 'flex';
    }
});