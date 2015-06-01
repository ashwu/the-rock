$(document).ready(function(){
	// initializing isotope
		

	$(function() {
		var $container = $('#photo-container').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});

		$('.button').on('click', function(){
			$container.isotope({
				filter: '.greek'
			});
		});

		$('.button').on('click', function(){
			$container.isotope({
				filter: '.greek'
			});
		});
	});

});