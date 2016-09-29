/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var username = $("input#username").val();
	var password = $("input#password").val();
  console.log(username);
	console.log(password);

	// $(function() {
	// 	$.ajax({
	// 		type: 'GET',
	// 		contentType: 'application/json',
	// 		accept: 'application/json',
	// 		url: 'https://demo.docusign.net/restapi/v2/login_information',
	// 		data : 'api_password=true&include_account_id_guid=true',
	// 		// username: 'dsemailer.manual+alexlee@gmail.com',
	//     // password: 'test1234',
	// 		// IntegratorKey: '405d6f8d-d54e-41aa-b7fd-ab99a1db5bb7',
	// 		headers: {
	//     					"X-DocuSign-Authentication":{
	// 									"Username":"dsemailer.manual+alexlee@gmail.com",
	// 									"Password":"test1234",
	// 									"IntegratorKey":"405d6f8d-d54e-41aa-b7fd-ab99a1db5bb7"
	// 								}
	// 							// 'Username': 'dsemailer.manual+alexlee@gmail.com',
	// 							// 'Password': 'test1234',
	// 							// 'IntegratorKey': '405d6f8d-d54e-41aa-b7fd-ab99a1db5bb7'
	// 						},
	// 		success: function(data, textStatus, jqXHR){alert('Stock updated successfully. Status: '+textStatus);},
	// 		error: function(jqXHR, textStatus, errorThrown){alert('update Stock error: ' + textStatus);}
	// 	});
	// });

	var envelope = $('#envelope').text()

	var signature = $('#signature').text()

	// for ( i = 0; i < envelope; i++){
	// 	another get call
	// 	signature = signature + each envelope[i] -> signers -> tabs -> signatureid
	// 	pages = pages + each envelope[i] -> signers -> tabs -> signatureid -> pagenumbers
	// }

	var pages = Math.round((signature*5));
	$('#pages').text(pages);

	var trees = Math.round((signature*0.6));
	$('#trees').text(trees);
	var co2 = Math.round((signature*6.35169119*5) );
	$('#co2').text(co2);
	var vex = Math.round(((signature*6.35169119*5)/13.6860625));
	$('#vex').text(vex);
	var water = Math.round((signature*10*5));
	$('#water').text(water);
	var waste = Math.round((signature*2.2*5));
	$('#waste').text(waste);
	var time = Math.round((signature*1.29));
	$('#time').text(time);
	var money = Math.round((signature*27.18));
	$('#money').text(money);
	var employees = Math.round( ((signature*27.18)/7.2)	);
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
