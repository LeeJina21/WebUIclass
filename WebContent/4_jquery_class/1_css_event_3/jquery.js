/**
 * 
 */

$(function() {
	/*$('.fontSize button:nth-child(1)').click(function() {
		$('#txt').css('fontSize', '+=5');
	});
	$('.fontSize button:nth-child(2)').click(function() {
		$('#txt').css('fontSize', '-=5');
	});*/

	
	/*$('button').each(function() {
		
		$(this).click(function() {
			if ($(this).text() == ' + ') {
				$('#txt').css('fontSize', '+=5');
			} else {
				$('#txt').css('fontSize', '-=5');
			}
		});

	});*/
	

	$('.fontSize button').click(function() {
		if ($(this).text() == ' + ') {
			$('#txt').css('fontSize', '+=5');
		} else {
			$('#txt').css('fontSize', '-=5');
		}
	});


	// 폰트 변경
	$('#fontstyle').change(function() {
		var font = $('option:selected').text();
		
		$('#txt').css('font-family', font);
	});

});