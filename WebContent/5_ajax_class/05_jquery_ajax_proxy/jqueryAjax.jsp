<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
<script type="text/javascript" src="./js/jquery-1.11.1.js"></script>
<script type="text/javascript">
	/*
	$(function() {
	// 시간
	$('#get_time').click(function(){
		$.ajax({	// 비동기라 대상ㄹ없어서
			url : "./jsp/time.jsp",
			success : function(data){	// 성공했을때
				$('#result').html(data);
			},
			type : "POST"
		});
	});
	});		
	 */

	// 위 축약형
	$(function() {
		// 시간
		$('#get_time').click(function() {
			$.post("./jsp/time.jsp", myFunc);
		});
		
		function myFunc(data){
			$('#result').html(data);
		}
		
	});

	 
	 // 멜론 목록 가져오기
	 /* $(function(){
		$('#melon').click(function(){
			$.post("./jsp/proxy_melon.jsp", function(data){
				var songChart = $('.typeRealtime > ul ', data);
				$('#result').empty();		// 비우기!!
				$('#result').append(songChart);
			});
		}) ;
	 }); */
	
	 
	// 멜론 순위, 노래제목  가수
	 $(function(){
		$('#melon').click(function(){
			
			$.post("./jsp/proxy_melon.jsp", function(data){
				var songChart = $('.typeRealtime > ul > li' , data);
				$('#result').empty();
				
				songChart.each(function(){
					var Chart = $('.rank', this).text();
					var Song = $('.song' , this).text();
					var Singer = $('.ellipsis >a' , this).text();
					
					$('#result').append("<p>"+Chart+"위  제목 :  " +Song+"  가수 :  "+Singer+"</p>");
				});
			});
		}) ;
	 });
	 
	 
	 // cgv 
	 $(function(){
		$('#cgv').click(function(){
			$('#result').empty();
			$.post("./jsp/proxy_cvg.jsp", function(data){
				var moviechart = $('.swiper-wrapper' , data);
				$('#result').append(moviechart);
				/* $('#result').append(songChart);
					songChart.each(function(){
					var rank = $('.rank', this).text();
					var title = $('.box-contents > a' , this).text();
					var date = $('.txt-info' , this).text();
					
					$('#result').append("<p>"+rank+"위  제목 :  " +title+"  개봉일 :  "+date+"</p>");
				}); */
			});
		}) ;
	 });
	 
	 
</script>
</head>
<body>
	<h1>제목</h1>
	<button id="get_time">시간</button>
	<button id="kma">날씨</button>
	<button id="melon">멜론</button>
	<button id="cgv">cgv</button>

	<div id="result"></div>
</body>
</html>