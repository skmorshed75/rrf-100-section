(function ($) {
	"use strict";

	
	jQuery(document).ready(function($){
		$('.video-popup').magnificPopup({
			type:'video',
		});		
		
		$(".staff-carousel").owlCarousel({
			items: 4,
			autoplay: false,
			loop: true,
			margin: 50,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
		});
		
		
		
		
	});

	

	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

