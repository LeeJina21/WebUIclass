<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%-- <c:choose> --%>
<%-- 	<c:when test="${ param.opr eq '+' }">${param.op1 + param.op2}</c:when> --%>
<%-- </c:choose>    --%>


<%-- ${param.op1 }+${param.op2 } = ${param.op1+param.op2 } --%>


<c:choose>
	<c:when test="${ param.opr eq '+' }">${param.op1 + param.op2}</c:when>
	<c:when test="${ param.opr eq '-' }">${param.op1 - param.op2}</c:when>
	<c:when test="${ param.opr eq '*' }">${param.op1 * param.op2}</c:when>
	<c:when test="${ param.opr eq '/' }">${param.op1 / param.op2}</c:when>
	<c:when test="${ param.opr eq '%' }">${param.op1 % param.op2}</c:when>
</c:choose>
