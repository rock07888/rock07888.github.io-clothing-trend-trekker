
window.onload = function () {

    var divs = document.getElementsByClassName("gridProduct");

    // var x;
    // var arr1 = [0, 0, 0, 0, 0, 0, 0, 0];
    // for (x = 0; x < arr1.length; x++) {
    //     const j = Math.random() * 16 + 1;
    //     arr1[x] = Math.floor(j);
    // }

    var arr1 = [];
    for (var i = 1; i <= 16; i++) {
        arr1.push(i);
    }

    var arr2 = [];
    while (arr2.length < 8) {
        var randomIndex = Math.floor(Math.random() * arr1.length);
        var randomNum = arr1[randomIndex];

        arr2.push(randomNum);
        arr1.splice(randomIndex, 1);
    }

    var g0 = parseInt(arr2[0]);
    var g1 = parseInt(arr2[1]);
    var g2 = parseInt(arr2[2]);
    var g3 = parseInt(arr2[3]);
    var g4 = parseInt(arr2[4]);
    var g5 = parseInt(arr2[5]);
    var g6 = parseInt(arr2[6]);
    var g7 = parseInt(arr2[7]);
    console.log(g0);
    console.log(g1);
    console.log(g2);
    console.log(g3);
    console.log(g4);
    console.log(g5);
    console.log(g6);
    console.log(g7);
    console.log(divs.length);

    for (var i = 0; i < divs.length; i++) {
        var datarandom = parseInt(divs[i].getAttribute("data-random"));

        if ((datarandom != g0) && (datarandom != g1) && (datarandom != g2) && (datarandom != g3) && (datarandom != g4) && (datarandom != g5) && (datarandom != g6) && (datarandom != g7)) {
            divs[i].style.display = "none";
        }

    }

}