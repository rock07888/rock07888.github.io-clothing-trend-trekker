var popupA = document.querySelector('.popupA');
var popupB = document.querySelector('.popupB');
var popupC = document.querySelector('.popupC');

function popbtnAEnter() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/Aleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/Acenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/Aright.svg");
}
function popbtnALeave() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/btnleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/btncenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/btnright.svg");
}
function popbtnBEnter() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/Bleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/Bcenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/Bright.svg");
}
function popbtnBLeave() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/btnleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/btncenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/btnright.svg");
}
function popbtnCEnter() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/Cleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/Ccenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/Cright.svg");
}
function popbtnCLeave() {
    popupA.querySelector("img").setAttribute("src", "../images/toybtn/btnleft.svg");
    popupB.querySelector("img").setAttribute("src", "../images/toybtn/btncenter.svg");
    popupC.querySelector("img").setAttribute("src", "../images/toybtn/btnright.svg");
}