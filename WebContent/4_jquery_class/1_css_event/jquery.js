/**
 * 
 */
 
 $(function(){
	// 테이블의 한 줄 건너 한줄씩 스타일 지정
	//$('#celebs tbody tr:even').css('background-color', '#ddd');
	
	/*$('#celebs tbody tr:even').css({
		'background-color' : '#ddd',
		'color' : '#666',
		'font-size' : '12px'
	});
	*/
	
	$('#container tr:even').addClass('table_striping');
	// :even 짝수 // :odd 홀수
	
	// 테이블에 마우스 올라있는 엘리먼트에 강조
	$('#celebs tbody tr').hover(function(){
		$(this).toggleClass('td_mouseover');
	});
	
	/*
	$(document).ready(function(){
		$('#celebs tr').mouseover( function(){
			$(this).addClass('td_mouseover');
		})
		$('#container tr').mouseout(function(){
			$(this).removeClass('td_mouseover');
		});
	});
	*/
	
	// 버튼 클릭시 엘리먼트 감추고 보이기
	$('#hideButton').click(function(){
		//$('#intro').hide();	// .hide() 감추기
		$('#intro').fadeOut(1000);	
	});
	
	$('#showButton').click(function(){
		//$('#intro').show();	// .show() 보이기
		$('#intro').fadeIn();
	});
	
	/*$('#toggleButton').click(function(){
		if($('#intro').is(':visible')){	// 선택요소가
			$('#intro').hide();
		}else{
			$('#intro').show();
		}
	});*/
	
	$('#toggleButton').click(function(){
		$('#intro').slideToggle('slow');	// .toggle() 선택요소 보이기 안보이기 .slideToggle() 슬라이드되는 토글
	});
	
 });