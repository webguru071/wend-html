/*============ Template Introduction=====================
Template Name:wend - Tour, Travel & Travel Agency Template
Version: 1.0
Author:Andit Theme/Hadayet
Template URI: http://demo.anditthemes.com/html/travel-agency/
License URI: https://andit.co/
Tags:   hotel, resort, tour, tourism, tourist, tours website, travel, traveler, traveling, traveling websites, rest, Travelo, vacation.
================================================================*/

$(document).ready(function () {

    "use strict";
    /*----------------------------------------
                Video Plugin
            ----------------------------------------*/

    var $iframe = $('iframe'),
        $videoLink = $('.video-link'),
        playerTemplate =
        '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';

    $videoLink.on('click', function (e) {
        var localTemplate = '',
            videoWidth = parseInt($(this).data('width')),
            videoHeight = parseInt($(this).data('height')),
            videoAspect = (videoHeight / videoWidth) * 100,
            // elements
            $player = null,
            $video = null,
            $close = null,
            $iframe = null;

        e.preventDefault();

        localTemplate = playerTemplate.replace(
            '{{iframevideo}}',
            $(this).prop('href')
        );

        $player = $(localTemplate);

        $player.find('.video-filler').css('padding-top', videoAspect + '%');

        $close = $player.find('.video-close').on('click', function () {
            $(this)
                .off()
                .closest('.player')
                .hide()
                .remove();
        });

        $player.appendTo('body').addClass('js--show-video');
    });



    $('.input-group.date').datepicker({
        format: "dd.mm.yyyy"
    });




    $('.slider-main-ab').owlCarousel({
        loop: true,
        margin: 20,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 1
            }
        }
    });

    $('.slider-des').owlCarousel({
        loop: true,
        margin: 30,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
    $('#banner-home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.test-slider-home-1').owlCarousel({
        loop: true,
        margin: 30,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.all-logo').owlCarousel({
        loop: true,
        margin: 20,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 3
            },
            600: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    });


    $('.img-nature-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });




    $('.instagram-img-slider-area').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.popular-slider-area').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });



    $('.banner-area-four-slider').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });







    //Client Testimonial Carousel
    if (
        $(".client-testimonial-carousel").length &&
        $(".client-thumbs-carousel").length
    ) {
        var $sync3 = $(".client-testimonial-carousel"),
            $sync4 = $(".client-thumbs-carousel"),
            flag = false,
            duration = 500;

        $sync3
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: true,
                navText: [
                    '<span class="fa fa-angle-left"></span>',
                    '<span class="fa fa-angle-right"></span>',
                ],
                dots: true,
                autoplay: false,
                autoplayTimeout: 5000,
            })
            .on("changed.owl.carousel", function (e) {
                if (!flag) {
                    flag = false;
                    $sync4.trigger("to.owl.carousel", [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync4
            .owlCarousel({
                loop: true,
                margin: 0,
                items: 1,
                nav: false,
                navText: [
                    '<span class="icon fa fa-long-arrow-left"></span>',
                    '<span class="icon fa fa-long-arrow-right"></span>',
                ],
                dots: true,
                center: false,
                autoplay: false,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1,
                        autoWidth: false,
                    },
                    400: {
                        items: 1,
                        autoWidth: false,
                    },
                    600: {
                        items: 1,
                        autoWidth: false,
                    },
                    1000: {
                        items: 1,
                        autoWidth: false,
                    },
                    1200: {
                        items: 1,
                        autoWidth: false,
                    },
                },
            })

            .on("click", ".owl-item", function () {
                $sync3.trigger("to.owl.carousel", [$(this).index(), duration, true]);
            })
            .on("changed.owl.carousel", function (e) {
                if (!flag) {
                    flag = true;
                    $sync3.trigger("to.owl.carousel", [e.item.index, duration, true]);
                    flag = false;
                }
            });
    }












    jQuery(document).ready(function ($) {
        "use strict";
        //  TESTIMONIALS CAROUSEL HOOK
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });


    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });


    /*====== Scroll to top ========*/
    jQuery('.to-top').on('click', function (event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.to-top').fadeIn(1000);
        } else {
            jQuery('.to-top').fadeOut(1000);
        };
    });
    /*====== wow js ========*/
    new WOW().init();



    /*====== magnificPopup Gallery ========*/
    $(".icon-tsdg").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });




    // --home page 04 testimonial plagen

});