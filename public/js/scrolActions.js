let m = document.querySelector("main"),
    aSide = document.querySelector("aside");
h = document.querySelector("header"),
    n = document.querySelector("nav"),
    slideShow = document.querySelector(".wrap");

nHeight = 0;
hHeight = 0;

function setTopPadding() {
    hHeight = h.offsetHeight;
    nHeight = n.offsetHeight;
    slideShow.style.paddingTop = nHeight + nHeight + hHeight + "px";
    m.style.paddingTop = nHeight + hHeight + "px";
    aSide.style.paddingTop = nHeight + hHeight + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
        let y = window.pageYOffset;
        if (y > hHeight) {
            h.classList.add("scroll");
            n.classList.add("scroll_nav");
        } else {
            h.classList.remove("scroll");
            n.classList.remove("scroll_nav");
        }
    }
}


window.onload = function () {
    setTopPadding();
    onScroll();
};

window.onresize = function () {
    setTopPadding();
};


let updownElem = document.querySelector("#updown");

window.onscroll = function () {
    let pageY = window.pageYOffset || document.documentElement.scrollTop;
    let innerHeight = document.documentElement.clientHeight;

    switch (updownElem.className) {
        case '':
            if (pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;

        case 'up':
            if (pageY < innerHeight) {
                updownElem.className = '';
            }
            break;

        case 'down':
            if (pageY > innerHeight) {
                updownElem.className = 'up';
            }
            break;
    }
};

var pageYLabel = 0;

document.querySelector("#updown-background").onclick = function () {
    var pageY = window.pageYOffset || document.documentElement.scrollTop;

    switch (updownElem.className) {
        case 'up':
            pageYLabel = pageY;
            window.scrollTo(0, 0);
            updownElem.className = 'down';
            break;

        case 'down':
            window.scrollTo(0, pageYLabel);
            updownElem.className = 'up';
    }

};