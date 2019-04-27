$(document).ready(init);

function init() {

    menuBurgerClick();

}

function menuBurgerClick() {

    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

}