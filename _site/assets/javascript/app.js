$(document).ready(function () {

    // burger : toggle Menu
    const burgerIcon = document.querySelector(".fa-bars");
    const navMenu = document.querySelector("#navigation-menu");
    const burger = document.querySelector(".burgerMenu");

    burgerIcon.addEventListener("click", function () {
        navMenu.classList.add("active");
        navMenu.classList.remove("disactive");
    });

    burger.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navMenu.classList.add("disactive");
    });



    // http://w3iscool.com/jquery-dropdown-menu-toggle/
    $('.nav-subtopics span').click(function () {
        const dropdown_list = $(this).next('.nav-dropdown-content');
        if (!dropdown_list.is(':visible')) {
            $('.nav-dropdown-content').slideUp();
        }
        dropdown_list.slideToggle();
    });


    // click somewhere on document and dropdowns are closing
    $(document).on('click', function (e) {
        if (!$(".nav-subtopics span").is(e.target) && !$(".nav-subtopics span").has(e.target).length) {
            $('.nav-dropdown-content').slideUp("fast");
        }
    });

});