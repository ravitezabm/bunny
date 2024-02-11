(function ($) {
    "use strict";
    
    // here you can go
    var slider_three_js = function ($scope, $) { 

        $('.main-slider-carousel').each(function() { 
        let ajax_bannerSlider = $(this).data('owl');
       console.log(ajax_bannerSlider.loop);
        if ($('.main-slider-carousel').length) {
            $('.main-slider-carousel').owlCarousel({
                loop:JSON.parse(ajax_bannerSlider.loop),
                margin:0,
                nav:JSON.parse(ajax_bannerSlider.arrows),
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                active: true,
                autoplay: JSON.parse(ajax_bannerSlider.autoplay),
                autoplayTimeout:parseInt(ajax_bannerSlider.autoplay_speed),
                autoplayHoverPause:false,
                navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-right-arrow-angle"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1200:{
                        items:1
                    }
                }
            });    		
        }
      });

    }


    var testimonial_one_js = function ($scope, $) {   
        if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

            var $sync3 = $(".client-testimonial-carousel"),
                $sync4 = $(".client-thumbs-carousel"),
                flag = false,
                duration = 500;
    
                $sync3
                    .owlCarousel({
                        loop:false,
                        items: 1,
                        margin: 0,
                        nav: true,
                        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                        dots: false,
                        autoplay: true,
                        autoplayTimeout: 5000
                    })
                    .on('changed.owl.carousel', function (e) {
                        if (!flag) {
                            flag = false;
                            $sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
                            flag = false;
                        }
                    });
    
                $sync4
                    .owlCarousel({
                        loop:false,
                        margin:10,
                        items: 1,
                        nav: false,
                        navText: [ '<span class="icon fa fa-long-arrow-left"></span>', '<span class="icon fa fa-long-arrow-right"></span>' ],
                        dots: true,
                        center: false,
                        autoplay: true,
                        autoplayTimeout: 5000,
                        responsive: {
                            0:{
                                items:1,
                                autoWidth: false
                            },
                            400:{
                                items:1,
                                autoWidth: false
                            },
                            600:{
                                items:1,
                                autoWidth: false
                            },
                            1000:{
                                items:1,
                                autoWidth: false
                            },
                            1200:{
                                items:1,
                                autoWidth: false
                            }
                        },
                    })
                    
            .on('click', '.owl-item', function () {
                $sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;		
                    $sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
        }
    }

    var gallery_js = function ($scope, $) {  
        if ($('.gallery-carousel').length) {
            $('.gallery-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:false,
                smartSpeed: 3000,
                autoplay: true,
                navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    },
                    600:{
                        items:3
                    },
                    800:{
                        items:4
                    },			
                    1200:{
                        items:5
                    }
    
                }
            });    		
        }
    
    }
    var testimonial_three_js = function ($scope, $) {  
        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                loop:true,
                margin:30,
                nav:true,
                smartSpeed: 3000,
                autoplay: 4000,
                navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:2
                    }
                }
            });    		
        }
    }
    var classes_four_js = function ($scope, $) {  
        if ($('.classes-carousel').length) {
            $('.classes-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop:true,
                margin:30,
                nav:true,
                singleItem:true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: true,
                autoplayTimeout:10000,
                navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-right-arrow-angle"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:3
                    }
                }
            });    		
        }
    }

    var services_one_js = function ($scope, $) { 
        $('.services-carousel').each(function() { 
        let ajax_serviceSlider = $(this).data('owl');
        if ($('.services-carousel').length) {
            $('.services-carousel').owlCarousel({
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                loop:JSON.parse(ajax_serviceSlider.loop),
                margin:30,
                nav:JSON.parse(ajax_serviceSlider.arrows),
                singleItem:true,
                smartSpeed: 500,
                autoHeight: false,
                autoplay: JSON.parse(ajax_serviceSlider.autoplay),
                autoplayTimeout:parseInt(ajax_serviceSlider.autoplay_speed),
                autoplayHoverPause:false,
                navText: [ '<span class="flaticon-back-1"></span>', '<span class="flaticon-right-arrow-angle"></span>' ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    800:{
                        items:2
                    },
                    1024:{
                        items:3
                    }
                }
            });    		
        }
      });  
    }

  
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/slider_one.default', slider_three_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/slider_two.default', slider_three_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/slider_three.default', slider_three_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_one.default', testimonial_one_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonials_two.default', testimonial_one_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_three.default', testimonial_three_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/gallery.default', gallery_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/page_classes_four.default', classes_four_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/services_one.default', services_one_js);
    });

})(jQuery);
