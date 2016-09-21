
/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        //$('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  --------------
         Menu Settings
        --------------  */

    function removeHash () {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }

    function hideBoots4Menu()
    {
        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });
    }


    // Hide Menu
    $('.menu').on('click', '.menu_button' , function () {
        hideBoots4Menu();
    });
/*ESTO LO COMENTE YOOOOOOOOOOOO
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(40.565934, -122.388118),
        zoom: 16,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(40.565234, -122.388118),
            title:"Boots4 Office"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

    //google.maps.event.addDomListener(window, 'load', initialize);
*/

    // Show Reletive Page Onclick

    $('.menu').on('click', 'div.menu_button' , function(){
        var selectedPage = $(this).data('url_target');
        window.location.hash = selectedPage;
        $('#'+selectedPage).fadeIn(1200);
        $(window).scrollTop(0);
    });


    $('.menu').on('click', 'div.profile-btn', function () {
        setTimeout(function(){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 100);
    });

    $('.menu').on('click', 'div.portfolio-btn', function () {
        setTimeout(function(){
            $('#projects').mixItUp();
        }, 100);
    });



    $('.menu').on('click','div.contact-btn', function () {
        setTimeout(function(){
            google.maps.event.trigger(map,'resize');
        },100);
    });


    // Close Button, Hide Menu
/*
    $('body').on('click', '.close-btn', function () {
        window.location.hash="";
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.page').fadeOut(800);
        removeHash ();
        $(window).scrollTop(0);
    });*/
    

});
