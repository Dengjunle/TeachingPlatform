$(document).ready(function(){
	headmenu();//头部导航链接样式
});

//头部导航链接样式
function headmenu(){
	//导航栏目
	$(".nav>ul>li:not(#n0)").hover(function(){
		//鼠标移动该栏目
		$(".nav>ul>li:not(#n0)").removeClass("on");					
		$(this).addClass("on");	
		$(this).find("ul").show();
	},function(){
		//鼠标离开该栏目
		$(this).removeClass("on");
		$(this).find("ul").hide();
	});
	
	//顶部菜单弹出后,鼠标移动样式替换
	$(".droplist>li").hover(function(){
		//鼠标移动							 
		$(this).addClass("hover");						   
	},function(){
		//鼠标离开
		$(this).removeClass();
	});	
}
