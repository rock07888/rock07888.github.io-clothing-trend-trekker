$(".descbar a").click(function (event) {
    event.preventDefault()
    var btn = $(this).attr("href");
    var pos = $(btn).offset();
    $("html,body").stop().animate({ scrollTop: pos.top }, 1000);
});



var divA = document.querySelector(".prodcut-introduce-detail");
var divAA = document.querySelector('.descbar-1');
var divB = document.getElementById("review");
var divBB = document.querySelector('.descbar-2');
var divC = document.getElementById("payment");
var divCC = document.querySelector('.descbar-3');
function introduce() {
    divAA.style.color = '#003060';
    divAA.style.borderBottom = '4px solid #3493fb';
    divBB.style.color = '#7a7a7a';
    divBB.style.borderBottom = '4px solid #EDEDED';
    divCC.style.color = '#7a7a7a';
    divCC.style.borderBottom = '4px solid #EDEDED';
    if (divA.style.display === "none") {
        divA.style.display = "block";
        divB.style.display = "none";
        divC.style.display = "none";
    }
    if (divA.style.display === "block") {
        divA.style.display = "block";
        divB.style.display = "none";
        divC.style.display = "none";
    }
}
function review() {
    divBB.style.color = '#003060';
    divBB.style.borderBottom = '4px solid #3493fb';
    divAA.style.color = '#7a7a7a';
    divAA.style.borderBottom = '4px solid #EDEDED';
    divCC.style.color = '#7a7a7a';
    divCC.style.borderBottom = '4px solid #EDEDED';
    if (divB.style.display === "none") {
        divB.style.display = "block";
        divA.style.display = "none";
        divC.style.display = "none";
    }
    if (divB.style.display === "block") {
        divB.style.display = "block";
        divA.style.display = "none";
        divC.style.display = "none";
    }
}
function payment() {
    divCC.style.color = '#003060';
    divCC.style.borderBottom = '4px solid #3493fb';
    divAA.style.color = '#7a7a7a';
    divAA.style.borderBottom = '4px solid #EDEDED';
    divBB.style.color = '#7a7a7a';
    divBB.style.borderBottom = '4px solid #EDEDED';
    if (divC.style.display === "none") {
        divC.style.display = "block";
        divB.style.display = "none";
        divA.style.display = "none";
    }
    if (divC.style.display === "block") {
        divC.style.display = "block";
        divA.style.display = "none";
        divB.style.display = "none";
    }
}

function togglehwDivs() {
    // 取得每個評論
    var reviewdiv = document.getElementsByClassName("review_example");
    // 取得身高選項
    var heightfilterSelect = document.getElementById('height_filter_dropdown').value;
    // 取得體重選項
    var weightfilterSelect = document.getElementById('weight_filter_dropdown').value;

    // var A1 = 65;
    // var A2 = 70;
    for (var i = 0; i < reviewdiv.length; i++) {
        var hweightdiv = reviewdiv[i]
        var weight = parseInt(reviewdiv[i].getAttribute("data-weight"));
        var height = parseInt(reviewdiv[i].getAttribute("data-height"));
        hweightdiv.style.display = 'block'
        /*  if (weightfilterSelect === 'wall' || heightfilterSelect === "hall") {
             // hweightdiv.classList.remove('hide')
             hweightdiv.style.display = 'block'
         } */
        if (
            (heightfilterSelect === 'ha' && (height < 170 || height > 175)) ||
            (heightfilterSelect === 'hb' && (height < 176 || height > 180)) ||
            (heightfilterSelect === 'hc' && (height < 180)) ||
            (weightfilterSelect === 'wa' && (weight < 60 || weight > 65)) ||
            (weightfilterSelect === 'wb' && (weight < 66 || weight > 70)) ||
            (weightfilterSelect === 'wc' && (weight < 71 || weight > 80))

        ) {
            // hweightdiv.classList.remove('hide');
            hweightdiv.style.display = 'none'
            console.log(hweightdiv.classList)
        } else {
            // hweightdiv.classList.add('hide');

        }


    }
    // 獲取欄格陣列的參數
    var gridReview = Array.from(document.getElementsByClassName('review_example'));
    // 獲取依星等排序的按鈕參數
    var ratingFilter = document.getElementById("rating_filter");
    // 獲取依銷量排序的按鈕參數
    var timeFilter = document.getElementById("time_filter");
    // 透過單選按鈕選擇要啟用「依星等排序」，抑或「依銷量排序」
    if (ratingFilter.checked) {
        byRating();
    } else if (timeFilter.checked) {
        byTime();
    }
    // 「依評分排序」的function本體
    function byRating() {
        gridReview.sort(function (a, b) {
            var ratingA = parseInt(a.getAttribute('data-rating'));
            var ratingB = parseInt(b.getAttribute('data-rating'));
            return ratingB - ratingA;
        });
        var reviewGridContainer = document.getElementsByClassName('customer_review')[0];
        gridReview.forEach(function (product) {
            reviewGridContainer.appendChild(product);
        });
    };
    // 「依時間排序」的function本體
    function byTime() {
        gridReview.sort(function (a, b) {
            var ratingA = parseInt(a.getAttribute('data-date'));
            var ratingB = parseInt(b.getAttribute('data-date'));
            return ratingA - ratingB;
        });
        var reviewGridContainer = document.getElementsByClassName('customer_review')[0];
        gridReview.forEach(function (product) {
            reviewGridContainer.appendChild(product);
        });
    }
}
