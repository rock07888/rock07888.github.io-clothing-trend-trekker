/* 影片輪播圖本人與他的上下張按鈕 */
var slideshow = document.querySelector('.slideshow');
var videoPlayer = document.getElementById('videoPlayer');
var videoSources = ['./videos/step1-open.mp4', './videos/step2-info.mp4', './videos/step3-comm.mp4', './videos/step4-get.mp4'];

var currentVideoIndex = 0;

videoPlayer.addEventListener('ended', function () {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
});

videoPlayer.src = videoSources[currentVideoIndex];

var prevButton = document.getElementById('prevButton');
var nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
});

nextButton.addEventListener('click', function () {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
});
/* 開啟與關閉影片輪播圖 */
var teachblackblur = document.getElementById('teachblackblur');
function openteach() {
    teachblackblur.style.display = "flex";
}
function closeteach() {
    teachblackblur.style.display = "none";
}