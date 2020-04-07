
$(function() {
    // script for full screen navbar
    if ($(window).width() > 749) {
        $(".navbar").find(".dropidown-button").mouseenter(function() {
            if ($(".wrapperDropidown").hasClass("opened")) {
                $(this).find(".dropidown-menu").css("display", "block");
                $(this).siblings(".dropidown-button").find(".dropidown-menu").css("display", "none");

            } else {
                $(".wrapperDropidown").addClass("opened");
                $(this).find(".dropidown-menu").slideDown("ease-out");
            };
        });

        $(".navbar").find(".dropidown-button").hover(function() {
            $(this).find(".navbar__item").toggleClass("borderBottom");
        });

        $(".wrapperDropidown").mouseleave(function() {
            $(".dropidown-menu").stop(true, false).slideUp("ease-out");
            $(".wrapperDropidown").removeClass("opened");
        });
    };

    // script for small screen navbar
    if ($(window).width() < 750) {
    $(".navbar").find(".wrapperLink").hide();
        $(".navbar").find(".wrapperBurger").click(function() {
            $(this).next(".wrapperLink").slideToggle("ease-out");
            $(this).toggleClass("animCross");
        });
    }
});