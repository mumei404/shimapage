/*jslint browser: true*/
/*global $, jQuery, alert*/
/*jslint white: true */

$(function(){
    "use strict";
    $('.photo').click(function(){
        $('.photo-modal').fadeIn();
    });
    
    $('.close-modal').click(function(){
        $('.photo-modal').fadeOut();
    });
    
    $('.bn-btn').click(function(){
        
        var $display = $('.active');
        $('.active').removeClass('active');
        if ($(this).hasClass('next')) {
            $display.next().addClass('active');
        } else {
            $display.prev().addClass('active');
        }
        
        var slideIndex = $('.slide').index($('.active'));
        
        $('.bn-btn').show();
        
        if(slideIndex === 0) {
            $('.back').hide();
        } else if(slideIndex === $('.slide').length - 1) {
            $('.next').hide();
        }
    });
    
    /*if (navigator.hasOwnProperty('geolocation')) {
        $('.js-geolocation').show();
    } else {
        $('.js-geolocation').hide();
        alert("No");
    }
    
    
    
    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: 'c',
            success: function(weather) {
                var html;
                html = '<h2><i class="icon-' + weather.code + '"></i>' + weather.temp + '&deg;'
                + weather.units.temp + '</h2>';
                html += '<ul><li>' + weather.city + ',' + weather.region + '</li>';
                html += '<li class="currently">' + weather.currently + '</li>';
                html += '<li>' + weather.alt.temp + '&deg;C</li></ul>';
                
                $("#weather").html(html);
            },
            error: function(error) {
                $("#weather").html('<p>' + error + '</p>') ;
            }
        });
    }
    $('.js-geolocation').on('click', function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        });
    });
    
    loadWeather('Chiba', '');*/
    
});
