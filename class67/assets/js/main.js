(function ($) {
	"use strict";

	jQuery(document).ready(function($){
		$(window).scroll(function(){
			var scroll= $(window).scrollTop();
			if(scroll >= 20){
				$(".sticky-menu-area").addClass("is-stick");
			} else {
				$(".sticky-menu-area").removeClass("is-stick");
			}
		});
		
	});


	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

