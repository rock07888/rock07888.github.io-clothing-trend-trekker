var mylock;
var jp = document.querySelector('.jp');
var kor = document.querySelector('.kor');
var too = document.querySelector('.too');
var str = document.querySelector('.str');
var jpQ = document.querySelector('.jpQ');
var korQ = document.querySelector('.korQ');
var strQ = document.querySelector('.strQ');
var tooQ = document.querySelector('.tooQ');
var jpA = document.querySelector('.jpA');
var korA = document.querySelector('.korA');
var strA = document.querySelector('.strA');
var tooA = document.querySelector('.tooA');

function clickjp() {
    jp.querySelector("img").setAttribute("src", "../images/askai/jpstyle-click.svg");
    kor.querySelector("img").setAttribute("src", "../images/askai/korstyle.svg");
    too.querySelector("img").setAttribute("src", "../images/askai/toostyle.svg");
    str.querySelector("img").setAttribute("src", "../images/askai/strstyle.svg");
    jpQ.style.display = "flex";
    jpA.style.display = "flex";
    korQ.style.display = "none";
    korA.style.display = "none";
    tooQ.style.display = "none";
    tooA.style.display = "none";
    strQ.style.display = "none";
    strA.style.display = "none";
}

function clickkor() {
    jp.querySelector("img").setAttribute("src", "../images/askai/jpstyle.svg");
    kor.querySelector("img").setAttribute("src", "../images/askai/korstyle-click.svg");
    too.querySelector("img").setAttribute("src", "../images/askai/toostyle.svg");
    str.querySelector("img").setAttribute("src", "../images/askai/strstyle.svg");
    korQ.style.display = "flex";
    korA.style.display = "flex";
    jpQ.style.display = "none";
    jpA.style.display = "none";
    tooQ.style.display = "none";
    tooA.style.display = "none";
    strQ.style.display = "none";
    strA.style.display = "none";
}

function clicktoo() {
    jp.querySelector("img").setAttribute("src", "../images/askai/jpstyle.svg");
    kor.querySelector("img").setAttribute("src", "../images/askai/korstyle.svg");
    too.querySelector("img").setAttribute("src", "../images/askai/toostyle-click.svg");
    str.querySelector("img").setAttribute("src", "../images/askai/strstyle.svg");
    tooQ.style.display = "flex";
    tooA.style.display = "flex";
    jpQ.style.display = "none";
    jpA.style.display = "none";
    korQ.style.display = "none";
    korA.style.display = "none";
    strQ.style.display = "none";
    strA.style.display = "none";
}

function clickstr() {
    jp.querySelector("img").setAttribute("src", "../images/askai/jpstyle.svg");
    kor.querySelector("img").setAttribute("src", "../images/askai/korstyle.svg");
    too.querySelector("img").setAttribute("src", "../images/askai/toostyle.svg");
    str.querySelector("img").setAttribute("src", "../images/askai/strstyle-click.svg");
    strQ.style.display = "flex";
    strA.style.display = "flex";
    jpQ.style.display = "none";
    jpA.style.display = "none";
    korQ.style.display = "none";
    korA.style.display = "none";
    tooQ.style.display = "none";
    tooA.style.display = "none";
}

var jpcontainer = document.getElementById("jp-container");
var korcontainer = document.getElementById("kor-container");
var toocontainer = document.getElementById("too-container");
var strcontainer = document.getElementById("str-container");

