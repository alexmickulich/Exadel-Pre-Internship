/**
 * Created by Lenovo z50-70 on 26.05.2017.
 */

function swapColorsLabelFirst() {
    document.querySelector("#slide-header-label-1").style.background = "#09d263";
    document.querySelector("#slide-header-label-2").style.background = "#2d2d2d";
    document.querySelector("#slide-header-label-3").style.background = "#2d2d2d";
    document.querySelector("header").style.background = "#09d263";


    let buttons = document.getElementsByClassName("main-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "#09d263";
    }

    document.querySelector(".footer-first").style.background = "#09d263";
    document.querySelector(".footer-first").style.background = "#09d263";
    document.querySelector(".pagination").querySelector(".main-button").style.background = "#2d2d2d";

}

function swapColorsLabelSecond() {
    document.querySelector("#slide-header-label-1").style.background = "#2d2d2d";
    document.querySelector("#slide-header-label-2").style.background = "#dc2d26";
    document.querySelector("#slide-header-label-3").style.background = "#2d2d2d";
    document.querySelector("header").style.background = "#dc2d26";
    let buttons = document.getElementsByClassName("main-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "#dc2d26";
    }

    document.querySelector(".footer-first").style.background = "#dc2d26";
    document.querySelector(".pagination").querySelector(".main-button").style.background = "#2d2d2d";

}

function swapColorsLabelThrid() {
    document.querySelector("#slide-header-label-1").style.background = "#2d2d2d";
    document.querySelector("#slide-header-label-2").style.background = "#2d2d2d";
    document.querySelector("#slide-header-label-3").style.background = "#2b55c9";
    document.querySelector("header").style.background = "#2b55c9";

    let buttons = document.getElementsByClassName("main-button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.background = "#2b55c9";
    }
    document.querySelector(".footer-first").style.background = "#2b55c9";
    document.querySelector(".pagination").querySelector(".main-button").style.background = "#2d2d2d";
}