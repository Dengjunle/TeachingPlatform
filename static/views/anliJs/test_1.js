// JavaScript Document
$(function() {
	//设置聚焦失焦时，提示语的显隐
	$(".text").each(function(){
        //保存当前文本框的值
        var vdefault = this.value;
        //获得焦点时，如果值为默认值，则设置为空
        $(this).focus(function(){
			if(this.value == vdefault){
				this.value = "";
			}
		});
	    //失去焦点时，如果值为空，则设置为默认值
        $(this).blur(function(){
			if (this.value == ""){
				this.value = vdefault;
			}
		});
    });
	//给button添加鼠标点击事件
	$("input[type='button']").click(function() {
		//获取文本内容
		var Name = $("input[name]").val();
	    var Content = $("textarea").val();
				//判断文本内容是否为默认值
		if(Name!="你的昵称" && Content!="你要说的话") {
			//生成新元素
			var msg = "<li><span>"+Name+"</span><p>"+Content+"</p></li>";
			//添加新留言
			$("ul").append(msg);
			//重置文本框
			$("input[name]").val("你的昵称");
			$("textarea").val("你要说的话");
		}
	});
});