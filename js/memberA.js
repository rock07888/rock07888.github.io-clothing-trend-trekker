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



// 新增常用取貨超商的按鍵
function showAllMart() {
    var overlay = document.querySelector('.overlay');
    var popmart = document.getElementById("popmart");
    overlay.style.display = "block";
    popmart.style.display = "block";
};

function closeMart() {
    var overlay = document.querySelector('.overlay');
    var popmart = document.getElementById("popmart");
    overlay.style.display = "none";
    popmart.style.display = "none";
};

function mymartDelete1() {
    var mymartA = document.getElementById("mymartA");
    mymartA.style.display = "none";
};

function mymartDelete2() {
    var mymartA = document.getElementById("mymartB");
    mymartA.style.display = "none";
};

// 完全沒有取或超商時的顯示畫面
document.addEventListener('click', function () {
    var mymartA = document.getElementById("mymartA");
    var mymartB = document.getElementById("mymartB");
    var mymartC = document.getElementById("mymartC");
    if ((mymartA.style.display === 'none') && (mymartB.style.display === 'none')) {
        mymartC.style.display = 'flex';
    }
});

//綁定第三方社群帳號的解除與綁定案紐
function fbOff(){
    var fbOn = document.getElementById("fbOn");
    var fbOff = document.getElementById("fbOff");
    fbOn.style.display = "none";
    fbOff.style.display = "flex";
}

function fbOn(){
    var fbOn = document.getElementById("fbOn");
    var fbOff = document.getElementById("fbOff");
    fbOn.style.display = "flex";
    fbOff.style.display = "none";
}

function lineOff(){
    var lineOn = document.getElementById("lineOn");
    var lineOff = document.getElementById("lineOff");
    lineOn.style.display = "none";
    lineOff.style.display = "flex";
}

function lineOn(){
    var lineOn = document.getElementById("lineOn");
    var lineOff = document.getElementById("lineOff");
    lineOn.style.display = "flex";
    lineOff.style.display = "none";
}

function ggOff(){
    var ggOn = document.getElementById("ggOn");
    var ggOff = document.getElementById("ggOff");
    ggOn.style.display = "none";
    ggOff.style.display = "flex";
}

function ggOn(){
    var ggOn = document.getElementById("ggOn");
    var ggOff = document.getElementById("ggOff");
    ggOn.style.display = "flex";
    ggOff.style.display = "none";
}
