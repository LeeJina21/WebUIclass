/**
 * 
 */

$(function() {
	
	$('.menu').each(function() {
		
		var table ="";

		$(this).change(function(){
			var menu = $(this).find('span:eq(0)').text();	//eq(0) 0번쨰 가져옴
			var price = $(this).find('span:eq(1)').text();
			var amount = $(this).find('option:selected').val();
			
			var num = amount*price;
			
			//alert(menu);
			//alert(price);
			//alert(amount);
			
			table += "<tr>";
			table += "<td>"+menu +"</td>";
			table += "<td>"+amount +"</td>";
			table += "</tr>";
			
			$('#total').val(num);
			
			$('#listTable').append(table);
		});
		
		
		
	});
});