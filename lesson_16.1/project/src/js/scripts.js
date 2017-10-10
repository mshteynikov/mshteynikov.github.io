$(document).ready(function(){


//  Slick Slider
  $('.features-slider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,


	responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 2,
	        prevArrow: '<i class="arrow prev glyphicon glyphicon-chevron-left"></i>',
	        nextArrow: '<i class="arrow next glyphicon glyphicon-chevron-right"></i>',
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        prevArrow: '<i class="arrow prev glyphicon glyphicon-chevron-left"></i>',
	        nextArrow: '<i class="arrow next glyphicon glyphicon-chevron-right"></i>',
	        slidesToScroll: 1
	      }
	    }
	  ]
  });


//  Modal - Получить консултацию
	
	$('.js-show-modal').on('click', function(e){

		e.preventDefault();
		$('.overlay, .popup').fadeIn('slow');
		$('body').addClass('open-modal')	

	});

	$('.overlay, .js-close-modal').on('click', function(e){

		e.preventDefault();
		$('.overlay, .popup').fadeOut('fast');
		$('body').removeClass('open-modal')

	});

});