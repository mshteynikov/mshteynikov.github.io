$(function() {
	
	$('.js-question-title').on('click', function(e){

		e.preventDefault();
		var $this = $(this),
			answer = $this.attr('href');


		if (!$this.hasClass('active')) {
			$('.question-content').slideUp();
			$('.js-question-title').removeClass('active');
		}


		$this.toggleClass('active');
		$(answer).slideToggle(400);
		

	});



});