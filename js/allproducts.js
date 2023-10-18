function applyFilter() {
    /* ---------- 以下有關於限定區間 ---------- */
    // 取得所有帶有 class 為 "gridProduct" 的 div 元素
    var divs = document.getElementsByClassName("gridProduct");
    // 取得尺寸
    var sizeValue = document.getElementById('filter3').value;
    // 取得最小金額
    var minPrice = parseInt(document.getElementById("filter4").value);
    console.log(`minPrice = ${minPrice}`);
    // 取得最大金額
    var maxPrice = parseInt(document.getElementById("filter5").value);
    console.log(`maxPrice = ${maxPrice}`);
    // 迭代所有 div 元素
    for (var i = 0; i < divs.length; i++) {
        var sizediv = divs[i];
        var price = parseInt(divs[i].getAttribute("data-price"));
        var dataS = sizediv.getAttribute('data-s');
        var dataM = sizediv.getAttribute('data-m');
        var dataL = sizediv.getAttribute('data-l');
        // 先篩選出限定的尺寸
        if (sizeValue === 'all') {
            sizediv.classList.remove('hide');
        } else if (
            (sizeValue === 's' && dataS === 's') ||
            (sizeValue === 'm' && dataM === 'm') ||
            (sizeValue === 'l' && dataL === 'l')
        ) {
            sizediv.classList.remove('hide');
        } else {
            sizediv.classList.add('hide');
        }
        // 再篩選出限定的價格區間
        if ((price < minPrice) || (price > maxPrice)) {
            divs[i].style.display = "none";
        }
    }
    /* ---------- 以下有關於排列順序 ---------- */
    // 獲取欄格陣列的參數
    var gridProducts = Array.from(document.getElementsByClassName('gridProduct'));
    // 獲取依星等排序的按鈕參數
    var filter1 = document.getElementById("filter1");
    // 獲取依銷量排序的按鈕參數
    var filter2 = document.getElementById("filter2");
    // 透過單選按鈕選擇要啟用「依星等排序」，抑或「依銷量排序」
    if (filter1.checked) {
        byRating();
    } else if (filter2.checked) {
        bySales();
    }
    // 「依星等排序」的function本體
    function byRating() {
        gridProducts.sort(function (a, b) {
            var ratingA = parseInt(a.getAttribute('data-rating'));
            var ratingB = parseInt(b.getAttribute('data-rating'));
            return ratingB - ratingA;
        });
        var gridContainer = document.getElementsByClassName('product-container')[0];
        gridProducts.forEach(function (product) {
            gridContainer.appendChild(product);
        });
    };
    // 「依銷量排序」的function本體
    function bySales() {
        gridProducts.sort(function (a, b) {
            var ratingA = parseInt(a.getAttribute('data-sales'));
            var ratingB = parseInt(b.getAttribute('data-sales'));
            return ratingB - ratingA;
        });
        var gridContainer = document.getElementsByClassName('product-container')[0];
        gridProducts.forEach(function (product) {
            gridContainer.appendChild(product);
        });
    }
}