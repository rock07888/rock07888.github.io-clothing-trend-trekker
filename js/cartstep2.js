/* 四個不同發票類型的轉換按鈕 */
var choiceA = document.querySelector('.receipt-class-choice.A');
var choiceB = document.querySelector('.receipt-class-choice.B');
var choiceC = document.querySelector('.receipt-class-choice.C');
var choiceD = document.querySelector('.receipt-class-choice.D');

var btnA = document.querySelector('.receipt-A');
var btnB = document.querySelector('.receipt-B');
var btnC = document.querySelector('.receipt-C');
var btnD = document.querySelector('.receipt-D');

var DD1str;
var DD2str;
var DD3str;
var DD4str;

function changetoA() {
    choiceA.style.display = "flex";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "none";
    btnA.style.color = '#000000';
    btnA.style.border = '2px solid #000000';
    btnB.style.color = '#656565';
    btnB.style.border = '2px solid #656565';
    btnC.style.color = '#656565';
    btnC.style.border = '2px solid #656565';
    btnD.style.color = '#656565';
    btnD.style.border = '2px solid #656565';
    localStorage.setItem('DD1str', 1);
    localStorage.setItem('DD2str', 0);
    localStorage.setItem('DD3str', 0);
    localStorage.setItem('DD4str', 0);
}
function changetoB() {
    choiceA.style.display = "none";
    choiceB.style.display = "flex";
    choiceC.style.display = "none";
    choiceD.style.display = "none";
    btnB.style.color = '#000000';
    btnB.style.border = '2px solid #000000';
    btnA.style.color = '#656565';
    btnA.style.border = '2px solid #656565';
    btnC.style.color = '#656565';
    btnC.style.border = '2px solid #656565';
    btnD.style.color = '#656565';
    btnD.style.border = '2px solid #656565';
    localStorage.setItem('DD1str', 0);
    localStorage.setItem('DD2str', 1);
    localStorage.setItem('DD3str', 0);
    localStorage.setItem('DD4str', 0);
}
function changetoC() {
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "flex";
    choiceD.style.display = "none";
    btnC.style.color = '#000000';
    btnC.style.border = '2px solid #000000';
    btnB.style.color = '#656565';
    btnB.style.border = '2px solid #656565';
    btnA.style.color = '#656565';
    btnA.style.border = '2px solid #656565';
    btnD.style.color = '#656565';
    btnD.style.border = '2px solid #656565';
    localStorage.setItem('DD1str', 0);
    localStorage.setItem('DD2str', 0);
    localStorage.setItem('DD3str', 1);
    localStorage.setItem('DD4str', 0);
}
function changetoD() {
    choiceA.style.display = "none";
    choiceB.style.display = "none";
    choiceC.style.display = "none";
    choiceD.style.display = "flex";
    btnD.style.color = '#000000';
    btnD.style.border = '2px solid #000000';
    btnB.style.color = '#656565';
    btnB.style.border = '2px solid #656565';
    btnC.style.color = '#656565';
    btnC.style.border = '2px solid #656565';
    btnA.style.color = '#656565';
    btnA.style.border = '2px solid #656565';
    localStorage.setItem('DD1str', 0);
    localStorage.setItem('DD2str', 0);
    localStorage.setItem('DD3str', 0);
    localStorage.setItem('DD4str', 1);
}

btnA.addEventListener('mouseenter', enterA);
btnA.addEventListener('mouseleave', leaveA);
btnB.addEventListener('mouseenter', enterB);
btnB.addEventListener('mouseleave', leaveB);
btnC.addEventListener('mouseenter', enterC);
btnC.addEventListener('mouseleave', leaveC);
btnD.addEventListener('mouseenter', enterD);
btnD.addEventListener('mouseleave', leaveD);

function enterA() {
    if (choiceA.style.display === "none") {
        btnA.style.color = '#003060';
        btnA.style.border = '2px solid #3493fb';
    }
}
function leaveA() {
    if (choiceA.style.display === "none") {
        btnA.style.color = '#656565';
        btnA.style.border = '2px solid #656565';
    }
}
function enterB() {
    if (choiceB.style.display === "none") {
        btnB.style.color = '#003060';
        btnB.style.border = '2px solid #3493fb';
    }
}
function leaveB() {
    if (choiceB.style.display === "none") {
        btnB.style.color = '#656565';
        btnB.style.border = '2px solid #656565';
    }
}
function enterC() {
    if (choiceC.style.display === "none") {
        btnC.style.color = '#003060';
        btnC.style.border = '2px solid #3493fb';
    }
}
function leaveC() {
    if (choiceC.style.display === "none") {
        btnC.style.color = '#656565';
        btnC.style.border = '2px solid #656565';
    }
}
function enterD() {
    if (choiceD.style.display === "none") {
        btnD.style.color = '#003060';
        btnD.style.border = '2px solid #3493fb';
    }
}
function leaveD() {
    if (choiceD.style.display === "none") {
        btnD.style.color = '#656565';
        btnD.style.border = '2px solid #656565';
    }
}

