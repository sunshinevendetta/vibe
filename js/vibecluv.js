/*
  [JS Index]
  
  ---
  
  vibecluv©
  Author:  sunshinevendetta
  Version: 1.0
*/


/*
  1. preloader
  2. show Timeout
    2.1. show borders
    2.2. show elements
	2.3. fadeIn.element
  3. page scroll
  4. countdown launcher
    4.1. countdown launcher ON
    4.2. countdown launcher OFF
  5. animate elements
  6. forms
    6.1. newsletter form
  7. countdown
    7.1. countdown timer
    7.2. countdown SETUP
  8. slick slider
    8.1. slick fullscreen slideshow
  9. YouTube player
  10. wipe carousel
    10.1. wipe carousel SETUP
  11. instafeed
  12. twitter ticker
    12.1. twitter ticker SETUP
  13. modals
    13.1. sign up modal
      13.1.1. sign up modal additional CLOSER
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. show Timeout
        // 2.1. show borders
        setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 800);
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        // 2.2. show elements
        setTimeout(function() {
            $(".logo-big, .logo-big-mobile").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".bottom-credits, .scroll-indicator-wrapper, .welcome-message, .countdown-launcher").removeClass("bottom-position");
        }, 800);
        // 2.3. fadeIn.element
        setTimeout(function() {
            $(".fadeIn-element").delay(1600).css({
                display: "none"
            }).fadeIn(1800);
        }, 0);
    });
	
    // 3. page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 110
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
	
    // 4. countdown launcher
    $(".countdown-launcher-wrapper").on("click", function() {
        if ($(".countdown-launcher").hasClass("open")) {
            $(".countdown-launcher").removeClass("open").addClass("close");
            $(".countdown-launcher-hidden").removeClass("close").addClass("open");
        } else if ($(".countdown-launcher-hidden").hasClass("open")) {
            $(".countdown-launcher").addClass("open").removeClass("close");
            $(".countdown-launcher-hidden").addClass("close").removeClass("open");
        } else {
            $(".countdown-launcher").removeClass("close").addClass("open");
            $(".countdown-launcher-hidden").removeClass("open").addClass("close");
        }
    });
    // 4.1. countdown launcher ON
    $(".countdown-launcher").on("click", function() {
        $(".border-top, .logo-big, .logo-big-mobile").addClass("top-position-primary");
        $(".border-bottom, .welcome-message").addClass("bottom-position-primary");
        $(".border-left").addClass("left-position-primary");
        $(".border-right").addClass("right-position-primary");
        $(".countdown-reveal").removeClass("countdown-reveal-hide").addClass("countdown-reveal-show");
        $(".logo, .social-icons-wrapper").removeClass("top-position");
        $(".bottom-credits").addClass("bottom-position-primary");
        $(".bottom-contact").removeClass("bottom-position-primary");
        $(".bottom-contact").removeClass("bottom-position-secondary");
        $(".scroll-indicator").addClass("scroll-indicator-correction");
    });
    // 4.2. countdown launcher OFF
    $(".countdown-launcher-hidden, .scroll-indicator").on("click", function() {
        $(".border-top, .logo-big, .logo-big-mobile").removeClass("top-position-primary");
        $(".border-bottom, .welcome-message").removeClass("bottom-position-primary");
        $(".border-left").removeClass("left-position-primary");
        $(".border-right").removeClass("right-position-primary");
        $(".countdown-reveal").addClass("countdown-reveal-hide").removeClass("countdown-reveal-show");
        $(".logo, .social-icons-wrapper").addClass("top-position");
        $(".bottom-credits").removeClass("bottom-position-primary");
        $(".bottom-contact").addClass("bottom-position-primary");
        $(".bottom-contact").addClass("bottom-position-secondary");
        $(".scroll-indicator").removeClass("scroll-indicator-correction");
    });
	
    $(window).on("scroll", function() {
        // 5. animate elements
        if ($(this).scrollTop() > 10) {
            $(".to-top-arrow").addClass("show");
            $(".logo-big, .logo-big-mobile").addClass("top-position-primary");
            $(".logo, .social-icons-wrapper, .border-top-header").removeClass("top-position");
            $(".scroll-indicator-wrapper").addClass("scroll-indicator-wrapper-position-secondary");
            $(".welcome-message, .countdown-launcher, .countdown-launcher-hidden").addClass("bottom-position-primary");
            $(".countdown-reveal").addClass("countdown-reveal-hide").removeClass("countdown-reveal-show");
            $(".border-bottom-footer").removeClass("bottom-position");
            $(".bottom-credits").addClass("bottom-position-primary");
            $(".bottom-contact").removeClass("bottom-position-primary");
            $(".bottom-contact").removeClass("bottom-position-secondary");
        } else {
            $(".border-top, .logo-big, .logo-big-mobile").removeClass("top-position-primary");
            $(".border-bottom").removeClass("bottom-position-primary");
            $(".border-left").removeClass("left-position-primary");
            $(".border-right").removeClass("right-position-primary");
            $(".to-top-arrow").removeClass("show");
            $(".logo, .social-icons-wrapper, .border-top-header").addClass("top-position");
            $(".scroll-indicator-wrapper").removeClass("scroll-indicator-wrapper-position-secondary");
            $(".welcome-message, .countdown-launcher, .countdown-launcher-hidden").removeClass("bottom-position-primary");
            $(".border-bottom-footer").addClass("bottom-position");
            $(".bottom-credits").removeClass("bottom-position-primary");
            $(".bottom-contact").addClass("bottom-position-primary");
            $(".bottom-contact").addClass("bottom-position-secondary");
        }
    });
	
    // 6. forms
    // 6.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
	
    // 7. countdown
    $(document).on("ready", function() {
        // 7.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 7.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: "05/10/2024 00:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 8. slick slider
    // 8.1. slick fullscreen slideshow
    $(".slick-fullscreen-slideshow").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 9. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 10. wipe carousel
    $(document).on("ready", function() {
        var slideshow;
        slideshow = $("#slideshow").wipe(opts);
		$(".carousel-controls-prev").on("click", function() {
            slideshow.prev();
        });
		$(".carousel-controls-next").on("click", function() {
            slideshow.next();
        });
    });
    // 10.1. wipe carousel SETUP
    var opts = {
        currentSlideSelector: "wipeCurrentSlide",
        transitionSpeed: 1000,
        pauseTime: 4000
    };
	
    // 11. instafeed
    var userFeed = new Instafeed({
        get: "user",
        userId: "5975086331",                                               // Instagram User ID
        accessToken: "5975086331.1677ed0.5c991b59366a426fadf3e868310cc56b", // Instagram Access Token
        limit: 6,                                                           // Number of Photos
        resolution: "standard_resolution",
        template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    });
    userFeed.run();
	
    // 12. twitter ticker
    $("#ticker").tweet({
        username: "vibecluv", // Twitter User Name
        page: 1,
        avatar_size: 0,
        count: 20,           // Number of Tweets
        loading_text: ""
	}).on("bind", function() {
        var ul = $(this).find(".tweet_list");
        var ticker = function() {
            setTimeout(function() {
                ul.find('li:first').animate({
                    marginTop: '-75px'
                }, 500, function() {
                    $(this).detach().appendTo(ul).removeAttr('style');
                });
                ticker();
            }, 8000);
        };
        ticker();
    });
    // 12.1. twitter ticker SETUP
    $(this).find(".tweet_list").list_ticker({
        speed: 8000,
        effect: 'fade' // fade, slide
    });
	
	// 13. modals
    // 13.1. sign up modal
    $(".sign-up-modal-launcher, .sign-up-modal-closer").on("click", function() {
        if ($(".sign-up-modal").hasClass("open")) {
            $(".sign-up-modal").removeClass("open");
            $(".sign-up-modal").addClass("close");
        } else {
            $(".sign-up-modal").removeClass("close");
            $(".sign-up-modal").addClass("open");
        }
    });
    // 13.1.1. sign up modal additional CLOSER
    $(".scroll-indicator, .countdown-launcher, .page-scroll, .logo, .bottom-credits, .bottom-contact, .social-icons").on("click", function() {
        $(".sign-up-modal").removeClass("open");
        $(".sign-up-modal").addClass("close");
    });
	
	
});