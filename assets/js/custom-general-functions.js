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
        autoplaySpeed: 8000
    });

    $('.btn-apply').click(function(){
        $('#modal').modal();
        $('#modal h4').text( $(this).attr('data-title') );
    });

    $("section nav ul li a").click(function(event){
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
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon_custom_software' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon_assessment' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon_consulting' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon_publishing' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 98.082, h : 90.062 } } );
    new svgIcon( document.querySelector( '.si-btn_sm_fb' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );
    new svgIcon( document.querySelector( '.si-btn_sm_tw' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );
    new svgIcon( document.querySelector( '.si-btn_sm_yt' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 50.585, h : 50.585 } } );

});

