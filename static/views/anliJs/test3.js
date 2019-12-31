// JavaScript Document
$(function() {
	//全选 or 全不选
	$("div div a:eq(0)").click(function(){
		if($("input[name=Select]").has("checked"))
		{
			$("input[name=Select]").removeAttr("checked");
		}
		else
		{
			$("input[name=Select]").attr("checked",'true');
		}
	});
	//删除选中邮件
	$('div div a:eq(1)').click(function() {
	  $("input[name=Select]").each(function(){
		if($(this).attr('checked')) $(this).parent().parent().remove();
	  })
	})
})