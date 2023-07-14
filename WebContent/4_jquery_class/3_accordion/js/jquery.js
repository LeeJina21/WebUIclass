/*
1. 클래스 'accordion'이 두 개 있으므로 each() 메소드 이용
2. 해당 객체를 얻어옴 (this) 이용
3. dt와 dd 객체를 얻어옴
4. 모든 dd 객체를 닫음
5. 커서를 손가락 모양으로 바꿈
6. dt의 클릭 이벤트에서 모든 dd를 닫고 해당 dd만 보이게 함
   ( 해당 dd는 현재 dt의 next()로 찾을 수 있음 )
7. 모든 dt에 커서를 손가락 모양으로 하되 해당 dt의 커서는 디폴트로
*/

$(function() {
	$('.accordion').each(function() {
		var dl = $(this);
		var allDt = dl.find('dt');	// .find() 찾기
		var allDd = dl.find('dd');

		allDd.hide();
		allDt.css('cursor', ' pointer');
		
		allDt.click(function(){	
			allDd.hide();		// 닫음
			$(this).next().show(); // 6		// 열음
			$(this).css('cursor', 'default');	// 마우스 커서 모양 디폴트
		});


	});
});