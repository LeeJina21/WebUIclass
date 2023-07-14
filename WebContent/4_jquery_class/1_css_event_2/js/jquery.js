/**
 * 
 */

$(function(){
	$('.rollover').each(function(){	// 각각 적용 each
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');	// 이미지 테이긔 속성('src')
		var src_on = src_off.replace('_off', '_on');
		
		a.hover(function(){
			img.attr('src', src_on);
		}, function(){
			img.attr('src', src_off);
		});
		
	});
})