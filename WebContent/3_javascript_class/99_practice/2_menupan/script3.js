/**
 * 
 */


var price = new Array();
var content = new Array();

//#### 1. TD에 이벤트 발생 td[
//#####  2. 확인 버튼 클릭시 선택한 TD의 색을 다시 흰색으로
//#####  3. 값 계산하여 총합 구하기 - 각각 TD 클릭시 배열에 저장하였다가 계산

// 배열로 메뉴 6개 만들어야함
window.onload = function() {
      var menu = document.getElementsByClassName("menu");

      function handleClick(event) {

         for (var i = 0; i < menu.length; i++) {
            menu[i].classList.remove("click");
         }

         event.target.classList.add("click");

      }

      function init() {
         for (var i = 0; i < menu.length; i++) {
            menu[i].addEventListener("click", handleClick);
         }
      }

      init();

      //값을 계산하여 총합 구하기
      var sel = document.getElementById('count');
      sel.onchange = showSite;

      function showSite() {
         // 갯수 선택 저장
         var sum = document.getElementById('count').value;
      }
      document.writeln(sum);
      
      
   }


	//menu1.onclick = function(){해당메뉴 색상변경, content배열에 입력, price배열 입력}


	// 확인 버튼 클릭하면 선택된 메뉴 색상을 다시 흰색으로 변경, 값을 계산하여 총합 구하기

	// content의 택스트노드로 메뉴명, 수량, 가격을 붙이기

