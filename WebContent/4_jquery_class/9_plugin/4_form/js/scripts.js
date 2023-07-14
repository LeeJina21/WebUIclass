/* form의 validation
	  : jquery.validate.js나 jquery.validate.min.js  파일에서 확인한다. 

	  - required : 필수입력
	  - email : 이메일형식
	  - url : 웹주소형식
	  - minlength, maxlength : 글자길이
	  - equalTo : 동일한지 여부

	  - success 콜백함수로 label에 값과 클래스를 지정하여 추가한다.
	  (*) label에 valid 클래스는 form.css에 이미 정의되어 있음
	  (*) Firebug로 확인
   */
$(function() {
	$('#signup form').validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			website: {
				url: true
			},
			password: {
				minlength: 6,
				required: true
			},
			passconf: {
				equalTo: '#password'
			}
		},
		success: function(label) {//전부다 성공시
			label.addClass('valid');
			// 또는
			label.text('성공');
		}

	});


	// 체크박스 모두의 이름을 'agree'러 동일하게
	$('.check-all').click(function() {
		$('.agree').prop('checked', $(this).is(':checked'));// is안에 상태 표시할떄 :사용함 checked를 모두 참으로 함, 제이쿼리 문법
		// $('.agree').prop('checked', this.checked);	// 자바스크립트 문법
	});

	// 5개중 하나라도 체크되면 위조항모두 체크 표시를 취소함
	$('.agree').click(function() {
		$('.check-all').prop('checked', false);
	});
})