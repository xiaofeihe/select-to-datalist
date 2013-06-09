//页面加载完毕执行
$(function(){
  select_tolist();
	});
//查找select 更加情况 进行 转换
function select_tolist(){
	//声明一个全局变量用于记录焦点是否是在input 和select 之间切换
	Q_select_show=false;
$("select").each(function(i,v) {
var optionsum=$(v).children().length;
if(optionsum<20)
return null;
var position = $(v).position(),swidth=$(v).css("width");
var objpos={ "position":"absolute","top":position.top+22,"left":position.left};
$(v).css(objpos).hide().attr('size',20).attr("data-i",i).addClass("select_hide").prepend("<optgroup></optgroup>");
$('<input type="text" style="width:'+swidth+'" class="selecttolist"  data-i='+i+'   value="'+$(v).find("option:selected").text()+'"/>').insertBefore(v);
});
 //监听 input 文本变化
	$(".selecttolist").bind("keyup", function(e){
select_show($(this).attr('data-i'),this.value)
	});
	$(".selecttolist").bind("blur", function(){
setTimeout("select_hide("+$(this).attr('data-i')+")",200);
	});
	$(".selecttolist").bind("focus", function(){
select_show($(this).attr('data-i'),this.value)
	});
	
	//监听隐藏的select选中事件
$(".select_hide").click(function() {
var i=$(this).attr('data-i');
Q_select_show=false;
select_hide(i);
$(".selecttolist[data-i="+i+"]").val($(this).find("option:selected").text());
});
//监听 input失去焦点后 是否是对应的select获取焦点
$('.select_hide').focus(function() {
Q_select_show=true;
});

$('.select_hide').blur(function() {
Q_select_show=false;
$(this).hide();
});


}
   
 
//显示下列选项 给出I 这个页面的第几个 特殊下列列表的序号，v是查询字符
function select_show(i,v){
	var domid=$(".select_hide[data-i="+i+"]");
	domid.show().find("optgroup").html('');
    v=$.trim(v);
	var addopt=thisop=null;
	if(v=='全部' ||v=='')
	return null;
	else
		domid.find("option:contains("+v+")").each(function() {
		thisop=$(this)
		addopt+="<option value='"+thisop.val()+"'>"+thisop.text()+"</option>";
});
	
	domid.find("optgroup").html(addopt).show()
	
}
//隐藏下列选项
function select_hide(i){
	if(Q_select_show==false)
$(".select_hide[data-i="+i+"]").hide();
}

	
