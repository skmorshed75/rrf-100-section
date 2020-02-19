(function ($) {
	"use strict";

	jQuery(document).ready(function($){
//$(this).addClass("animated", 1000);addClass('red', {duration:500})
	$(".select-theme-1").on('click', function(){
		$("section").addClass('theme-1', {duration:5000}).removeClass('theme-2');
		$(".select-theme-2").removeClass('active');
		$(".select-theme-1").addClass('active');
		
		return false;
		
	});		
		

	$(".select-theme-2").on('click', function(){
		$("section").addClass('theme-2').removeClass('theme-1');		
		$(".select-theme-1").removeClass('active');
		$(".select-theme-2").addClass('active');
		return false;
		
	});		
		
	});


	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

