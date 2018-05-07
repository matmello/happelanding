/*
	Appdent Theme Scripts
*/

(function($){ "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
	Sticky Header
=========================================================================*/
	$(function() {
		var header = $("#header"),
			yOffset = 0,
			triggerPoint = 80;
		$(window).on( 'scroll', function() {
			yOffset = $(window).scrollTop();

			if (yOffset >= triggerPoint) {
                header.addClass("navbar-fixed");
                $(".brand img").css('width', '140px');
			} else {
                header.removeClass("navbar-fixed");
                $(".brand img").css('width', '164px');
			}

		});
	});


/*=========================================================================
	Carousel
=========================================================================*/
    $('#portfolio').owlCarousel({
        // loop: true,
        // autoplay: true,
        // smartSpeed: 500,
        items: 1,
        dots: true,
        nav: false
    });

    $('#equipe').owlCarousel({
        // loop: true,
        // autoplay: true,
        // smartSpeed: 500,
        items: 1,
        dots: true,
        nav: false
    });


/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 60
	});


/*=========================================================================
	Scroll To Top
=========================================================================*/
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });


/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 150
    });
    wow.init();

})(jQuery);
