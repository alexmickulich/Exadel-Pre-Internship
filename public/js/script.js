/**
 * Created by Lenovo z50-70 on 22.02.2017.
 */

let elem = document.querySelector('#burger_menu_id');
let burgerButton = document.getElementById('burger');

burgerButton.onclick = function () {
    elem.classList.toggle('burger_menu_open');
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

