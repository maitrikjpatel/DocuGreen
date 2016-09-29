/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var signature = $('#signature').text();
	// console.log(signature);

	var pages = Math.round((signature*5));
	// console.log(pages);
	$('#pages').text(pages);

	var trees = Math.round((signature*0.6));
	// console.log(trees);
	$('#trees').text(trees);

	var co2 = Math.round((signature*6.35169119*5) );
	// console.log(co2);
	$('#co2').text(co2);

	var vex = Math.round(((signature*6.35169119*5)/13.6860625));
	// console.log(vex);
	$('#vex').text(vex);

	var water = Math.round((signature*10*5));
	// console.log(water);
	$('#water').text(water);

	var waste = Math.round((signature*2.2*5));
	// console.log(waste);
	$('#waste').text(waste);

	var time = Math.round((signature*1.29));
	// console.log(time);
	$('#time').text(time);

	var money = Math.round((signature*27.18));
	// console.log(money);
	$('#money').text(money);

	var employees = Math.round( ((signature*27.18)/7.2)	);
	// console.log(employees);
	$('#employees').text(employees);

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1140px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 320px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 250);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly();

	});

})(jQuery);
