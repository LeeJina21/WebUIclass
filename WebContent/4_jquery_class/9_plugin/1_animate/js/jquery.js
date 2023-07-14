/**
 * 
 */

$(function(){
	$('#bio h3').css('cursor', ' pointer');
	$('#bio h3').click(function(){
		$(this).next().animate({'height' : 'toggle'}, 'slow', 'easeOutBounce');

	});
});