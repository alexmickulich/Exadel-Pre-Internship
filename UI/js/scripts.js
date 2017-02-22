/**
 * Created by Lenovo z50-70 on 22.02.2017.
*/
;
var view = {
    showBurgerMenu: function () {
        var burgerMenu = document.getElementById('burger_menu');
        burgerMenu.style.display="none";
    }
};

var model = {};

var controller = {
    burgerClickEvent: function () {
        view.showBurgerMenu();
    }
};

(function () {
    var app = {
        event: function () {
            var element = document.getElementById('burger');
            element.ondblclick = controller.burgerClickEvent();
        },
        init: function () {
            app.event();
        }

    };

    app.init();
}());