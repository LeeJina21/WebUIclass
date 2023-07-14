<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   
<%	// 1. 이전 화면에서 넘겨받은 데이타
	String cate = request.getParameter("cate");
	String name = request.getParameter("name");
	
	// 2. 다시 화면으로 보낼 데이터 구성
	String result ="";
	result += "{";
	result += " 'first':"+ " '서버에서"+cate+"변경" +"' ,";
	result += " 'second':"+ " 'from_"+name+"_server'";
	result += "}";
	// json의 name와 value를 각각 ' ' 로 감싸 기술
	
	
	out.write(result);

/* 	JSon 형식 만들기 - Json 라이브러리 다운 받아 import 필요
	ex) json-simple-1.1.jar

	JSONObject obj=new JSONObject();
	obj.put("first", "아이유");
	obj.put("second", "종로");
	out.print(obj.toString()); */

%>    
