var divA = document.getElementById("sign-in_switch");
var divAA = document.querySelector('.sign-in_title');
var divB = document.getElementById("sign-up_switch");
var divBB = document.querySelector('.sign-up_title');
divAA.addEventListener('mouseenter', signinblue);
divAA.addEventListener('mouseleave', signingray);
divBB.addEventListener('mouseenter', signupblue);
divBB.addEventListener('mouseleave', signupgray);

function signIn() {
    divAA.style.color = '#000000';
    divAA.style.borderBottom = '3px solid #656565';
    divBB.style.color = '#656565';
    divBB.style.borderBottom = '3px solid #EDEDED';
    if (divA.style.display === "none") {
        divA.style.display = "block"
        divB.style.display = "none";
    }
    if (divA.style.display === "block") {
        divA.style.display = "block";
        divB.style.display = "none";
    }
}

function signUp() {
    divBB.style.color = '#000000';
    divBB.style.borderBottom = '3px solid #656565';
    divAA.style.color = '#656565';
    divAA.style.borderBottom = '3px solid #EDEDED';
    if (divB.style.display === "none") {
        divB.style.display = "block";
        divA.style.display = "none";
    }
    if (divB.style.display === "block") {
        divB.style.display = "block";
        divA.style.display = "none";
    }
}

function signupblue() {
    if (divB.style.display == "none") {
        divBB.style.color = '#003060';
        divBB.style.borderBottom = '3px solid #3493fb';
    }
};
function signupgray() {
    if (divB.style.display == "none") {
        divBB.style.color = '#656565';
        divBB.style.borderBottom = '3px solid #ededed';
    }
};
function signinblue() {
    if (divA.style.display == "none") {
        divAA.style.color = '#003060';
        divAA.style.borderBottom = '3px solid #3493fb';
    }
};
function signingray() {
    if (divA.style.display == "none") {
        console.log("456");
        divAA.style.color = '#656565';
        divAA.style.borderBottom = '3px solid #ededed';
    }
};
window.onload = function () {
    alert("本網站為學生練習作品，無完整後台功能。\n點選「登入」即可進入會員中心頁面！");
};