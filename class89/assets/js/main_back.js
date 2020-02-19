(function ($) {
	"use strict";

	jQuery(document).ready(function($){
		$(".carousel-list").owlCarousel({ //ACTIVATE OWL CAROUSEL FOR SLIDER
			items:1,
			dots:true,
			nav:false,
			loop:true,
			autoplay:false
		});
		
		$(".partners-list").owlCarousel({ //ACTIVATE OWL CAROUSEL FOR PARTNERS CAROUSEL
			items:5,
			dots:false,
			nav:false,
			loop:true,
			autoplay:false,
			margin:30
		});
		
		//Activate Ajax Chimp	
		$(".contact-us").ajaxChimp({
			url: 'https://000webhostapp.us18.list-manage.com/subscribe/post?u=babda16e320c83a52259ebb8c&amp;id=18b3bccc6c'
		});
		//End Activate Ajax Chimp
				
		// SCROLL TOP FUNCTION START
		$(window).scroll(function(){
			if ($(this).scrollTop() > 300) {
				$(".scroll-to-btn").fadeIn();
				scroll_pos = $(this).scrollTop();
				
			} else {
				$(".scroll-to-btn").fadeOut();
			}				
		});

		// SCROLL TOP BUTTON CLICK						
		$(".scroll-to-btn").click(function(){
			$("html,body").animate({
				scrollTop:0
				}, 500);
		});
		// SCROLL TOP END		


		
		
		
		
		
	});

	
	

	
	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	


