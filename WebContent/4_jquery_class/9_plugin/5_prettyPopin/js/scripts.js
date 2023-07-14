/**
 * 
 */
$(function(){
	// 첫 번째 a태그에서 실행
	//$("a[rel^='prettyPopin']:eq(0)").prettyPopin({		// ^ ~로 시작하는
	$("a[rel='prettyPopin']:eq(0)").prettyPopin({	//prettyPopin() 함수
		width : 550,
		foolowScroll : false	// 대소문자 구분
	});
	
	$("a[rel='prettyPopin']:eq(1)").prettyPopin({
		width : 550,
		callback : function(){
			alert('팝업이 닫혔습니다');
		}	
	});
});
