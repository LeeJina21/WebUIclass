<%@ page language="java" import="java.sql.*"%>
<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="sky";
String pass="pass";
String dbURL="jdbc:oracle:thin:@192.168.0.79:1521:air3";


String name  = request.getParameter("name");
String age = request.getParameter("age");
String tel = request.getParameter("tel");
String addr= request.getParameter("addr");


	Class.forName(driver);
	Connection connection=DriverManager.getConnection(dbURL,user,pass);		
	
	String sql = "insert into ajax_temp(name, age, tel, addr) values(";
	sql += "'" + name + "','" + age + "','" + tel + "','" + addr + "')";
	
	Statement stmt = connection.createStatement();
	stmt.executeUpdate(sql);		

	stmt.close();
	connection.close();
%>