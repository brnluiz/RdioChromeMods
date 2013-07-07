$(document).ready(function(){
	setTimeout(function(){
		//Footer mod
		$(".App_PlayerFooter").css("opacity",".9");
		//$(".App_PlayerFooter").css("height","80px");
		//$(".App_PlayerFooter .clearfix .draggable .ui-droppable").css("height","80px");
		//$(".bottom").css("height","83px");
		$(".drag_container").css("font-weight","700");
		
		//Main container mod
		$(".app_main").css("top","-20px");

		//Header size modification
		$("#header").css("top","-15px");
		$(".search_container").css("margin-top","26px");
		$(".right_container").css("margin-top","5px");
		$(".logo").css("background-position","0 24px");

		//Sidebar mod
		$(".App_MainNav li a").css("font-size","12px");
	},8000);

	$(".close").on("click",function(){
		setTimeout(function(){
			$(".App_PlayerFooter").css("height","80px");
			$(".App_PlayerFooter .clearfix .draggable .ui-droppable").css("height","80px");
			$(".bottom").css("height","83px");
		},1000);
	});
})