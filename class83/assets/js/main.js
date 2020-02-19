(function ($) {
	"use strict";

	jQuery(document).ready(function($){
		$(".webdesign-progressbar").circleProgress({
			size: 200,
			value: .90,
			fill: "#0DBBC1",
			emptyFill: "#fff",
			thickness: 2
		}).on('circle-animation-progress', function(event, progress) {
    		$(this).find('.progressbar-percent').html(Math.round(90 * progress) + '<i>%</i>');
  		});
		
		$(".graphicdesign-progressbar").circleProgress({
			size: 200,
			value: .60,
			fill: { gradient: ["#0681C4", "red", "#0681C4"] },
			emptyFill: "#fff",
			thickness: 10,
		}).on('circle-animation-progress', function(event, progress) {
    		$(this).find('.progressbar-percent').html(Math.round(60 * progress) + '<i>%</i>');
  		});
		
		$(".logodesign-progressbar").circleProgress({
			size: 200,
			value: .75,
//			fill: "#0DBBC1",
			fill: {gradient: [['#FFA500', .2], ['#4ac5f8', .8], ["red", .3]], gradientAngle: Math.PI / 4},
			emptyFill: "#ddd",
			thickness: 5,
			insertMode:"append"
		}).on('circle-animation-progress', function(event, progress) {
    		$(this).find('.progressbar-percent').html(Math.round(75 * progress) + '<i>%</i>');
  		});
		
//  $('#circle').circleProgress({
//    value: 0.75,
//    size: 80,
//    fill: {
//      gradient: ["red", "orange"]
//    }
//  });		
	});



	
	
	
	

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

