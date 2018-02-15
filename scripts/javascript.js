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

// RULES FOR TEXT FADE IN
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
