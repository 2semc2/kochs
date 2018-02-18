// RULES FOR PROGRESS INDICATOR
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// RULES FOR TEXT FADE IN FOR P TAGS
window.addEventListener("load",
    function () {
        window.addEventListener("scroll",
            function () {
                var nodes = document.getElementsByTagName("P");
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].getBoundingClientRect().top >= 0 &&
                        nodes[i].getBoundingClientRect().bottom < window.innerHeight) {
                        nodes[i].setAttribute("class", "fading");
                    } else {
                        nodes[i].setAttribute("class", "");
                    }
                }
            })
    })

// RULES FOR AUDIO TAG
window.addEventListener("scroll",
    function () {
        var mySound = document.getElementById("myAudio");
        if (elFllVsbl(mySound.parentElement)) { //parent elementFullyVisible
            if (!(mySound.currentTime > 0)) { //test needed for preventing stuttering
                mySound.play();
            }
        } else {
            mySound.pause();
            mySound.currentTime = 0; // rewind sound
        }
    }
)

function elFllVsbl(el) {
    return (el.getBoundingClientRect().top>0 &&
           el.getBoundingClientRect().bottom<window.innerHeight)
}