/* 變更超商 */
var overlay = document.querySelector('.overlay');
var popwhite2 = document.querySelector('.popwhite2');

function popbtn2() {
    overlay.style.display = "block";
    popwhite2.style.display = "flex";
}
function closepop2() {
    overlay.style.display = "none";
    popwhite2.style.display = "none";
}

/* 選擇運費總類 */
function mart1() {
    var manymart = document.getElementsByName('manymart');
    var feeCategory;

    for (var i = 0; i < manymart.length; i++) {
        if (manymart[i].checked) {
            feeCategory = parseInt(manymart[i].value);
            break;
        }
    }
    let recipientX = document.querySelector('.recipient-info.x');
    let recipientY = document.querySelector('.recipient-info.y');
    let recipientZ = document.querySelector('.recipient-info.z');

    if (feeCategory === 80) {
        recipientX.style.display = "flex";
        recipientY.style.display = "none";
        recipientZ.style.display = "none";
    } else if (feeCategory === 70) {
        recipientX.style.display = "none";
        recipientY.style.display = "flex";
        recipientZ.style.display = "none";
    } else if (feeCategory === 150) {
        recipientX.style.display = "none";
        recipientY.style.display = "none";
        recipientZ.style.display = "flex";
    }
    localStorage.setItem('fee0', feeCategory);
}

/* 覆蓋掉原本的商品金額 */
var result5 = localStorage.getItem('result5');
var result6 = document.getElementById("result6");
var x1 = result5;
result6.textContent = result5;

/* 覆蓋掉原本的運費 */
function row5() {

    // 獲得現在的運費金額
    var fee0 = localStorage.getItem('fee0');
    fee0 = parseInt(fee0);

    // 獲得免運門檻數字
    var fee1 = document.getElementById("fee1");
    var fee1 = parseInt(fee1.value);
    var fee2;

    // 判斷商品金額是否超過免運門檻，計算出運費
    if (result5 >= fee1) {
        fee2 = 0;
    } else {
        fee2 = fee0;
    }

    // 覆蓋掉原本的運費
    var result7 = document.getElementById("result7");
    result7.textContent = fee2;

    // 用於cartstep3的運費結算
    localStorage.setItem('DE3str', fee2);
}

/* 計算運費合併商品總金額：應付金額 */
function row6() {
    // 獲得現在的運費金額
    var fee0 = localStorage.getItem('fee0');
    fee0 = parseInt(fee0);
    console.log(`fee0 of row6 = ${fee0}`);
    

    // 獲得免運門檻數字
    var fee1 = document.getElementById("fee1");
    var fee1 = parseInt(fee1.value);
    var fee2;
    var totalmomey;

    // 判斷商品金額是否超過免運門檻，計算出運費
    if (result5 >= fee1) {
        fee2 = 0;
    } else {
        fee2 = fee0;
    }

    // 計算出最終金額
    var x2 = parseInt(x1);
    var y1 = parseInt(fee2);
    totalmomey = x2 + y1;
    var result8 = document.getElementById("result8");
    result8.textContent = totalmomey;
    localStorage.setItem('DE4str', totalmomey);
}

/* 在一開始載入頁面，就計算運費與最終金額 */
window.onload = function () {
    // 獲得免運門檻數字
    var fee1 = document.getElementById("fee1");
    var fee1 = parseInt(fee1.value);
    let fee2;
    let totalmomey;

    // 判斷商品金額是否超過免運門檻，計算出運費
    if (result5 >= fee1) {
        fee2 = 0;
    } else {
        fee2 = 80;
    }

    // 計算出最終金額
    let x2 = parseInt(x1);
    let y1 = parseInt(fee2);
    totalmomey = x2 + y1;
    let result8 = document.getElementById("result8");
    result8.textContent = totalmomey;
};