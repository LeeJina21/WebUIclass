<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script type="text/javascript" src="libs/jquery-1.9.1.min.js">
	
</script>
<script>
	$(function() {
		var param = {
			cate : "nam",
			name : "yoon"
		}
		// 이곳으로 넘김, 값, 함수형태로
		$.post("04_server.jsp", param, parseData);
	});
	
	function parseData(resDate){
		var objReslut = {};
		objReslut = eval("(" + resDate + ")");
		
		$("#cate").val(objReslut.first);
		$("#name").val(objReslut.second);
		
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


