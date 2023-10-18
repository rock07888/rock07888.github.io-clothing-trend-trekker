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

function dispalyInfo1() {
    var info1 = document.getElementById("info1");
    info1.style.display = 'flex';
}

function dispalyInfo2() {
    var info2 = document.getElementById("info2");
    info2.style.display = 'flex';
}

function dispalyInfo3() {
    var info3 = document.getElementById("info3");
    info3.style.display = 'flex';
}

/* 十字叉叉按鈕旋轉 */

function showInfo1Detail() {
    var info1 = document.getElementById("info1Detail");
    info1.classList.toggle("ybgdisplayflex");
}

function showInfo2Detail() {
    var info2 = document.getElementById("info2Detail");
    info2.classList.toggle("ybgdisplayflex");

}

function toggleCross(expandBtn) {
    expandBtn.classList.toggle('active');
}