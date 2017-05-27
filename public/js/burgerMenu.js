/**
 * Created by Lenovo z50-70 on 26.05.2017.
 */
function showBurgerFilter() {
    document.querySelector("#burger_filter").style.display = "block";
    document.querySelector("#burger_list").style.display = "none";
    document.querySelector("#burger_login").style.display = "none";
    document.querySelector("#burger_filter_button").style.display = "none"
}

function showBurgerMenuElements() {
    document.querySelector("#burger_filter").style.display = "none";
    document.querySelector("#burger_list").style.display = "block";
    document.querySelector("#burger_login").style.display = "block";
    document.querySelector("#burger_filter_button").style.display = "block";
}

