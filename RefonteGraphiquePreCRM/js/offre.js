$(function () {

    // script for offer's personnalisation
    var basic = $("table tbody th + td");
    var basicHead = $("table thead td + th");
    var advanced = $("table tbody th + td + td");
    var advancedHead = $("table thead td + th + th");
    var premium = $("table tbody th + td + td +td");
    var premiumHead = $("table thead td + th + th +th");
    var personnalisation = $("table tbody th + td + td + td + td");
    var personnalisationHead = $("table thead td + th + th + th + th");
    var countActivationButton1 = 2;
    var countActivationButton2 = 7;
    var countActivationButton3 = 11;
    var countActivationButtonPerso = 0;

    // function index 
    function testBatterie() {
        // test for display of personnalization column
        if (premiumHead.css("display") != "none" && basicHead.css("display") != "none" && advancedHead.css("display") != "none") {
            if (!$(".tableOffre").hasClass("allShown")) {
                $(".tableOffre").addClass("allShown");

                personnalisationHead.fadeOut();
                personnalisation.each(function () {
                    $(this).fadeOut();
                });
            };
        }

        if (premiumHead.css("display") == "none" || basicHead.css("display") == "none" || advancedHead.css("display") == "none") {  
            if ($(".tableOffre").hasClass("allShown")) {
                $(".tableOffre").removeClass("allShown");

                personnalisationHead.fadeIn();
                personnalisation.each(function () {
                    $(this).fadeIn();
                });
            }
        }
    };

    function interactionTick(thisObject) {
        if(thisObject.hasClass("colBasic")) {
            if(thisObject.find("i").hasClass("active")) {
                thisObject.find("i").removeClass("active");
                thisObject.find("i").addClass("newInactive");
                countActivationButton1 -= 1;
            } else if (thisObject.find("i").hasClass("newInactive")) {
                thisObject.find("i").removeClass("newInactive");
                thisObject.find("i").addClass("active");
                countActivationButton1 += 1;
            } else if (thisObject.find("i").hasClass("newActive")) {
                thisObject.find("i").removeClass("newActive");
                countActivationButton1 -= 1;
            } else {
                thisObject.find("i").addClass("newActive");
                countActivationButton1 += 1;
            }
        }
        if(thisObject.hasClass("colAdvanced")) {
            if(thisObject.find("i").hasClass("active")) {
                thisObject.find("i").removeClass("active");
                thisObject.find("i").addClass("newInactive");
                countActivationButton2 -= 1;
            } else if (thisObject.find("i").hasClass("newInactive")) {
                thisObject.find("i").removeClass("newInactive");
                thisObject.find("i").addClass("active");
                countActivationButton2 += 1;
            } else if (thisObject.find("i").hasClass("newActive")) {
                thisObject.find("i").removeClass("newActive");
                countActivationButton2 -= 1;
            } else {
                thisObject.find("i").addClass("newActive");
                countActivationButton2 += 1;
            }
        }
        if(thisObject.hasClass("colPremium")) {
            if(thisObject.find("i").hasClass("active")) {
                thisObject.find("i").removeClass("active");
                thisObject.find("i").addClass("newInactive");
                countActivationButton3 -= 1;
            } else if (thisObject.find("i").hasClass("newInactive")) {
                thisObject.find("i").removeClass("newInactive");
                thisObject.find("i").addClass("active");
                countActivationButton3 += 1;
            } else if (thisObject.find("i").hasClass("newActive")) {
                thisObject.find("i").removeClass("newActive");
                countActivationButton3 -= 1;
            } else {
                thisObject.find("i").addClass("newActive");
                countActivationButton3 += 1;
            }
        }
        if(thisObject.hasClass("colPerso")) {
            if(thisObject.find("i").hasClass("active")) {
                thisObject.find("i").removeClass("active");
                thisObject.find("i").addClass("newInactive");
                countActivationButtonPerso -= 1;
            } else if (thisObject.find("i").hasClass("newInactive")) {
                thisObject.find("i").removeClass("newInactive");
                thisObject.find("i").addClass("active");
                countActivationButtonPerso += 1;
            } else if (thisObject.find("i").hasClass("newActive")) {
                thisObject.find("i").removeClass("newActive");
                countActivationButtonPerso -= 1;
            } else {
                thisObject.find("i").addClass("newActive");
                countActivationButtonPerso += 1;
            }
        }
    }
    function activationButton() {
        // test for activation of the command button
        if (countActivationButton1 < 1) {
            $(".commandeButton1").addClass("inactive")
        } else {
            $(".commandeButton1").removeClass("inactive")
        }
        if (countActivationButton2 < 1) {
            $(".commandeButton2").addClass("inactive")
        } else {
            $(".commandeButton2").removeClass("inactive")
        }
        if (countActivationButton3 < 1) {
            $(".commandeButton3").addClass("inactive")
        } else {
            $(".commandeButton3").removeClass("inactive")
        }
        if (countActivationButtonPerso < 1) {
            $(".commandeButtonPerso").addClass("inactive")
        } else {
            $(".commandeButtonPerso").removeClass("inactive")
        }
    }
    function integrationModif(col) {
        personnalisation.each(function() {
            if($(this).find("i").hasClass("newActive")) {
                if(!$(this).prevAll(col).find("i").hasClass("active") && !$(this).prevAll(col).find("i").hasClass("newInactive")) {
                    $(this).prevAll(col).find("i").addClass("newActive");
                    countActivationButton1 += 1;
                }
                if($(this).prevAll(col).find("i").hasClass("newInactive")) {
                    $(this).prevAll(col).find("i").removeClass("newInactive");
                    $(this).prevAll(col).find("i").addClass("active");
                    countActivationButton1 += 1;
                }
            } else {
                if ($(this).prevAll(col).find("i").hasClass("newActive")) {
                    $(this).prevAll(col).find("i").removeClass("newActive");
                    countActivationButton1 -= 1;
                }
                if ($(this).prevAll(col).find("i").hasClass("active")) {
                    $(this).prevAll(col).find("i").removeClass("active");
                    $(this).prevAll(col).find("i").addClass("newInactive");
                    countActivationButton1 -= 1;
                }
            }
        })
        activationButton();
    }
    function initPerso(thisObject) {
        if (thisObject.find("i").hasClass("active") || thisObject.find("i").hasClass("newActive")) {
            thisObject.nextAll(".colPerso").find("i").addClass("newActive");
            countActivationButtonPerso += 1;
        } else {
            if(thisObject.nextAll(".colPerso").find("i").hasClass("newActive")) {
                thisObject.nextAll(".colPerso").find("i").removeClass("newActive")
            }
        }
    }
    
    // end of function index 
    
        $(".tableOffre").addClass("allShown");
        personnalisationHead.css("display", "none");
        personnalisation.each(function () {
            $(this).css("display", "none");
        })

        $(".tableOffre tbody tr").find(".colBasic").click(function() {
            if(premiumHead.css("display") != "none" && basicHead.css("display") != "none" && advancedHead.css("display") != "none") {
                interactionTick( $(this) );

                activationButton();
                console.log("c'est terminé anakin, je suis le casse couille d'initialisation !")
            }
        }); 
        $(".tableOffre tbody tr").find(".colAdvanced").click(function() {
            if(premiumHead.css("display") != "none" && basicHead.css("display") != "none" && advancedHead.css("display") != "none") {
                interactionTick( $(this) );

                activationButton();
                console.log("c'est terminé anakin, je suis le casse couille d'initialisation !")
            }
        }); 
        $(".tableOffre tbody tr").find(".colPremium").click(function() {
            if(premiumHead.css("display") != "none" && basicHead.css("display") != "none" && advancedHead.css("display") != "none") {
                interactionTick( $(this) );

                activationButton();
                console.log("c'est terminé anakin, je suis le casse couille d'initialisation !")
            }
        }); 

        $(".tableOffre tbody tr").find(".colPerso").click(function () {
            if(premiumHead.css("display") == "none" || basicHead.css("display") == "none" || advancedHead.css("display") != "none") {
                interactionTick( $(this) );

                activationButton();
                console.log("c'est terminé anakin, je suis le casse couille d'initialisation !")
            }
        })

    // personnalisation on button click
    $(".wrapperOffre").find(".suscriptionButton--basic").click(function () {
        
        $(".colPerso").addClass("basic");
        
        basic.each(function() {
            initPerso($(this));
        })

        if (basicHead.css("display") == "none") {
            basicHead.fadeIn();
            basic.each(function () {
                $(this).fadeIn();
            });
        };

        advanced.each(function () {
            $(this).fadeOut();
        })
        advancedHead.fadeOut();

        premium.each(function () {
            $(this).fadeOut();
        })
        premiumHead.fadeOut(function(){
            testBatterie();
        });
    });

    $(".wrapperOffre").find(".suscriptionButton--advanced").click(function () {
        
        $(".colPerso").addClass("advanced");
        
        advanced.each(function() {
            initPerso($(this));
        })

        if (advancedHead.css("display") == "none") {
            advancedHead.fadeIn();
            advanced.each(function () {
                $(this).fadeIn();
            });
        };

        basic.each(function () {
            $(this).fadeOut();
        })
        basicHead.fadeOut();

        premium.each(function () {
            $(this).fadeOut();
        })
        premiumHead.fadeOut(function(){
            testBatterie();
        });
    });

    $(".wrapperOffre").find(".suscriptionButton--premium").click(function () {
        
        $(".colPerso").addClass("premium");
        
        premium.each(function() {
            initPerso($(this));
        })

        if (premiumHead.css("display") == "none") {
            premiumHead.fadeIn();
            premium.each(function () {
                $(this).fadeIn();
            })
        }


        basic.each(function () {
            $(this).fadeOut();
        })
        basicHead.fadeOut();

        advanced.each(function () {
            $(this).fadeOut();
        })
        advancedHead.fadeOut(function(){
            testBatterie();
        });
    });

    $(".viewAll").click(function () {

        if (basicHead.css("display") == "none") {
            basicHead.fadeIn();
            basic.each(function () {
                $(this).fadeIn();
            });
        };

        if (advancedHead.css("display") == "none") {
            advancedHead.fadeIn();
            advanced.each(function () {
                $(this).fadeIn(function(){
                    if (!$(".tableOffre").hasClass("allShown")) {
                        testBatterie();
                    };
                });
            });
        };

        if (premiumHead.css("display") == "none") {
            premiumHead.fadeIn();
            premium.each(function () {
                $(this).fadeIn(function(){
                    if (!$(".tableOffre").hasClass("allShown")) {
                        testBatterie();
                    };
                });
            });
        };

        // integrating modifications of personnalization column
        if($(".colPerso").hasClass("basic")) {
            integrationModif(".colBasic");

            $(".colPerso").removeClass("basic");
        }

        if($(".colPerso").hasClass("advanced")) {
            integrationModif(".colAdvanced");

            $(".colPerso").removeClass("advanced");
        }

        if($(".colPerso").hasClass("premium")) {
            integrationModif(".colPremium");

            $(".colPerso").removeClass("premium");
        }
    });

    // script for automatic target scroll 
    $(".wrapperOffre").find(".suscriptionButton").click(function () {
        $("html, body").stop(true, false).animate({ scrollTop: $("table").offset().top - 60 }, 1000);
    });

});