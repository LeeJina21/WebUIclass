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
	// �ð�
	$('#get_time').click(function(){
		$.ajax({	// �񵿱�� ��󤩾��
			url : "./jsp/time.jsp",
			success : function(data){	// ����������
				$('#result').html(data);
			},
			type : "POST"
		});
	});
	});		
	 */

	// �� �����
	$(function() {
		// �ð�
		$('#get_time').click(function() {
			$.post("./jsp/time.jsp", myFunc);
		});
		
		function myFunc(data){
			$('#result').html(data);
		}
		
	});

	 
	 // ��� ��� ��������
	 /* $(function(){
		$('#melon').click(function(){
			$.post("./jsp/proxy_melon.jsp", function(data){
				var songChart = $('.typeRealtime > ul ', data);
				$('#result').empty();		// ����!!
				$('#result').append(songChart);
			});
		}) ;
	 }); */
	
	 
	// ��� ����, �뷡����  ����
	 $(function(){
		$('#melon').click(function(){
			
			$.post("./jsp/proxy_melon.jsp", function(data){
				var songChart = $('.typeRealtime > ul > li' , data);
				$('#result').empty();
				
				songChart.each(function(){
					var Chart = $('.rank', this).text();
					var Song = $('.song' , this).text();
					var Singer = $('.ellipsis >a' , this).text();
					
					$('#result').append("<p>"+Chart+"��  ���� :  " +Song+"  ���� :  "+Singer+"</p>");
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
					
					$('#result').append("<p>"+rank+"��  ���� :  " +title+"  ������ :  "+date+"</p>");
				}); */
			});
		}) ;
	 });
	 
	 
</script>
</head>
<body>
	<h1>����</h1>
	<button id="get_time">�ð�</button>
	<button id="kma">����</button>
	<button id="melon">���</button>
	<button id="cgv">cgv</button>

	<div id="result"></div>
</body>
</html>