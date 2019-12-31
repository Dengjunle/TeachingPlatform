// JavaScript Document
$(function() {
	//全选 or 全不选
	$('div div a:eq(0)').toggle(
	  function(){$("input[name=Select]").attr("checked",'true');},
	  function(){$("input[name=Select]").removeAttr("checked");}
	)
	//删除选中邮件
	$('div div a:eq(1)').click(function() {
	  $("input[name=Select]").each(function(){
		if($(this).attr('checked')) $(this).parent().parent().remove();
	  })
	})
})