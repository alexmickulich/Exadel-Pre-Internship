/**
 * Created by Lenovo z50-70 on 22.02.2017.
 */

var elem = document.querySelector('#burger_menu_id');
var burgerButton = document.getElementById('burger')

burgerButton.onclick = function () {
    elem.classList.toggle('burger_menu_open');
}


var m = document.querySelector("main"),
    aSide = document.querySelector("aside")
h = document.querySelector("header"),
    n = document.querySelector("nav"),
nHeight = 0,
hHeight = 0;

function setTopPadding() {
    hHeight = h.offsetHeight;
    nHeight = n.offsetHeight;
    m.style.paddingTop = hHeight + nHeight + "px";
    aSide.style.paddingTop = hHeight + nHeight + "px";
}

function onScroll() {
    window.addEventListener("scroll", callbackFunc);
    function callbackFunc() {
        var y = window.pageYOffset;
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