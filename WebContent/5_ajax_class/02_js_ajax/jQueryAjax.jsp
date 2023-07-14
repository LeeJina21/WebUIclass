<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript">
$(function(){
   // 입력 버튼이 눌렸을 때
   $('#inputBtn').click(function(){
      var param = {
         name : $('#name').val(),
         age : $('#age').val(),
         tel : $('#tel').val(),
         addr : $('#addr').val()
      };
      	// 경 function(data)=참
      $.post("DataInput.jsp", param, function(data){
         if(jQuery.trim(data)==1){		// trim() 공백제거
            alert("디비 입력 성공!");
         }else{
            alert("디비 입력 실패!");
         }
      });
   });
   
   // 가져오기 버튼이 눌렸을 때
   $('#getBtn').click(function(){
      $.post("DataSelect.jsp",function(data){
         $('#tbd').empty(); // result 비움
         var txt = $('person', data);
         txt.each(function(){
            var name = $('name', this).text();
            var age = $('age', this).text();
            var tel = $('tel', this).text();
            var addr = $('addr', this).text();
            
            $('#tbd').append('<tr>');
            $('#tbd').append(
               "<td>"+name+"</td><td>"+age+"</td><td>"+tel+"</td><td>"+addr+"</td>"
               );
            $('#tbd').append('</tr>');
         });
      });
   });
});
</script>
</head>
<body>

<h2> 고객정보 입력 </h2>

<form name="inForm" method="post">
<table border = 1>
   <tr>
      <td width="80" align="center">Name</td>
      <td width="50" align="center">Age</td>
      <td width="100" align="center">Tel</td>   
      <td width="250" align="center">Addr</td>
   </tr>
   <tr>
      <td align="center"><input type="text" size="8" name="name" id="name"></td>
      <td align="center"><input type="text" size="4" name="age" id="age"></td>
      <td align="center"><input type="text" size="12" name="tel" id="tel"></td>
      <td align="center"><input type="text" size="30" name="addr" id="addr"></td>
   </tr>
   <tr>
      <td colspan="4" align="center"> 
         <input type="button" id="inputBtn" value="입력">
      </td>
   </tr>
</table>

<br>
<hr>

<h2> 고객정보 목록보기  </h2>
<table border='0' width="510"> 
   <tr>
      <td align="right"><input type="button" id="getBtn" value="가져오기"></td>
   </tr>
</table>
<table border = 1 id="listTable">
   <tr>
      <td width="80" align="center">Name</td>
      <td width="50" align="center">Age</td>
      <td width="100" align="center">Tel</td>   
      <td width="250" align="center">Addr</td>
   </tr>
   <tbody id="tbd"></tbody>
</table>
<div id="myDiv"> </div>

</form>
</body>
</html>