(function ($) {
	"use strict";

	jQuery(document).ready(function($){
		$(".portfolio-list ul li").on('click', function(){
			$(".portfolio-list ul li").removeClass('active');
			$(this).addClass('active');
			
			var proj_filter = $(this).attr('data-filter');
			$(".portfolio-items").isotope({
				filter : proj_filter,
			});
		});
		/*Jquery Counter Up Active*/
		$(".counter-up span").counterUp({
			delay:10,
			time:3000
		});
	});


	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

