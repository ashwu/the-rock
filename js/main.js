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

		$('.frat').on('click', function(){
			$container.isotope({
				filter: '.greek'
			});
		});

		$('.act').on('click', function(){
			$container.isotope({
				filter: '.activism'
			});
		});

		$('.culture').on('click', function(){
			$container.isotope({
				filter: '.cultural'
			});
		});

		$('.show').on('click', function(){
			$container.isotope({
				filter: '.theater'
			});
		});

		$('.philanthropy').on('click', function(){
			$container.isotope({
				filter: '.philan'
			});
		});

		$('.sport').on('click', function(){
			$container.isotope({
				filter: '.sports'
			});
		});

		$('.miscs').on('click', function(){
			$container.isotope({
				filter: '.misc'
			});
		});

	});
});