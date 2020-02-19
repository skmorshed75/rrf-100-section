(function ($) {
	"use strict";

	
	jQuery(document).ready(function($){
//		$('.video-popup').magnificPopup({
//			type:'video',
//		});		
		
		$(".client-carousel").owlCarousel({
			items: 3,
			autoplay: true,
			loop: true,
			margin: 30,
			nav: false,
			//navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			dot:true
			
		});
		
		$('.product-list').masonry({
		  // options
		  //itemSelector: '.grid-item',
		  //columnWidth: 200
		});		
		
		
		
	});

	

	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

