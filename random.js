//랜덤게임출력
var doneGame = [];
$(".link_mission").click(gameChoice);

function gameChoice(){
	var ranNum = Math.floor(Math.random()*gameArr.length);
	if(doneGame.length == gameArr.length) doneGame = [];
	if(doneGame.indexOf(ranNum) > -1){
		gameChoice();
		return false;
	}; 
	doneGame.push(ranNum);
	$("#titGame").text(gameArr[ranNum].name);
	$("#playerGame").text(gameArr[ranNum].player);
	$("#descGame").text(gameArr[ranNum].rule);
	//on 클래스 추가
	$(this).addClass("on");
	//레이어 뜸
	$("#layerGame").css("left","15%");
};

//레이어 닫기 버튼 누르면 레이어 닫는다
$("#btnClose").click(function(){
	//on 제거
	$(".link_mission").removeClass("on");
	//레이어 닫음
	$("#layerGame").css("left","-200%");
})