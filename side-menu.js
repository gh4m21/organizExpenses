//sidemenu script

$(document).ready(function () {
    $(".sideMenuToggler").on("click", function () {
        $(".wrapper").toggleClass(".active");
        $(".sideMenu").toggleClass("show-side");
    });

});