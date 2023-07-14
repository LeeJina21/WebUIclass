//하단의 div 태그에 주문서 (상품명, 갯수, 금액) 행이 추가 되고, 총 합계를 자동 계산

window.onload = function() {

   var menu = {
      menu1: ["아메리카노", 1000],
      menu2: ["카페라떼", 2000],
      menu3: ["쥬스", 3000],
      menu4: ["과자", 2000],
      menu5: ["엿", 1000],
      menu6: ["땅콩", 1500]
   };
   var sum = 0;
   
   //배열을 안쓰고 위의 두개를 활용
   var price = new Array();
   var content = new Array();

   var tdmenu = document.getElementsByClassName("menu");
   for (var i = 0; i < tdmenu.length; i++) {
      tdmenu.item(i).onclick = selChange;
   }

   var btn = document.getElementById("btn");
   btn.onclick = calc;

   function selChange() {
      this.classList.toggle("On");
   }

   function calc() {
      var selmenu = document.getElementsByClassName("On");
      var count = document.getElementById("count");
      var countVal = count.options[count.selectedIndex].value;
      var div = document.getElementById("content");
      for (var i = 0; i < selmenu.length; i++) {
         var br = document.createElement("br");
         var Obj = selmenu.item(i).id;
         switch (Obj) {
            case "menu1":
               div.append("메뉴: " + menu.menu1[0] + "/수량: " + countVal + "/가격: " + menu.menu1[1] * countVal);
               div.append(br);
               sum += menu.menu1[1] * countVal;
               break;
            case "menu2":
               div.append("메뉴: " + menu.menu2[0] + "/수량: " + countVal + "/가격: " + menu.menu2[1] * countVal);
               div.append(br);
               sum += menu.menu2[1] * countVal;
               break;
            case "menu3":
               div.append("메뉴: " + menu.menu3[0] + "/수량: " + countVal + "/가격: " + menu.menu3[1] * countVal);
               div.append(br);
               sum += menu.menu3[1] * countVal;
               break;
            case "menu4":
               div.append("메뉴: " + menu.menu4[0] + "/수량: " + countVal + "/가격: " + menu.menu4[1] * countVal);
               div.append(br);
               sum += menu.menu4[1] * countVal;
               break;
            case "menu5":
               div.append("메뉴: " + menu.menu5[0] + "/수량: " + countVal + "/가격: " + menu.menu5[1] * countVal);
               div.append(br);
               sum += menu.menu5[1] * countVal;
               break;
            case "menu6":
               div.append("메뉴: " + menu.menu6[0] + "/수량: " + countVal + "/가격: " + menu.menu6[1] * countVal);
               div.append(br);
               sum += menu.menu6[1] * countVal;
               break;
         }
      }
      document.getElementById("total").value = sum;
   }

	// --------------------------------------
	var totalPrice = 0;
		var nowPrice = 0;
		var allPrice = [1000, 2000, 3000, 2000, 1000, 1500];
		
		var btn = document.getElementById('btn');
		var count = document.getElementById('count');
		var total = document.getElementById('total');
		var menuM = document.getElementsByClassName('menu');
		console.log(menuM[0].getAttribute("id"));
		for(let i=0; i<menuM.length; i++){
			menuM[i].addEventListener('click', function(){
				for(let j=0; j<menuM.length; j++){
					if(i==j){
						switch(this.getAttribute("id")){
							case "menu1" :
								menuM[i].style.backgroundColor = 'red';
								break;
							case "menu2" :
								menuM[i].style.backgroundColor = 'skyblue';
								break;
							case "menu3" :
								menuM[i].style.backgroundColor = 'yellow';
								break;
							case "menu4" :
								menuM[i].style.backgroundColor = 'pink';
								break;
							case "menu5" :
								menuM[i].style.backgroundColor = 'gray';
								break;
							case "menu6" :
								menuM[i].style.backgroundColor = 'gold';
								break;
						}
						
						nowPrice = allPrice[j];  
					}else{
						menuM[j].style.backgroundColor = 'white';
					}
				}
				
			});
		}
				
		btn.addEventListener('click', function(){
		totalPrice += nowPrice * parseInt(count.options[count.selectedIndex].value);
		total.value = totalPrice;
		
		for(let i=0; i<menuM.length; i++){
			menuM[i].style.backgroundColor = 'white';
		}
		nowPrice = 0;
		count.options[0].selected = true;
	});

}