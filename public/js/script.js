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
});
