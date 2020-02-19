(function ($) {
	"use strict";

	
	jQuery(document).ready(function($){
		//Check whether window is Top position.
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$(".scroll_top").fadeIn();
			} else {
				$(".scroll_top").fadeOut();				
			}			
		});
		//Click event on Scroll						
		$(".scroll_top").on('click', function(){
			$('html,body').animate({scrollTop : 0},800);	
			return false;
		});
		
		
		
	});

	jQuery(window).load(function(){
		
	});
	
	

}(jQuery));	
