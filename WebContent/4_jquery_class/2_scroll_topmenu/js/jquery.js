/**
 * 
 */


$(function() {
	// 2초동안 페이지의 모든 문단(p)의 초기상태에서 20px 만큼 패딩적용하교, 폰트 크기를 30픽셀러 본경

	/*$('p').animate({
		padding : '20px;',
		fontSize : '30px'
		
	}, 2000);
	
	*/

	// 네비게이션 메누위에 마우수가 올리면 앞으로 움직이도록
	$('#navigation li').hover(function() {
		$(this).animate({ paddingLeft: '+=15' }, 200);

	}, function() {
		$(this).animate({ paddingLeft: '-=15' }, 200);

	});
	
	
	// 고정퀵 메뉴
	$(window).scroll(function(){
		$('#navigation').css('top', $(document).scrollTop());
	});
	
});