var jptext = "打造日系穿搭的關鍵在於簡約、自然和個性。/以下是一些日系穿搭的教學建議，幫助你輕鬆擁有這種時尚風格：//1.選擇基本單品：日系穿搭強調簡約，選擇基本的單品是關鍵。例如，選擇白色T恤或襯衫，並搭配寬腿褲或牛仔褲。這些基本的單品能夠讓你輕鬆打造出簡約而時尚的造型。//2.選擇中性色調：日系穿搭通常選擇中性色調，如白色、灰色、米色和黑色。這些色彩能夠展現出自然和純淨的美感，同時也非常容易搭配其他單品。//3.強調質感：日系穿搭注重質感，選擇具有柔軟質地和細節簡約的衣物。例如，選擇棉質或麻質的衣物，並避免過於花俏的圖案或裝飾。//4.層次感和配件：營造層次感是日系穿搭的一個重要元素。你可以在穿著上加入外套或薄卡褲，並選擇簡潔的配件來提升整體造型的亮點。//5.選擇舒適的鞋子：日系穿搭強調舒適，所以選擇一雙平底鞋或休閒鞋是理想的選擇。例如，帆布鞋、皮質平底鞋或厚底運動鞋都是不錯的選擇。//總之，打造日系穿搭的秘訣是保持簡約、自然和個性。選擇基本單品、中性色調、強調質感的衣物，注重層次感和配件的搭配，以及舒適的鞋子，你就能輕鬆擁有時尚又充滿個性的日系穿搭風格。";
var kortext = "韓系穿搭是一種充滿青春活力和時尚感的風格，融合了韓國時尚的精髓和個人風格。/以下是一些韓系穿搭的教學建議，幫助你展現出時尚的魅力：//1.輕盈、清爽的衣物：韓系穿搭通常選擇輕盈、清爽的衣物，如襯衫、連衣裙和寬鬆褲。選擇質地柔軟的面料，如棉質或麻質，這樣能夠營造出自然和舒適的感覺。//2.顏色的選擇：韓系穿搭注重顏色的搭配，通常選擇明亮、柔和的色彩，如粉色、淺藍色、淡黃色等。選擇適合你膚色和氣質的顏色，讓你的穿搭更加鮮明和時尚。//3.層次感和細節：韓系穿搭非常注重層次感和細節的運用。你可以在穿著上加入外套、開衫或襯衫，並注重襯衫的褶皺或裙子的蕾絲等細節設計。這樣能夠提升整體造型的豐富度和時尚感。//4.配件的搭配：適當的配件能夠為韓系穿搭增添亮點。選擇一些細緻的項鍊、手鍊或耳環，以及小巧的手提包或背包，這些配件能夠提升整體造型的時尚度和個性。//總之，韓系穿搭是一種時尚、青春和個性的風格。通過選擇輕盈、清爽的衣物，注重顏色的搭配，創造層次感和細節，以及適當的配件搭配，你可以展現出韓系穿搭獨特的魅力。/這種風格適合在各種場合中展現，無論是日常生活還是特殊場合，都能讓你散發出時尚感和自信。";
var tootext = "工裝穿搭是一種充滿實用性和粗獷風格的時尚選擇。/以下是一些工裝穿搭的教學建議，幫助你展現出強而有力的風格：//1.選擇耐穿的衣物：工裝穿搭強調耐穿和實用，選擇具有高品質的衣物是關鍵。選擇一件耐磨的牛仔褲、帆布工裝褲或工裝外套，這些衣物能夠承受日常工作的磨損，同時展現出堅韌的風格。//2.注重細節和功能性：工裝穿搭通常注重細節和功能性的設計。選擇具有實用口袋、拉鏈或按鈕等細節的衣物，這些細節不僅能夠增加造型的亮點，還能提供更多的功能性。//3.配件的選擇：工裝穿搭也可以搭配一些適合的配件，例如帽子、手套或工裝靴。這些配件不僅能夠增加穿搭的完整度，還能提供額外的保護和實用性。//4.中性色調的選擇：工裝穿搭通常選擇中性色調，如軍綠色、卡其色、灰色和深藍色。這些色彩既耐看又容易搭配，能夠展現出工裝風格的獨特魅力。//總之，工裝穿搭是一種實用且具有粗獷風格的時尚選擇。通過選擇耐穿的衣物、注重細節和功能性、選擇適合的配件和中性色調，你可以打造出強而有力的工裝穿搭風格，展現出自信和堅韌的氣質。/無論是在工作場合還是休閒時光，這種風格都能讓你脫穎而出。";
var strtext = "街頭穿搭是一種充滿個性和自由的風格，融合了時尚和街頭文化的元素。/以下是一些街頭穿搭的教學建議，幫助你展現獨特的風格：//1.混搭各種風格：街頭穿搭強調大膽和創新，你可以嘗試混搭不同風格的單品。例如，搭配一件酷帥的皮衣和一條寬鬆的休閒褲，或是將運動風格的衣物搭配經典的牛仔褲。這種混搭風格能夠展現你的個性和時尚品味。//2.選擇鮮明的顏色和圖案：街頭穿搭常常使用鮮豔的顏色和引人注目的圖案，這可以讓你在人群中脫穎而出。選擇一件有趣的圖案T恤、印花外套或顏色鮮明的鞋子，讓你的穿搭更具活力和魅力。//3.配件的重要性：街頭穿搭非常注重配件的選擇和搭配。你可以選擇戴上帽子、墨鏡、頸巾或一些有趣的飾品，這些配件能夠為你的穿搭增添個性和時尚感。//4.注重層次和質感：街頭穿搭通常強調層次感和質感的選擇。你可以在穿著上加入外套、開衫或者襯衫，創造出豐富的視覺效果。//5.選擇質地細緻、具有質感的衣物，如絨面或牛仔布料，能夠讓你的穿搭更加出色。//總之，街頭穿搭是一種自由、創新且充滿個性的風格。通過混搭各種風格、選擇鮮明的顏色和圖案、重視配件的選擇、注重層次感和質感，你可以打造出獨特且時尚的街頭穿搭風格，散發出自信和個性的魅力。";

