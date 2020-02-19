jQuery(document).ready(function($){
	$('.client-list').owlCarousel({
		dots:true,
		nav: false,
		navText: ["<i class = 'fa fa-long-arrow-left'></>", "<i class = 'fa fa-long-arrow-right'></>"],
		autoplay: false,
		loop: true,
		items: 3,
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