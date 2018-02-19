// RULES FOR PROGRESS INDICATOR
window.onscroll = function () { // Der gives en funktion når man scroller
    myFunction()
};

function myFunction() { // Variabler bliver skrevet ind
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // en for scrolltop, hvor man kan finde dens vertikale position
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // en for scrollHeight, hvor man finder hele sidens højde
    var scrolled = (winScroll / height) * 100;  // en hvor man udregner hvor på siden man er 
    document.getElementById("myBar").style.width = scrolled + "%"; // til sidst har vi en javascript som skal style myBar med vores variabel og vise hvor langt fremme på siden man er via. en horisontal indikator
}

// RULES FOR TEXT FADE IN FOR P TAGS
window.addEventListener("load", // Når siden loades
    function () {
        window.addEventListener("scroll", // skal functionen scroll
            function () {
                var nodes = document.getElementsByTagName("P"); // finde p tags
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].getBoundingClientRect().top >= 0 &&
                        nodes[i].getBoundingClientRect().bottom < window.innerHeight) { // indenfor skærmens område
                        nodes[i].setAttribute("class", "fading"); // og "fade" teksten ind
                    } else {
                        nodes[i].setAttribute("class", "");
                    }
                }
            })
    })

/*
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
} */