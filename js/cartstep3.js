/* 在一開始載入頁面，更新資訊 */
window.onload = function () {
    // DA1：依據今天日期，更新訂單成立日期
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (day < 10) {
        day = '0' + day;
    }
    var dateStr = '成立訂單日期：' + year + '-' + month + '-' + day;
    var DA1 = document.getElementById("DA1");
    DA1.textContent = dateStr;

    // DB1、DB2：更新配送資訊
    var fee0 = localStorage.getItem('fee0');
    fee0 = parseInt(fee0);
    var DB1 = document.getElementById("DB1");
    var DB2 = document.getElementById("DB2");
    let DB1str1 = '付款方式：貨到付款';
    let DB1str3 = '付款方式：線上支付';
    let DB2str1 = '配送方式：7-11 超商取貨 松德門市';
    let DB2str2 = '配送方式：全家 超商取貨 松慈門市';
    let DB2str3 = '配送方式：新竹物流';
    if (fee0 === 80) {
        DB1.textContent = DB1str1;
        DB2.textContent = DB2str1;
    }
    if (fee0 === 70) {
        DB1.textContent = DB1str1;
        DB2.textContent = DB2str2;
    }
    if (fee0 === 150) {
        DB1.textContent = DB1str3;
        DB2.textContent = DB2str3;
    }

    // DD1：更新發票總類
    var DD1str = localStorage.getItem('DD1str');
    DD1str = parseInt(DD1str);
    var DD2str = localStorage.getItem('DD2str');
    DD2str = parseInt(DD2str);
    var DD3str = localStorage.getItem('DD3str');
    DD3str = parseInt(DD3str);
    var DD4str = localStorage.getItem('DD4str');
    DD4str = parseInt(DD4str);
    var DD1 = document.getElementById("DD1");
    let DD1str1 = '種類：傳統紙本發票';
    let DD1str2 = '種類：捐贈發票';
    let DD1str3 = '種類：手機載具';
    let DD1str4 = '種類：公司統編';

    if (DD1str === 1) {
        DD1.textContent = DD1str1;
    }
    if (DD2str === 1) {
        DD1.textContent = DD1str2;
    }
    if (DD3str === 1) {
        DD1.textContent = DD1str3;
    }
    if (DD4str === 1) {
        DD1.textContent = DD1str4;
    }

    // DCB1與DCB2：商品尺寸
    var DCB1str = localStorage.getItem('DCB1str');
    var DCB1 = document.getElementById("DCB1");
    let DCB1A = "尺寸：" + DCB1str;
    DCB1.textContent = DCB1A;

    var DCB2str = localStorage.getItem('DCB2str');
    var DCB2 = document.getElementById("DCB2");
    let DCB2A = "尺寸：" + DCB2str;
    DCB2.textContent = DCB2A;

    // DCC1與DCC2：商品顏色
    // DCA1與DCA2：商品圖片
    var DCC1str = localStorage.getItem('DCC1str');
    var DCC2 = document.getElementById("DCC2");
    var DCA2 = document.getElementById("DCA2");
    let DCC1A9 = "顏色：黑白格紋";
    let DCC1B9 = "顏色：灰綠格紋";
    let DCC1C9 = "顏色：灰藍格紋";
    if (DCC1str === "A9" ){
        DCC2.textContent = DCC1A9;
        DCA2.innerHTML = '<img src="./images/myCollection/Freak.svg">';
    }
    if (DCC1str === "B9" ){
        DCC2.textContent = DCC1B9;
        DCA2.innerHTML = '<img src="./images/myCollection/freak_gray.svg">';
    }
    if (DCC1str === "C9" ){
        DCC2.textContent = DCC1C9;
        DCA2.innerHTML = '<img src="./images/myCollection/freak_blue.svg">';
    }

    var DCC2str = localStorage.getItem('DCC2str');
    var DCC1 = document.getElementById("DCC1");
    var DCA1 = document.getElementById("DCA1");
    let DCC2D9 = "顏色：白";
    let DCC2E9 = "顏色：灰";
    let DCC2F9 = "顏色：黑";
    let DCC2G9 = "顏色：綠";
    let DCC2H9 = "顏色：黃";
    if (DCC2str === "D9" ){
        DCC1.textContent = DCC2D9;
        DCA1.innerHTML = '<img src="./images/myCollection/Nautica_white.svg">';
    }
    if (DCC2str === "E9" ){
        DCC1.textContent = DCC2E9;
        DCA1.innerHTML = '<img src="./images/myCollection/NAUITCA_gray.svg">';
    }
    if (DCC2str === "F9" ){
        DCC1.textContent = DCC2F9;
        DCA1.innerHTML = '<img src="./images/myCollection/NAUITCA_black.svg">';
    }
    if (DCC2str === "G9" ){
        DCC1.textContent = DCC2G9;
        DCA1.innerHTML = '<img src="./images/myCollection/NAUITCA_green.svg">';
    }
    if (DCC2str === "H9" ){
        DCC1.textContent = DCC2H9;
        DCA1.innerHTML = '<img src="./images/myCollection/NAUITCA_yellow.svg">';
    }

    // DCD1與DCD2：商品件數
    var DCD1str = localStorage.getItem('DCD1str');
    DCD1str = parseInt(DCD1str);
    var DCD1 = document.getElementById("DCD1");
    var DCD2str = localStorage.getItem('DCD2str');
    DCD2str = parseInt(DCD2str);
    var DCD2 = document.getElementById("DCD2");
    DCD1.textContent = DCD2str;
    DCD2.textContent = DCD1str;


    // DE1：商品總價
    var DE1str = localStorage.getItem('DE1str');
    DE1str = parseInt(DE1str);
    var DE1 = document.getElementById("DE1");
    DE1.textContent = DE1str;

    // DE2：優惠折扣
    var DE2str = localStorage.getItem('DE2str');
    DE2str = parseInt(DE2str);
    var DE2 = document.getElementById("DE2");
    DE2.textContent = DE2str;

    // DE3：運費結算
    var DE3str = localStorage.getItem('DE3str');
    DE3str = parseInt(DE3str);
    var DE3 = document.getElementById("DE3");
    DE3.textContent = DE3str;

    // DE4：訂單總金額
    var DE4str = localStorage.getItem('DE4str');
    DE4str = parseInt(DE4str);
    var DE4 = document.getElementById("DE4");
    DE4.textContent = DE4str;

    // DC1、DC2：若商品被刪除，將不會出現在最後清單
    var DC1str = localStorage.getItem('DC1str');
    DC1str = parseInt(DC1str);
    console.log(`DC1str = ${DC1str}`);
    var DC2str = localStorage.getItem('DC2str');
    DC2str = parseInt(DC2str);
    console.log(`DC2str = ${DC2str}`);
    var DC1 = document.getElementById("DC1");
    var DC2 = document.getElementById("DC2");
    if ( DC2str === 222){
        DC2.style.display ="none";
    }
    if ( DC1str === 111){
        DC1.style.display ="none";
    }
}