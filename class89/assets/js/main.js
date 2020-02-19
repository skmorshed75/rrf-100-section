(function ($) {
	"use strict";

	 
	jQuery(document).ready(function($){
		
		//ACTIVATE OWL CAROUSEL FOR SLIDER
		$(".carousel-list").owlCarousel({
			items:1,
			dots:true,
			nav:false,
			loop:true,
			autoplay:true
		});
		//END ACTIVATE OWL CAROUSEL FOR SLIDER

		
		//ACTIVATE OWL CAROUSEL FOR PARTNERS CAROUSEL
		$(".partners-list").owlCarousel({ 
			items:5,
			dots:false,
			nav:false,
			loop:true,
			autoplay:true,
			margin:30,
			responsive:{
				0:{
					items:1,
					nav:false
				},
				600:{
					items:3,
					nav:false
				},
				1000:{
					items:5,
					nav:false,
					loop:false
				}
			}
		});
		//END ACTIVATE OWL CAROUSEL FOR PARTNERS CAROUSEL
		
		
		//Activate Ajax Chimp	
		$(".contact-us").ajaxChimp({
			url: 'https://000webhostapp.us18.list-manage.com/subscribe/post?u=babda16e320c83a52259ebb8c&amp;id=18b3bccc6c'
		});
		//End Activate Ajax Chimp

		
		//SCROLL TOP FUNCTION START
		$(window).scroll(function(){
			if ($(this).scrollTop() > 200) {
				$(".scroll-to-btn").fadeIn();
			} else {
				$(".scroll-to-btn").fadeOut();
			}					
		});
		//END SCROLL TOP FUNCTION START
		
		
		//SCROLL TOP BUTTON CLICK						
		$(".scroll-to-btn").click(function(){
			$("html,body").animate({
				scrollTop:0
				}, 1500);
		});
		//SCROLL TOP END		

		
		//JQUERY STICKY MENU
		$(".sticky-area").sticky({
			topSpacing:0
		});
		//END JQUERY STICKY MENU		

		
		//JQuery Smooth Menu giving effect while scrolling
		$("li.smooth-menu a, .logo a").bind('click', function(event){
			var $anchor = $(this);
			var headerH = '60';
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');
			event.preventDefault();
		});
		//END JQuery Smooth Menu giving effect while scrolling
		
		
		//BOOTSTRAP SCROLLSPY FOR NAV-BAR
//		$('body').scrollspy({
//			target:'#navbar-example',
//			offset:50
//		});
		//END BOOTSTRAP SCROLLSPY FOR NAV-BAR

		//JQUERY PARALLAX ACTIVATION
		$('.myparallax, .about-parallax').scrolly({
			bgParallax: true
		});		
		
		//JQUERY SLICKNAV MOBILE MENU ACTIVATION
		$(".main-menu").slicknav({
			label: ''
		});
		
	});

	
	

	
	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	


