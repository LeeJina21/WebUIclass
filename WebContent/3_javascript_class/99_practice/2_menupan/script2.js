window.onload =function(){
		var totalPrice = 0;
		var nowPrice = 0;
		var allPrice = [1000, 2000, 3000, 2000, 1000, 1500];
		
		var btn = document.getElementById('btn');
		var count = document.getElementById('count');
		var total = document.getElementById('total');
		var menu = document.getElementsByClassName('menu');
		console.log(menu[0].getAttribute("id"));
		for(let i=0; i<menu.length; i++){
			menu[i].addEventListener('click', function(){
				for(let j=0; j<menu.length; j++){
					if(i==j){
						switch(this.getAttribute("id")){
							case "menu1" :
								menu[i].style.backgroundColor = 'red';
								break;
							case "menu2" :
								menu[i].style.backgroundColor = 'skyblue';
								break;
							case "menu3" :
								menu[i].style.backgroundColor = 'yellow';
								break;
							case "menu4" :
								menu[i].style.backgroundColor = 'pink';
								break;
							case "menu5" :
								menu[i].style.backgroundColor = 'gray';
								break;
							case "menu6" :
								menu[i].style.backgroundColor = 'gold';
								break;
						}
						
						nowPrice = allPrice[j];  
					}else{
						menu[j].style.backgroundColor = 'white';
					}
				}
				
			});
		}
				
		btn.addEventListener('click', function(){
		totalPrice += nowPrice * parseInt(count.options[count.selectedIndex].value);
		total.value = totalPrice;
		
		for(let i=0; i<menu.length; i++){
			menu[i].style.backgroundColor = 'white';
		}
		nowPrice = 0;
		count.options[0].selected = true;
	});
}