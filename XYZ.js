try{
	//移除开发者工具监测弹窗
	var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];
	if (typeof(alt) != "undefined"){alt.remove()};
	//移除切屏次数弹窗
	var alt1 = document.getElementsByClassName("dialog animated")[0];
	if (typeof(alt1) != "undefined"){alt1.remove()};
	//影响交卷功能！
	var alt2 = document.getElementsByClassName("modal auto")[0];
	if (typeof(alt2) != "undefined"){alt2.remove()};
	//移除cover层，解除操作限制
	var alt3 = document.getElementsByClassName("dialog-overlay")[0];
	if (typeof(alt3) != "undefined"){alt3.remove()};
	var alt4 = document.getElementsByClassName("alertify-cover")[0];
	if (typeof(alt4) != "undefined"){alt4.remove()};
	//移除切屏监听事件
	removeEventListener("blur",getEventListeners(window).blur[0].listener);
	//window.blur = "";
	//移除刷新页面后弹窗confirm
	window.onbeforeunload = "";
	setInterval(function(){ $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncopy", "").attr("onpaste", ""); } , 2000)
}catch(error){}
