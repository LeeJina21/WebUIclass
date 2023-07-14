$(function(){
	/*// 1. 첫번째 패널만 보기
	var topDiv = $('.tabSet');
	var anchors = topDiv.find('ul.tabs a');
	var panelDivs = topDiv.find('div.panel');
	
	var lastAnchor = anchors.filter('.on')	// .filter() 잡아내는 함수 .on를 잡아냄 
	var lastPanel = $(lastAnchor.attr('href'));

	anchors.show();
	panelDivs.hide();
	lastPanel.show();
	
	// 2. 클릭하면 해당 패널 보기
	anchors.click(function(event){
		var currentAnchor = $(this);
		var currentPanel = $(currentAnchor.attr('href'));
		
		lastAnchor.removeClass('on');	// 눌러져있던 애가
		currentAnchor.addClass('on');	// 지금눌린애가
		
		lastPanel.hide();
		currentPanel.show();
		
		lastAnchor = currentAnchor;	// 지금 눌린애를 담기
		lastPanel = currentPanel;
		
	});
	*/
	
	$('.tabSet').tabs();
	
});


