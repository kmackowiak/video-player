

var vid = document.getElementById("myVideo");
var isPlaying = false;

var togglePlay = document.querySelector('[title="Toggle Play"]');


togglePlay.addEventListener("click", function () {
    if (isPlaying == true) {
        vid.pause();
    }
    else {
        vid.play();
    }

    vid.onplaying = function () {
        isPlaying = true;
    };
    vid.onpause = function () {
        isPlaying = false;
    };
});


var progressBar = document.getElementById("progressbar");
document.write(progressBar.getAttribute('value'));


vid.addEventListener('timeupdate', updateProgressBar, false);

function updateProgressBar() {
   var percentage = Math.floor((100 / vid.duration) *
   vid.currentTime);
   progressBar.value = percentage;
//   dupa.innerHTML = percentage + '% played';
   document.getElementsByClassName("progress__filled")[0].style.flexBasis = percentage + '%';
}



var volumeBar = document.getElementsByName("volume")[0];

volumeBar.oninput = function() {
  vid.volume = this.value;
}



var playbackrateBar = document.getElementsByName("playbackRate")[0];
playbackrateBar.oninput = function() {
  vid.playbackRate = this.value;
}


var skip10 = document.getElementById("skip-10");

skip10.addEventListener("click", function () {
    vid.currentTime = vid.currentTime - 10;
});

var skip25 = document.getElementById("skip+25");

skip25.addEventListener("click", function () {
    vid.currentTime = vid.currentTime + 25;
});





var dupa = document.getElementById("dupa");
