$(document).ready(function(){
	// initializing isotope
		

	$(function() {
		var $container = $('#photo-container').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		});

		$('.all').on('click', function(){
			$container.isotope({
				filter: '.item'
			});
		});

		$('.greek').on('click', function(){
			$container.isotope({
				filter: '.greek'
			});
		});

		$('.activism').on('click', function(){
			$container.isotope({
				filter: '.activism'
			});
		});

		$('.cultural').on('click', function(){
			$container.isotope({
				filter: '.cultural'
			});
		});

		$('.theater').on('click', function(){
			$container.isotope({
				filter: '.theater'
			});
		});

		$('.philan').on('click', function(){
			$container.isotope({
				filter: '.philan'
			});
		});

		$('.sports').on('click', function(){
			$container.isotope({
				filter: '.sports'
			});
		});

		$('.misc').on('click', function(){
			$container.isotope({
				filter: '.misc'
			});
		});

	});
});