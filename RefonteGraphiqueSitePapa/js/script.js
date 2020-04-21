


$(function () {
    // script for full screen navbar
        if ($(window).width() > 749) {
            $(".navbar").find(".dropidown-menu").hide();
            $(".navbar").find(".dropidown-button").mouseenter(function () {
                if ($(".wrapperDropidown").hasClass("opened")) {
                    $(this).find(".dropidown-menu").css("display", "flex");
                    $(this).siblings(".dropidown-button").find(".dropidown-menu").css("display", "none");

                } else {
                    $(".wrapperDropidown").addClass("opened");
                    $(this).find(".dropidown-menu").slideDown("ease-out");
                };

            });

            $(".navbar").find(".dropidown-button").hover(function () {
                $(this).find(".navbar__item").toggleClass("borderBottom");
            });

            $(".wrapperDropidown").mouseleave(function () {
                $(".dropidown-menu").stop(true, false).slideUp("ease-out");
                $(".wrapperDropidown").removeClass("opened");
            });
        };

        // script for small screen navbar
        if ($(window).width() < 750) {
            $(".navbar").find(".wrapperLink").hide();
            $(".navbar").find(".wrapperBurger").click(function () {
                $(this).next(".wrapperLink").slideToggle("ease-out");
                $(this).toggleClass("animCross");
            });
        };

    // fade in and fade out of the popup
        $(".containerPopup").hide();
        $(".testButton").click(function () {
            $(".containerPopup").fadeIn();
        });
        $(".containerPopup").find("i").click(function() {
            $(".containerPopup").fadeOut();
        });
        
        $(".containerPopup").hide();
        $(".navbar__item:first-child").click(function () {
            $(".containerPopup").fadeIn();
        });
        $(".containerPopup").find("i").click(function() {
            $(".containerPopup").fadeOut();
        });
        
        const $bckground_popup = $('.wrapperPopup');
        $(document).mouseup(e => {
            if (!$bckground_popup.is(e.target) // if the target of the click isn't the container...
                && $bckground_popup.has(e.target).length === 0) // ... nor a descendant of the container
            {
                $(".containerPopup").fadeOut();
            }
        });

    // script for the dropdown article
        $(".wrapperContent").find(".dropdownArticleButton").click (function() {
            $(this).parents(".line").next(".dropdownArticle").stop(true, false).slideToggle();
        });

    // script for automatic target scroll 
        $("main").find(".chevron").click(function() {
            $("html, body").stop(true, false).animate( { scrollTop: $(".title").offset().top }, 800);
        });
});
