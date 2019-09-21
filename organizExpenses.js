/* // Javascript functions for login and sign up transitions
var linkLogin = document.querySelector('.form .register-form .login');
var linkRegister = document.querySelector('.form .login-form .register');


//with the form 

linkLogin.addEventListener('click', function () {
    $(".form .login-form").css("display", "block");
    $(".form .register-form").css("display", "none");
    menuLinkRegister.classList.remove("active");
    menuLinkLogin.classList.add("active");

});


linkRegister.addEventListener('click', function () {
    $(".form .login-form").css("display", "none");
    $(".form .register-form").css("display", "block");
    menuLinkRegister.classList.add("active");
    menuLinkLogin.classList.remove("active");

});

//with the menu link

var menuLinkLogin = document.querySelector('nav .nav-item .login');
var menuLinkRegister = document.querySelector('nav .nav-item .register');

menuLinkRegister.addEventListener('click', function () {
    $(".form .login-form").css("display", "none");
    $(".form .register-form").css("display", "block");
    menuLinkRegister.classList.add("active");
    menuLinkLogin.classList.remove("active");

});


menuLinkLogin.addEventListener('click', function () {
    $(".form .login-form").css("display", "block");
    $(".form .register-form").css("display", "none");
    menuLinkRegister.classList.remove("active");
    menuLinkLogin.classList.add("active");

});
 */


//sidemenu script

$(document).ready(function () {
    $(".sideMenuToggler").on("click", function () {
        $(".wrapper").toggleClass(".active");
        $(".sideMenu").toggleClass("show-side");
    });


   /*  var adjustSideBar = function () {
        $(".sidebar").slimScr(oll({
            height: document.documentElement.clientHeight - $("navbar").outerHeight()
        });
    };

    adjustSideBar();

    $(window).resize(function () {
        adjustSideBar();
    }); */
});