var index = 0;

/* jp */
function showjpletter() {
    var letter = jptext[index];

    if (letter === '/') {
        jpcontainer.innerHTML += "<br>";
    } else {
        jpcontainer.innerHTML += letter;
    }

    index++;

    var cursor = document.createElement("span");
    cursor.classList.add("cursor");

    if (index < jptext.length) {
        jpcontainer.appendChild(cursor);
        jpcontainer.style.width = jpcontainer.scrollWidth + "px";
        mylock = "close";
        setTimeout(function() {
            cursor.style.display = "none";
        }, 50);
        setTimeout(showjpletter, 50);
    } else {
        cursor.style.display = "none";
        mylock = "open";
    }
}

var jpbuttom = document.getElementById("jp");
jpbuttom.addEventListener("click", function () {
    if (mylock === "open") {
        jpcontainer.textContent = "";
        index = 0;
        showjpletter();
        clickjp();
    }
});

/* kor */
function showkorletter() {
    var letter = kortext[index];

    if (letter === '/') {
        korcontainer.innerHTML += "<br>";
    } else {
        korcontainer.innerHTML += letter;
    }

    index++;

    var cursor = document.createElement("span");
    cursor.classList.add("cursor");

    if (index < kortext.length) {
        korcontainer.appendChild(cursor);
        korcontainer.style.width = korcontainer.scrollWidth + "px";
        mylock = "close";
        setTimeout(function() {
            cursor.style.display = "none";
        }, 50);
        setTimeout(showkorletter, 50);
    } else {
        cursor.style.display = "none";
        mylock = "open";
    }
}

var korbuttom = document.getElementById("kor");
korbuttom.addEventListener("click", function () {
    if (mylock === "open") {
        korcontainer.textContent = "";
        index = 0;
        showkorletter();
        clickkor();
    }
});

window.onload = function () {
    mylock = "open";
    showkorletter();
    clickkor();
}

/* too */
function showtooletter() {
    var letter = tootext[index];

    if (letter === '/') {
        toocontainer.innerHTML += "<br>";
    } else {
        toocontainer.innerHTML += letter;
    }

    index++;

    var cursor = document.createElement("span");
    cursor.classList.add("cursor");

    if (index < tootext.length) {
        toocontainer.appendChild(cursor);
        toocontainer.style.width = toocontainer.scrollWidth + "px";
        mylock = "close";
        setTimeout(function() {
            cursor.style.display = "none";
        }, 50);
        setTimeout(showtooletter, 50);
    } else {
        cursor.style.display = "none";
        mylock = "open";
    }
}

var toobuttom = document.getElementById("too");
toobuttom.addEventListener("click", function () {
    if (mylock === "open") {
        toocontainer.textContent = "";
        index = 0;
        showtooletter();
        clicktoo();
    }
});


/* str */
function showstrletter() {
    var letter = strtext[index];

    if (letter === '/') {
        strcontainer.innerHTML += "<br>";
    } else {
        strcontainer.innerHTML += letter;
    }

    index++;

    var cursor = document.createElement("span");
    cursor.classList.add("cursor");

    if (index < strtext.length) {
        strcontainer.appendChild(cursor);
        strcontainer.style.width = strcontainer.scrollWidth + "px";
        mylock = "close";
        setTimeout(function() {
            cursor.style.display = "none";
        }, 50);
        setTimeout(showstrletter, 50);
    } else {
        cursor.style.display = "none";
        mylock = "open";
    }
}

var strbuttom = document.getElementById("str");
strbuttom.addEventListener("click", function () {
    if (mylock === "open") {
        strcontainer.textContent = "";
        index = 0;
        showstrletter();
        clickstr();
    }
});