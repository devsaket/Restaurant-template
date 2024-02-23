$(document).ready(function ($) {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		items: 6
	});
	var owl = $(".owl-carousel");
	owl.owlCarousel();
	$(".next-btn").click(function () {
		owl.trigger("next.owl.carousel");
	});
	$(".prev-btn").click(function () {
		owl.trigger("prev.owl.carousel");
	});

    function repeatStringNumTimes(string, times) {
        let i=0, s=''
        while(i<times){
            s = s+ string + ' '
            i= i+1
        }
        return s
    }

    $('.stars').html(repeatStringNumTimes('<i class="fa-solid fa-star" style="color: #e5a50a;"></i>',4))

    
});
