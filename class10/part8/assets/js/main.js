(function ($) {
	"use strict";

	
	jQuery(document).ready(function($){
//		$('.video-popup').magnificPopup({
//			type:'video',
//		});		
		
//		$(".client-carousel").owlCarousel({
//			items: 3,
//			autoplay: true,
//			loop: true,
//			margin: 30,
//			nav: false,
//			//navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
//			dot:true
//			
//		});
		//Off Canvas Menu
		$(".menu-triger").on("click", function() {
			$(".off-canvas-menu, .off-canvas-overlay").addClass("active");	
			return false;
		});
		
		$("span.btn-menu-close, .off-canvas-overlay").on("click", function() {
			$(".off-canvas-menu, .off-canvas-overlay").removeClass("active");	
			return false;
		});
		
		
		
		
		$(".slider-item").owlCarousel({
			items: 1,
			loop: true,
			dots: false,
			autoplay: true,
			navSpeed: 1000,
			nav: true,
			navText: ['<i class = "fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>']
			
		});
		
		//Promo-Content
		$(".product-promotion").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			autoplay: false,
			navSpeed: 0,
			nav: false
			
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

