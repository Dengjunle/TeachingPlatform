// JavaScript Document
$(function() {
	$("div img").addClass("alpha");
	$("div img:eq(0)").removeClass("alpha");
	//给Prev按钮添加上一张图片功能
	$("div img").mouseover(function() {
		var big_src = $(this).attr("src");
    	$("#test").attr("src",big_src);
		$(this).removeClass("alpha").siblings().addClass("alpha");
	});
});