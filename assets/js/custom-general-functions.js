$(document).ready(function() {
    resizeScene = function() {
        $('.scene.scale-image').height(viewportSize.getHeight());
    }
    resizeScene();
    $(window).resize(function() {
        resizeScene();
    });
    _speed = 250;
    _velocity = 1200; // Pix x Sec

    _easing = 'easeOutCubic';
    _duration = 250;

    _speedOver = 200;

    $('.slick-carousel-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 8000,
        dots: true
    });



    $('#port-projects ul li a').click(function() {

        $($(this).attr('data-target')).modal();
        $('.slick-track').css({
            width: '100%',
            height: '500px',
            overflow: 'hidden'
        });
        $('.slick-slide').css({
            width: '100%',
            height: '100%'
        });
    });

    $("a.dest").click(function(event) {
        event.preventDefault();
        $(window).unbind('scroll', scrolling);
        $("body").animate({
            scrollTop: $($(this).attr('dest')).offset().top
        }, {
            duration: _velocity,
            easing: _easing,
            complete: function() {
                relocateBtnBack();
                $(window).bind('scroll', scrolling);
            }
        });
    });
    relocateBtnBack = function() {
        /*$('.btn-back').stop().show().css({
            top: $("body").scrollTop() + viewportSize.getHeight() - $('.btn-back').height() - parseInt($('.btn-back').css('marginBottom')),
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        }, {
            duration: _duration
        });*/
    }
    $('.btn-back').click(function(event) {
        event.preventDefault();
        $(this).stop().hide();
        $(window).unbind('scroll', scrolling);
        $("body").animate({
            scrollTop: 0
        }, {
            duration: _velocity,
            easing: _easing,
            complete: function() {}
        });
    });
    var scrollTimeout = null;
    scrolling = function() {
        /*        $('.btn-back').stop().hide();
        $("body").stop();
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function(){endScroll()},250);*/
    };
    $(window).bind('scroll', scrolling);
    endScroll = function() {
        _tmp = Math.round($("body").scrollTop() / viewportSize.getHeight());
        $(window).unbind('scroll', scrolling);
        $("body").stop().animate({
            scrollTop: $('.scene:eq(' + _tmp + ')').offset().top
        }, 250, function() {
            relocateBtnBack();
            $(window).bind('scroll', scrolling);
        })
    }

    $('.navbar-nav li a').click(function() {
        console.log('CLICK');

        $("body").animate({
            scrollTop: $($(this).attr('dest')).offset().top
        }, {
            duration: _duration,
            easing: _easing,
            complete: function() {}
        });
    });


    [].slice.call(document.querySelectorAll('.si-icons-default > .si-icon')).forEach(function(el) {
        var svgicon = new svgIcon(el, svgIconConfig);
    });

    new svgIcon(document.querySelector('#home .si-icons-hover .si-btn_know'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 373.113,
            h: 216.335
        }
    });

    // Landing page icons
    new svgIcon(document.querySelector('#home .si-icons-hover .si-icon_custom_software'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 98.082,
            h: 90.062
        },
        onLoad : function() { 
            $('span.si-icon_custom_software svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#home .si-icons-hover .si-icon_assessment'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 98.082,
            h: 90.062
        },
        onLoad : function() { 
            $('span.si-icon_assessment svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#home .si-icons-hover .si-icon_consulting'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 98.082,
            h: 90.062
        },
        onLoad : function() { 
            $('span.si-icon_consulting svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#home .si-icons-hover .si-icon_publishing'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 98.082,
            h: 90.062
        },
        onLoad : function() { 
            $('span.si-icon_publishing svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#home .si-icons-hover .si-icon_big_data'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 98.082,
            h: 90.062
        },
        onLoad : function() { 
            $('span.si-icon_big_data svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });

    // Portafolio icons
    new svgIcon(document.querySelector('#portafolio .main-icons-section .si-icons-hover .si-port_assessment'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 85.94,
            h: 115.925
        },
        onLoad : function() { 
            $('span.si-port_assessment svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#portafolio .main-icons-section .si-icons-hover .si-port_featured'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 85.94,
            h: 115.925
        },
        onLoad : function() { 
            $('span.si-port_featured svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#portafolio .main-icons-section .si-icons-hover .si-port_custom'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 85.94,
            h: 115.925
        },
        onLoad : function() { 
            $('span.si-port_custom svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#portafolio .main-icons-section .si-icons-hover .si-port_educational'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 85.94,
            h: 115.925
        },
        onLoad : function() { 
            $('span.si-port_educational svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });
    new svgIcon(document.querySelector('#portafolio .main-icons-section .si-icons-hover .si-port_projects'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 85.94,
            h: 115.924
        },
        onLoad : function() { 
            $('span.si-port_projects svg').attr({
                height: '100%',
                width: '100%'
            });
        }
    });

    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_art'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_business'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_english'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_french'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_health'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_humanity'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_mathematics'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_modern_and_classical'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_reading_and_language'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_reference_books'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_religion'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_science'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_social_studies'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_spanish'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_trade_books_for_adults'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });
    new svgIcon(document.querySelector('#port-projects .si-icons-hover .si-ps_trade_books_for_children'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 169.902,
            h: 90.08
        }
    });

    //new svgIcon( document.querySelector( '.si-btn_sm_fb' ), svgIconConfig, { easing : mina.easein, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );
    new svgIcon(document.querySelector('.si-btn_sm_tw'), svgIconConfig, {
        speed: _speedOver,
        easing: mina.easein,
        evtoggle: 'mouseover',
        size: {
            w: 50.585,
            h: 50.585
        }
    });
    //new svgIcon( document.querySelector( '.si-btn_sm_yt' ), svgIconConfig, { easing : mina.easein, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );

    // Scrolling functions

    var ease = "Sine.easeIn";
    // var controller = new ScrollMagic({container: '#services'});
    var controller = new ScrollMagic();

    var timeline_home = new TimelineMax();
    var tween_home = TweenMax.fromTo("#home nav.main-icons-section", 0.5, {
        css: { "opacity": 1 },
        ease: ease
    }, {
        css: { "margin-top": "300px", "opacity": 0 },
        ease: ease
    });
    var tween_intro = TweenMax.fromTo("#home .btn_know", 0.5, {
        css: { "opacity": 1 },
        ease: ease
    }, {
        css: { "bottom": "-300px", "opacity": 0 },
        ease: ease
    });
    timeline_home
        .add(tween_intro)
        .add(tween_home);
    scene_home = new ScrollScene({
            triggerElement: "#home .trigger_1",
            duration: 300
        })
        .setTween(timeline_home)
        //.setPin("#home .main-icons-section ul" )
        .addTo(controller)
        .addIndicators();
});
