/**
 * Created by Lenovo z50-70 on 22.02.2017.
 */

let elem = document.querySelector('#burger_menu_id');
let burgerButton = document.getElementById('burger');

burgerButton.onclick = function () {
    elem.classList.toggle('burger_menu_open');
};


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
    //startApp();
};

window.onresize = function () {
    setTopPadding();
};


function signIn() {
    document.querySelector(".nav-hide-menu-login-username").style.display = "none";
    document.querySelector(".exit-button").style.display = "block";
    document.querySelector(".add-article").style.display = "block";
    document.querySelector("#news").style.display = "block";
}


function logOut() {
    articleModel.dbLogOut().then(() => window.location = "index.html")
    document.querySelector(".nav-hide-menu-login-username").style.display = "block";
    document.querySelector(".nav-hide-menu-user").style.display = "none";
    document.querySelector(".exit-button").style.display = "none";
}


function valid(form) {
    let fail = false;
    let username = form.name.value;
    let password = form.password.value;
    if (username == "" || name == " ") {
        fail = "Вы не ввели свой логин";
    } else if (password == "") {
        fail = "Вы не ввели свой пароль";
    }
    if (fail) {
        alert(fail);
    }
    else {
        articleModel.dbLogIn({username, password}).then(
            ready => {
                document.querySelector("#loginForm").style.display = "none";
                document.querySelector("#news").style.display = "block";
                document.querySelector("aside").style.display = "block";
                document.querySelector(".pagination").style.display = "block";
                document.querySelector(".wrap").style.display = "block";
                startApp();
            },
            notready => {
                alert("Логин или пароль не совпадают");
            }
        )
    }
}

let add_article_button = document.querySelector(".nav-hide-menu-login-username");

add_article_button.onclick = function () {
    document.querySelector("#loginForm").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
    document.querySelector("#news").style.display = "none";
    document.querySelector("aside").style.display = "none";
    document.querySelector(".pagination").style.display = "none";
    document.querySelector(".wrap").style.display = "none";
};


//----------------------------NAVIGATION-MENU-------------------------------//

