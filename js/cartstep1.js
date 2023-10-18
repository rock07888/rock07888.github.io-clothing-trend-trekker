/* 數量選擇器 */
function decrement1() {
    var input = document.getElementById('quantityInput1');
    var value = parseInt(input.value);
    if (value = 0) {
        input.value = 1;
    } else if (value = 1) {
        input.value = 1;
    } else if (value > 1) {
        input.value = value - 1;
    }
}

function increment1() {
    var input = document.getElementById('quantityInput1');
    var value = parseInt(input.value);
    if (value < 9) {
        input.value = value + 1;
    }
}

function decrement2() {
    var input = document.getElementById('quantityInput2');
    var value = parseInt(input.value);
    if (value = 0) {
        input.value = 1;
    } else if (value = 1) {
        input.value = 1;
    } else if (value > 1) {
        input.value = value - 1;
    }
}

function increment2() {
    var input = document.getElementById('quantityInput2');
    var value = parseInt(input.value);
    if (value < 9) {
        input.value = value + 1;
    }
}

/* 垃圾桶刪除鍵 */
var p1 = document.getElementById('elementA');
var p2 = document.getElementById('elementB');

function closeP1() {
    p1.style.display = 'none';
    if (p1.style.display === "none") {
    }
}

function closeP2() {
    p2.style.display = 'none';
    if (p2.style.display === "none") {
    }
}

/* 全選勾選欄 */
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var selectAllCheckbox = document.getElementById('selectAll');
function toggleCheckboxes() {
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
    }
}

/* 透過全選勾選欄刪除 */
function toggleCheckboxes() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var selectAllCheckbox = document.getElementById('selectAll');

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = selectAllCheckbox.checked;
    }
}

function hideSelectedElements() {
    var option1Checkbox = document.getElementById('option1');
    var option2Checkbox = document.getElementById('option2');
    var elementA = document.getElementById('elementA');
    var elementB = document.getElementById('elementB');

    if (option1Checkbox.checked && option2Checkbox.checked) {
        elementA.style.display = "none"
        elementB.style.display = "none"
        alert("購物車內無商品。\n回到首頁購物去吧！");
        window.location.href = "index.html";
    } else if (option1Checkbox.checked) {
        elementA.style.display = "none"
        elementB.style.display = "flex"
    } else if (option2Checkbox.checked) {
        elementA.style.display = "flex"
        elementB.style.display = "none"
    } else {
        elementA.style.display = "flex"
        elementB.style.display = "flex"
    }
}

/* 優惠券合併數量選擇器：第一個商品 */
function changeParameter1() {

    // 優惠券選擇的下拉式選單，造成唯一的首件商品金額
    var dropdown = document.getElementById("coupon1");
    var selectedValue = parseInt(dropdown.value);

    // 數字選擇器選擇的商品件數
    var quantityInput1 = document.getElementById("quantityInput1");
    var numberValue = parseInt(quantityInput1.value);

    // 計算出小計
    var result = "";
    if (numberValue === 1) {
        result = selectedValue;
    } else if (numberValue > 1) {
        result = selectedValue + (numberValue - 1) * 990;
    }

    // 覆蓋掉原本小計的值
    var resultElement = document.getElementById("result1");
    resultElement.textContent = result;
}

/* 優惠券合併數量選擇器：第二個商品 */
function changeParameter2() {

    // 優惠券選擇的下拉式選單，造成唯一的首件商品金額
    var dropdown = document.getElementById("coupon2");
    var selectedValue = parseInt(dropdown.value);

    // 數字選擇器選擇的商品件數
    var quantityInput2 = document.getElementById("quantityInput2");
    var numberValue = parseInt(quantityInput2.value);

    // 計算出小計
    var result = "";
    if (numberValue === 1) {
        result = selectedValue;
    } else if (numberValue > 1) {
        result = selectedValue + (numberValue - 1) * 790;
    }

    // 覆蓋掉原本小計的值
    var resultElement = document.getElementById("result2");
    resultElement.textContent = result;
}

