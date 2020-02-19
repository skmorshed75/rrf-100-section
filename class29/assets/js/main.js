(function ($) {
	"use strict";

	
	jQuery(document).ready(function($){
		$(".image-title ul li").on('click', function(){
			
			$(".image-title ul li").removeClass("active");
			$(this).addClass("active");
			
			var selector = $(this).attr('data-filter');
			$(".image-list").isotope({
				filter: selector
			});
		});
		
		
		
		
	});

	jQuery(window).load(function(){
		jQuery(".image-list").isotope();
		
	});
	
	

}(jQuery));	
