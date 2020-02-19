jQuery(document).ready(function($){
	$('.carousel-area').owlCarousel({
		dots:true,
		nav: true,
		navText: ["<i class = 'fa fa-long-arrow-left'></>", "<i class = 'fa fa-long-arrow-right'></>"],
		autoplay: false,
		loop: true,
		items: 4,
		margin: 30,
	});
	
//		$(".carousel-area").owlCarousel({
//			items: 4,
//			autoplay: false,
//			loop: true,
//			margin: 50,
//			nav: true,
//			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
//		});	
//	
});