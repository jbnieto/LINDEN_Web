$( document ).ready(function() {
    resizeScene = function(){
        $('.scene').height(viewportSize.getHeight());
    }
    resizeScene();
    $(window).resize(function() {
        resizeScene();
    });
    _speed = 250;
    _velocity = 1200; // Pix x Sec

    _easing = 'easeOutCubic';
    _duration = 750;

    $('.slick-carousel-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 8000,
        dots: true
    });



    $('#port-projects ul li a').click(function(){

        $( $(this).attr('data-target') ).modal();
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

    $("a.dest").click(function(event){
        event.preventDefault();
        $( window ).unbind('scroll', scrolling);
        $("body").animate({
            scrollTop: $( $(this).attr('dest')).offset().top
        },{
            duration: _velocity,
            easing: _easing,
            complete: function(){
                relocateBtnBack();
                $( window ).bind('scroll', scrolling);
            }
        });
    });
    relocateBtnBack = function(){
        $('.btn-back').stop().show().css({
            top: $("body").scrollTop() + viewportSize.getHeight() - $('.btn-back').height() - parseInt($('.btn-back').css('marginBottom')),
            display: 'block',
            opacity: 0
        }).animate({
            opacity: 1
        },{
            duration: _duration
        });
    }
    $('.btn-back').click(function(event){
        event.preventDefault();
        $(this).stop().hide();
        $( window ).unbind('scroll', scrolling);
        $("body").animate({
            scrollTop: 0
        },{
            duration: _velocity,
            easing: _easing,
            complete: function(){
            }
        });
    });
    var scrollTimeout = null;
    scrolling = function(){
/*        $('.btn-back').stop().hide();
        $("body").stop();
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function(){endScroll()},250);*/
    };
    $( window ).bind('scroll', scrolling);
    endScroll = function(){
        _tmp = Math.round( $("body").scrollTop() / viewportSize.getHeight() );
        $( window ).unbind('scroll', scrolling);
        $("body").stop().animate({
            scrollTop: $('.scene:eq('+ _tmp +')').offset().top
        }, 250, function(){
            relocateBtnBack();
            $( window ).bind('scroll', scrolling);
        })
    }

    $('.navbar-nav li a').click(function(){
        console.log('CLICK');

        $("body").animate({
            scrollTop: $(  $(this).attr('dest')  ).offset().top
        },{
            duration: _duration,
            easing: _easing,
            complete: function(){
            }
        });
    });


    [].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
        var svgicon = new svgIcon( el, svgIconConfig );
    } );

    new svgIcon( document.querySelector( '#services .si-icons-hover .si-btn_know' ),                svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 268, h : 71.477 } } );


    new svgIcon( document.querySelector( '#services .si-icons-hover .si-icon_custom_software' ),    svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '#services .si-icons-hover .si-icon_assessment' ),         svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '#services .si-icons-hover .si-icon_consulting' ),         svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '#services .si-icons-hover .si-icon_publishing' ),         svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '#services .si-icons-hover .si-icon_big_data' ),           svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );

    new svgIcon( document.querySelector( '#portafolio .main-icons-section .si-icons-hover .si-port_assessment' ),   svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 176.785, h : 90.08 } } );
    new svgIcon( document.querySelector( '#portafolio .main-icons-section .si-icons-hover .si-port_featured' ),     svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 176.785, h : 90.08 } } );
    new svgIcon( document.querySelector( '#portafolio .main-icons-section .si-icons-hover .si-port_custom' ),       svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 176.785, h : 90.08 } } );
    new svgIcon( document.querySelector( '#portafolio .main-icons-section .si-icons-hover .si-port_educational' ),  svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 176.785, h : 90.08 } } );
    new svgIcon( document.querySelector( '#portafolio .main-icons-section .si-icons-hover .si-port_projects' ),     svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 176.785, h : 90.08 } } );

    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_art' ),                         svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_business' ),                    svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_english' ),                     svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_french' ),                      svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_health' ),                      svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_humanity' ),                    svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_mathematics' ),                 svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_modern_and_classical' ),        svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_reading_and_language' ),        svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_reference_books' ),             svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_religion' ),                    svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_science' ),                     svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_social_studies' ),              svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_spanish' ),                     svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_trade_books_for_adults' ),      svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );
    new svgIcon( document.querySelector( '#port-projects .si-icons-hover .si-ps_trade_books_for_children' ),    svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 169.902, h : 90.08 } } );

    //new svgIcon( document.querySelector( '.si-btn_sm_fb' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );
    new svgIcon( document.querySelector( '.si-btn_sm_tw' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );
    //new svgIcon( document.querySelector( '.si-btn_sm_yt' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );

});

