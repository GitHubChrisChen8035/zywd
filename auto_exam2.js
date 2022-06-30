//alert("题库尚未更新，请等待...")

console.log("提示：脚本可用");

try{var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("dialog animated")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("modal auto")[0];alt.remove();}catch(error){}

try{removeEventListener("blur",getEventListeners(window).blur[0].listener);}catch(error){}

//var examId = url.match(/(paper\/|question-|detail\/)([0-9a-zA-Z-]+)/)[2];
//var examId = document.location.href.match(/(paper\/|question-|detail\/)([0-9a-zA-Z-]+)/)[2];
//console.log(examId);
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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf("2022年省级职工职业技能竞赛5G无线运维赛项复赛") != -1){
		var examId = JSON.parse(localStorage.getItem(key)).id;
        var name = JSON.parse(localStorage.getItem(key)).name;
		console.log(name,examId);
		break;
	}
}
key = "Model.exam.exam/exam/answer-paper.LS." + currentUserId + "." + examId;
value = JSON.parse(localStorage.getItem(key));
var recordId = value.examRecord.id;
console.log(recordId);
var paperId = value.examRecord.paperInstanceId;
console.log(paperId);
var questionNum = value.paper.questionNum;
console.log(questionNum);

questionsDic1 = {}


var next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();

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
						/*var answerEl = document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div',document).iterateNext();
						var ipt = answerEl.getElementsByTagName("input");
						if(ipt){	
							for (k=0;k<ipt.length;k++){
								if (ipt[k].getAttribute("type") == "checkbox"){
									console.log(questionId,ipt[k]);
									if(ipt[k].checked==true){ 
										ipt[k].checked=false; 
									}
									console.log(ipt[k].checked)
								}
							}
						}*/

						for (answer of answerList){
									document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label', document).iterateNext().click();
							 
						}

					}else {
						console.log("题型错误！");
					}
				
		}catch(error){
			console.log("本题无答案")
		}
		
		try{
			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
		}catch(error){
			console.log("");
		}
		
		if (i == questionNum-1 || j == questionNum-1){
			//document.evaluate('//a[text()="我要交卷"]', document).iterateNext().click();
			//alert("答题完成，请记住个人码，重新进入考试");
			//window.opener=null;window.top.open('','_self','');window.close(this);
			//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";	
			try{var alt1 = document.getElementsByClassName("dialog-overlay")[0];alt1.remove();}catch(error){}
			try{var alt2 = document.getElementsByClassName("alertify-cover")[0];alt2.remove();}catch(error){}
			alert("答题完成，感谢使用");
		}
   }, 1000 * i);
}


for (var i=0;i<questionNum;i++){
	if(next){
		document.getElementsByClassName("list-item")[0].click();
		task(i,0)
	}else{
		task(0,i)
	}
}
