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
	//removeEventListener("blur",getEventListeners(window).blur[0].listener);
	window.blur = "";
	//移除刷新页面后弹窗confirm
	window.onbeforeunload = "";
}catch(error){}

//更新答案集
questionsDic1 = {}

//自动做题function，i为时间延迟参数，j为题目编号。分为三部分：主函数 + 下一题try + 结束判断
function task(i,j) {
   setTimeout( function () {
		
		try{

			var questionId = document.getElementsByClassName("question")[j].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
			var answerList = questionsDic1[questionId]['answers'];
			if (typeof(answerList) == "undefined"){
				console.log("本题无答案");
				//将无答案的标记为'待检查'
				Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click(); 
			}else if (questionsDic1[questionId]['type'] == 1) {

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
						Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click(); 
					}
					/*左侧list-item改变背景颜色为淡绿。需延迟生效，否则Xpath获取不到元素。原因为：list-item实时监测答案选择情况（已选/未选），并更新元素。无法实现除了“待检查”外的标记，因为元素都是通过XHR从后台获取显示*/


				
		}catch(error){}
		
		try{
			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
		}catch(error){}
		
		if (i == questionNum-1 || j == questionNum-1){
			//由于多选需要反选操作，导致正确答案填入有延后，当多选题量大时，需要延迟一定时间弹出alert
			setTimeout(function(){
				//alert("答题完成，请记住个人码，重新进入考试");
				//window.opener=null;window.top.open('','_self','');window.close();
				//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";
				alert("答题完成，感谢使用");
				console.log("答题完毕，感谢使用");
			},questionNum*50)	
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
	
	function reload(){
		//alert("请记住您的个人码：" + "111");
		location.reload();
		console.log("reload..");
	};
	//点击"我要交卷",刷新当前页面
	document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].addEventListener("click",reload);	
	
}else{
	console.log("题库尚未更新！")
	alert("题库尚未更新！")
}
