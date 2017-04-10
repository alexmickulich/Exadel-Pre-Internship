/**
 * Created by Lenovo z50-70 on 22.02.2017.
 */

var username;

var elem = document.querySelector('#burger_menu_id');
var burgerButton = document.getElementById('burger');

burgerButton.onclick = function () {
    elem.classList.toggle('burger_menu_open');
};


var m = document.querySelector("main"),
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


function visibleUser(name) {
    if (name && typeof name == "string") {
        username = name;
        singIn();
        console.log("true");
    } else {
        console.log("false");
    }
}


function singIn() {
    if (username) {
        document.querySelector(".nav-hide-menu-login-username").innerHTML = "Hi, " + username + "!";
        document.querySelector(".add-article").style.display = "block";
    }
}


var userBase = (function () {
    var loginBase = ["AlexanderMikulich", "IvanovIvan", "PetrovPetr","admin"];
    var passwordBase = ["123456", "111111", "222222","admin"];

    var flag = false;
    function validateUser(login, password) {
        for (var i = 0; i < loginBase.length; i++) {
            if (login == loginBase[i] && passwordBase[i] == password) {
                flag = true;
            }
        }
        return flag;
    }

    return {
        validateUser: validateUser
    };
}());


function valid(form) {
    var add_article_button = document.querySelector(".nav-hide-menu-login-username");

    var fail = false;
    var name = form.name.value;
    var password = form.password.value;
    if (name == "" || name == " ") {
        fail = "Вы не ввели свой логин";
    } else if (password == "") {
        fail = "Вы не ввели свой пароль";
    }
    if (fail) {
        alert(fail);
    }
    else {
        if (userBase.validateUser(name, password)) {
            document.querySelector("#loginForm").style.display = "none";
            document.querySelector("#news").style.display = "block";
            document.querySelector("aside").style.display = "block";
            document.querySelector(".pagination").style.display="block";
            document.querySelector(".wrap").style.display="block";
            visibleUser(name);
        }
        else {
            alert("Не совпадает логин или пароль!");
        }
    }
}

var add_article_button = document.querySelector(".nav-hide-menu-login-username")

add_article_button.onclick = function () {
    document.querySelector("#loginForm").style.display = "block";
    document.querySelector("#main-article").style.display = "none";
    document.querySelector("#news").style.display = "none";
    document.querySelector("aside").style.display = "none";
    document.querySelector(".pagination").style.display="none";
    document.querySelector(".wrap").style.display="none";
};

function bySection(sectionConfig) {
    var filter = {
      section: sectionConfig
    };

    console.log(document.querySelector("#filter-form-tags").value.split(","));
    articleRenderer.removeArticlesFromDom();
    var articles = articleModel.getArticles(0, 100, filter);
    articleRenderer.insertArticlesInDOM(articles);

}
//----------------------------NAVIGATION-MENU-------------------------------//