/* 優惠券合併數量選擇器：總結算 */
function row4() {
    // 優惠券選擇的下拉式選單，造成唯一的首件商品金額
    var dropdown1 = document.getElementById("coupon1");
    var selectedValue1 = parseInt(dropdown1.value);
    var dropdown2 = document.getElementById("coupon2");
    var selectedValue2 = parseInt(dropdown2.value);

    // 數字選擇器選擇的商品件數
    var quantityInput1 = document.getElementById("quantityInput1");
    var numberValue1 = parseInt(quantityInput1.value);
    var quantityInput2 = document.getElementById("quantityInput2");
    var numberValue2 = parseInt(quantityInput2.value);

    // 用於cartstep3的商品件數
    localStorage.setItem('DCD1str', numberValue1);
    localStorage.setItem('DCD2str', numberValue2);


    // 考慮刪除鍵造成的金額變化(總金額)
    var elementA = document.getElementById('elementA');
    var elementB = document.getElementById('elementB');

    if (elementA.style.display === "none") {
        numberValue1 = 0;
    }
    if (elementB.style.display === "none") {
        numberValue2 = 0;
    }

    // 顯示不含折扣券的商品總金額
    var result3 = "";
    result3 = (numberValue1) * 990 + (numberValue2) * 790;
    var ans3 = document.getElementById("result3");
    ans3.textContent = result3;

    // 顯示折扣券折扣掉的金額
    var result4 = "";

    // 考慮刪除鍵造成的金額變化(折扣金額)
    result4 = (990 - selectedValue1) + (790 - selectedValue2);
    if (elementA.style.display === "none") {
        result4 = (790 - selectedValue2);
    }
    if (elementB.style.display === "none") {
        result4 = (990 - selectedValue1);
    }
    if ((elementA.style.display === "none") && (elementB.style.display === "none")) {
        result4 = 0;
    }

    var ans4 = document.getElementById("result4");
    ans4.textContent = result4;

    // 最後應支付的金額
    var result5 = (result3 - result4);
    var ans5 = document.getElementById("result5");
    ans5.textContent = result5;
    localStorage.setItem('result5', result5);

    // 用於cartstep3的商品總價
    var DE1str = (numberValue1) * 990 + (numberValue2) * 790;
    localStorage.setItem('DE1str', DE1str);

    // 用於cartstep3的優惠折扣
    localStorage.setItem('DE2str', result4);

    // 用於cartstep3的刪除區塊
    var XA = document.getElementById('elementA');
    var XB = document.getElementById('elementB');
    var DC1str;
    var DC2str;
    if (XA.style.display === "none"){
        DC1str = 1;
        DC2str = 222;
    }
    if (XB.style.display === "none"){
        DC1str = 111;
        DC2str = 2;
    }
    localStorage.setItem('DC1str', DC1str);
    localStorage.setItem('DC2str', DC2str);
}

/* 透過下拉式選單換圖片1 */
function changeImage1() {
    var selectBox1 = document.getElementById("imageSelect1");
    var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
    var displayImage1 = document.getElementById("displayImage1");
    displayImage1.src = selectedValue1;
}

/* 透過下拉式選單換圖片2 */
function changeImage2() {
    var selectBox2 = document.getElementById("imageSelect2");
    var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
    var displayImage2 = document.getElementById("displayImage2");
    displayImage2.src = selectedValue2;
}

// 用於cartstep3的 DCB：商品尺寸
function DCB() {
    var DCB1 = document.getElementById("DCB1");
    DCB1 = DCB1.value;
    localStorage.setItem('DCB1str', DCB1);

    var DCB2 = document.getElementById("DCB2");
    DCB2 = DCB2.value;
    localStorage.setItem('DCB2str', DCB2);
}

// 用於cartstep3的 DCC：商品尺寸
function DCC() {
    var DCC1 = document.getElementById("imageSelect1");
    DCC1 = DCC1.options[DCC1.selectedIndex];
    var DCC1str = DCC1.getAttribute("data-value");
    localStorage.setItem('DCC1str', DCC1str);

    var DCC2 = document.getElementById("imageSelect2");
    DCC2 = DCC2.options[DCC2.selectedIndex];
    var DCC2str = DCC2.getAttribute("data-value");
    console.log(`DCC2str = ${DCC2str}`);
    localStorage.setItem('DCC2str', DCC2str);
}