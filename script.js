function subNav() {
    $(".sub-nav-list").hover(function() {
        $(".sub-nav").slideToggle();
    })
}
subNav();

function subNavMobile() {
    $(".sub-nav-mobile-list").click(function() {
        $(".sub-nav-mobile").slideToggle();
    })
}
subNavMobile();

function slideMobileNav() {
    $(".nav-mobile-icon").click(function() {
        $(".nav-mobile-wrapper").css("right", "0px");
    })
}
slideMobileNav();

function closeSlideMobileNav() {
    $(".nav-mobile-icon-exit").click(function() {
        $(".nav-mobile-wrapper").css("right", "-265px");
    })
}
closeSlideMobileNav();