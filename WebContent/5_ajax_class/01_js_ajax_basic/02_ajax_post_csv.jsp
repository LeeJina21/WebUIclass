<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script>
	var xmlHttp;
	window.onload = function() {
		// 1. 브라우저에 따른 XMLHttpRequest생성하기.
		xmlHttp = new XMLHttpRequest();

		// 2. 요청에 대한 응답처리 이벤트 리스너 등록.
		// on_ReadyStateChange 자바스크립트 함수 => 요청받으면 자바스크립트 함수를 호출해 처리하겠다
		xmlHttp.onreadystatechange = on_ReadyStateChange;

		// 3.서버로 보낼 데이터 생성.
		var data = "cate=nam&name=yoon"

		//###########################################################
		// 4. GET방식으로 데이터 보내기, 응답은 비동기로 클라이언트<->서버간의 연결 요청준비.
		//(보낼 방식, 보낼곳, 보낼데이터)
		xmlHttp.open("POST", "02_server.jsp?" + data, true);
		// post방식은 이런식으로 암호화 해줘야 한다. 이거 안해주면 널값임
		xmlHttp.setRequestHeader("Content-Type",
				"application/x-www-form-urlencoded");

		// 5. 실제 데이터 전송.
		xmlHttp.send(null);

		//####         
		// T. 동기/비동기 실행 테스트를 위한 부분.
		alert("전송 시작!");
	}

	// 6.응답처리.
	function on_ReadyStateChange() {
		// 4=데이터 전송 완료.(0=초기화전,1=로딩중,2=로딩됨,3=대화상태)
		if (xmlHttp.readyState == 4) {
			//200은 에러 없음.(404=페이지가 존재하지 않음)
			if (xmlHttp.status == 200) {
				// 서버에서 받은 값.
				//alert("서버에서 받은 원본 데이터 : "+xmlHttp.responseText);

				//7. 데이터 파싱처리.
				parseData(xmlHttp.responseText);
			} else {
				alert("처리 중 에러가 발생했습니다.");
			}
		}
	}

	//#################################################
	//7. CSV포맷  데이터 처리.
	function parseData(strText) {
		var cate = document.getElementById("cate");
		var name = document.getElementById("name");

		var aryData = strText.split("|");

		for (var i = 0; i < aryData.length; i++) {
			var keyValue = aryData[i].split("=");
			if (keyValue[0].trim() == 'cate') {
				cate.value = keyValue[1];
			}

			if (keyValue[0].trim() == 'name') {
				name.value = keyValue[1];
			}

		}
	}
</script>
</head>

<body>
	서버로부터 넘겨받은 데이터
	<br /> 첫번째 데이터 :
	<input type="text" name="" id="cate" />
	<br /> 두번째 데이터 :
	<input type="text" name="" id="name" />
	<br />
</body>
</html>


