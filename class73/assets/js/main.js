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

/*COUNT-DOWN TIMER*/
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

/*COUNT-DOWN TIMER END*/

    jQuery(window).load(function($){


        
    });

	
	

}(jQuery));	

