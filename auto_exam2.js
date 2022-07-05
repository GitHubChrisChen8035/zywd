//auto_exam2.js
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
}catch(error){}

//更新答案集
questionsDic1 = {"a228b422-924d-48fe-8457-914961143d8f":{"type":1,"question":"现网软件补丁装载后应有保修期，时限为（   ）。如因软件补丁装载在保修期内产生的故障、或需要实施新的补丁装载，厂商应提供免费服务，服务标准与售后服务标准一致。","answers":"14个自然天"},"45b9dc4a-cd2a-4b14-bcfb-1d82d4490488":{"type":1,"question":"投诉处理流程应当以(     )作为起点，将处理结果反馈客服部门作为终点。","answers":"省网管监控中心受理投诉"},"c5abbe4e-1f86-44a5-9295-353e3342d221":{"type":1,"question":"对于A级软件（修复故障隐患的缺陷补丁，落实全网工作要求和推动全网业务开通等的版本和功能补丁），总部网络部通过软件装载工单安排全网装载，省公司网络部门原则上应在(   )个月内及时完成软件装载工作。","answers":"3  "},"dd9ad196-d91a-4971-9652-0683af20b5b9":{"type":1,"question":"以下关于系统日志的说法，不正确的是（    ）","answers":"系统日志记录需进行定期备份，应至少保存一年，涉及客户敏感信息的操作日志应留存不少于三年。"},"9b8cb2dd-4c1e-42fc-b77e-fc3dbfb1de97":{"type":1,"question":"软件版本和补丁管理的范围是(    )","answers":"入网设备清单中的现网设备"},"aa865729-5716-4124-aae0-77cd30767446":{"type":1,"question":"机房安全出口应不少于(    )个，且要保持畅通，不可放置杂物。","answers":"2 "},"3cb1e52c-0431-434f-b6ee-e810916198e1":{"type":1,"question":"根据网络安全服务可控相关要求，以下关于安全评估的说法正确的是（    ）","answers":"以上都正确"},"490d521d-44a1-4330-b45f-32bbce1e911b":{"type":1,"question":"应急预案体系按照责任单位划分，分为( )级.","answers":"4 "},"e8c59201-cc15-4a0d-9334-f6004cfd6b5f":{"type":1,"question":"遵照《中国移动网络运行维护规程》的要求，对于重要的网络调整局数据方案（如涉及网元多、可能影响重要业务或导致重大故障等）应获得省公司领导（  ）的授权批准.","answers":"一级经理 "},"d06ff2a2-2b4c-4ba2-b86c-74fee7dd9bb2":{"type":1,"question":"客户信息安全管理采取( )管理的方式，各单位应明确客户信息安全归口管理部门。","answers":"归口 "}}

//JS原生xpath选择，document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null)，返回的是枚举类型，需要逐个取出
function Xpath(xpath){
	var xresult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	var xnodes = [];
	var xres;
	while(xres = xresult.iterateNext()){
		xnodes.push(xres);
	}
	return xnodes;

}

//自动做题function，i为时间延迟参数，j为题目编号。分为三部分：主函数 + 下一题try + 结束判断
function task(i,j) {
   setTimeout( function () {
		
		try{

			var questionId = document.getElementsByClassName("question")[j].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
			var answerList = questionsDic1[questionId]['answers'];
			console.log(questionId,answerList)
			if (questionsDic1[questionId]['type'] == 1) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label', document).iterateNext().click();


					}else if (questionsDic1[questionId]['type'] == 3) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();

					}else if (questionsDic1[questionId]['type'] == 2) {
						//取消选择的checkbox
						//document.evaluate('//a[contains(@id,"' + questionId + '")]', document).iterateNext().style.backgroundColor="#32CD32";
						var answers = Xpath('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div//input[@type="checkbox"]');

						if (answers[0]) {
							for (ans of answers){ans.checked=false;} 
						}
						
						//必须先反选，再延迟选择正确答案。猜测是正确答案click后，会更新checkbox，导致之前的反选操作失效
						setTimeout(function (){
							for (var answer of answerList){
									document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label', document).iterateNext().click();
							}	 
						},100)

					}else {
						console.log("题型错误！");
					}
					/*左侧list-item改变背景颜色为淡绿。需延迟生效，否则Xpath获取不到元素。原因为：list-item实时监测答案选择情况（已选/未选），并更新元素。无法实现除了“待检查”外的标记，因为元素都是通过XHR从后台获取显示*/


				
		}catch(error){
			console.log("本题无答案")
			//通过点击“待检查”标识无答案题目
			setTimeout(window.onload = function (){
				var item = Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0];  
				if (item){item.click();}
			},1000)
		}
		
		try{
			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
		}catch(error){}
		
		if (i == questionNum-1 || j == questionNum-1){
			//alert("答题完成，请记住个人码，重新进入考试");
			//window.opener=null;window.top.open('','_self','');window.close();
			//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";	
			alert("答题完成，感谢使用");
			console.log("答题完毕，感谢使用");
			
		}
   }, 1000 * i);
}

if(Object.keys(questionsDic1).length > 0){
	var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ","");
	console.log(name + "  开始答题...");
	var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
	console.log(auth);
	var req = new XMLHttpRequest();
	req.open(
	  "GET","/api/v1/system/setting/frontend?_=" + new Date().getTime(),false
	);
	req.setRequestHeader("Authorization", auth);
	req.send(null);
	res = JSON.parse(req.responseText);
	currentUserId = res.currentUser.id;
	for (i=0;i<localStorage.length;i++){
		key = localStorage.key(i);
		//console.log("当前key=" + String(key));

		if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf(name) != -1){
			var examId = JSON.parse(localStorage.getItem(key)).id;
			var name = JSON.parse(localStorage.getItem(key)).name;
			console.log(name,examId);
			break;
		}
	}
	key = "Model.exam.exam/exam/answer-paper.LS." + currentUserId + "." + examId;
	value = JSON.parse(localStorage.getItem(key));
	var questionNum = value.paper.questionNum;
	console.log(questionNum);
	var next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();

	for (var i=0;i<questionNum;i++){
		if(next){
			try{document.getElementsByClassName("list-item")[0].click();}catch(error){}
			task(i,0)
		}else{
			task(0,i)
		}
	}
}else{
	console.log("题库尚未更新！")
	alert("题库尚未更新！")
}
