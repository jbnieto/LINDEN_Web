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

/*    $('#portafolio').css({display: 'none'});
    $('#company').css({display: 'none'});*/


    $('.navbar-nav li a').click(function(){
        console.log('CLICK');
        var listItem = $(this);
        var _idx = $(".navbar-nav li a").index(listItem);
        for(i=0; i< $('.navbar-nav li').length; i++ ){
            $("body").animate({
                scrollTop: 0
            },{
                duration: _duration,
                easing: _easing,
                complete: function(){
                }
            });
            if( i != _idx ){
                //console.log( $('.navbar-nav li:eq('+ i +') a').attr('dest') );
                $('.navbar-nav li:eq('+ i +')').removeClass('active');
                $(  $('.navbar-nav li:eq('+ i +') a').attr('dest')  ).animate({
                    height: 0
                },{
                    duration: _duration,
                    easing: _easing,
                    complete: function(){
                        $(this).css({display: 'none'});
                    }
                });
            }else{
                $('.navbar-nav li:eq('+ i +')').addClass('active');
                $( $(this).attr('dest') ).css({
                    display: 'block',
                    height: 'auto'
                });
            }
        }
    });


     /*
    _a = Snap("#icon-assessment");
    _a.select('g:nth-child(1) circle').animate({ stroke: '#fff' }, _speed);
    _a.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
    _a.select('g:nth-child(4)').animate({ fill: '#fff' }, _speed);
    $(".carousel nav ul li a.assessment").mouseover(function(event) {
        event.preventDefault();
        _a.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 1 }, _speed);
        _a.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 0 }, _speed);
    });
    $(".carousel nav ul li a.assessment").mouseout(function(event) {
        event.preventDefault();
        _a.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
        _a.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 1 }, _speed);
    });

    _p = Snap("#icon-publishing");
    _p.select('g:nth-child(1) circle').animate({ stroke: '#fff' }, _speed);
    _p.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
    _p.select('g:nth-child(4)').animate({ fill: '#fff' }, _speed);
    $(".carousel nav ul li a.publishing").mouseover(function(event) {
        event.preventDefault();
        _p.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 1 }, _speed);
        _p.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 0 }, _speed);
    });
    $(".carousel nav ul li a.publishing").mouseout(function(event) {
        event.preventDefault();
        _p.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
        _p.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 1 }, _speed);
    });

    _c = Snap("#icon-consulting");
    _c.select('g:nth-child(1) circle').animate({ stroke: '#fff' }, _speed);
    _c.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
    _c.select('g:nth-child(4)').animate({ fill: '#fff' }, _speed);
    $(".carousel nav ul li a.consulting").mouseover(function(event) {
        event.preventDefault();
        _c.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 1 }, _speed);
        _c.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 0 }, _speed);
    });
    $(".carousel nav ul li a.consulting").mouseout(function(event) {
        event.preventDefault();
        _c.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
        _c.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 1 }, _speed);
    });

    _cs = Snap("#icon-custom-software");
    _cs.select('g:nth-child(1) circle').animate({ stroke: '#fff' }, _speed);
    _cs.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
    _cs.select('g:nth-child(4)').animate({ fill: '#fff' }, _speed);
    $(".carousel nav ul li a.custom-software").mouseover(function(event) {
        event.preventDefault();
        _cs.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 1 }, _speed);
        _cs.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 0 }, _speed);
    });
    $(".carousel nav ul li a.custom-software").mouseout(function(event) {
        event.preventDefault();
        _cs.select('g:nth-child(2)').animate({ fill: '#fff', opacity: 0 }, _speed);
        _cs.select('g:nth-child(3)').animate({ fill: '#fff', opacity: 1 }, _speed);
    });





    _e = Snap("#btn-see-case-studies");
    $(".btn-see-case").mouseover(function(event) {
        event.preventDefault();
        _e.select('path:nth-child(1)').animate({ fillOpacity: 1, fill: "#838680", strokeWidth: 0 }, _speed);
        _e.select('path:nth-child(2)').animate({ opacity: 0 }, _speed);
        _e.select('circle').animate({ opacity: 1 }, _speed);
    });
    $(".btn-see-case").mouseout(function(event) {
        event.preventDefault();
        _e.select('path:nth-child(1)').animate({ fillOpacity: 0, stroke: '#838680', strokeWidth: 1 }, _speed);
        _e.select('path:nth-child(2)').animate({ opacity: 1 }, _speed);
        _e.select('circle').animate({ opacity: 0 }, _speed);
    });

    _up = Snap("#btn-up");
    $(".btn-back").mouseover(function(event) {
        event.preventDefault();
        _up.select('polyline').animate({ stroke: '#FF7700' }, _speed);
    });
    $(".btn-back").mouseout(function(event) {
        event.preventDefault();
        _up.select('polyline').animate({ stroke: '#808184' }, _speed);
    });

    _sm_f = Snap("#social-media-facebook");
    $("#social-media li:eq(0) a").mouseover(function(event) {
        event.preventDefault();
        _sm_f.select('g:nth-child(2)').animate({ opacity: 0 }, _speed);
        _sm_f.select('g:nth-child(3)').animate({ opacity: 1 }, _speed);
    });
    $("#social-media li:eq(0) a").mouseout(function(event) {
        event.preventDefault();
        _sm_f.select('g:nth-child(2)').animate({ opacity: 1 }, _speed);
        _sm_f.select('g:nth-child(3)').animate({ opacity: 0 }, _speed);
    });

    _sm_t = Snap("#social-media-twitter");
    $("#social-media li:eq(1) a").mouseover(function(event) {
        event.preventDefault();
        _sm_t.select('g:nth-child(2)').animate({ opacity: 0 }, _speed);
        _sm_t.select('g:nth-child(3)').animate({ opacity: 1 }, _speed);
    });
    $("#social-media li:eq(1) a").mouseout(function(event) {
        event.preventDefault();
        _sm_t.select('g:nth-child(2)').animate({ opacity: 1 }, _speed);
        _sm_t.select('g:nth-child(3)').animate({ opacity: 0 }, _speed);
    });

    _sm_y = Snap("#social-media-youtube");
    $("#social-media li:eq(2) a").mouseover(function(event) {
        event.preventDefault();
        _sm_y.select('g:nth-child(2)').animate({ opacity: 0 }, _speed);
        _sm_y.select('g:nth-child(3)').animate({ opacity: 1 }, _speed);
    });
    $("#social-media li:eq(2) a").mouseout(function(event) {
        event.preventDefault();
        _sm_y.select('g:nth-child(2)').animate({ opacity: 1 }, _speed);
        _sm_y.select('g:nth-child(3)').animate({ opacity: 0 }, _speed);
    });*/


    /*var speed = 250,
    easing = mina.easeinout;

    [].slice.call ( document.querySelectorAll( '.main-icons-section ul li a' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ));

        el.addEventListener( 'mouseenter', function() {
            console.log(shape);
        } );

        el.addEventListener( 'mouseleave', function() {
            console.log(shape);
        } );
    } );*/
});

