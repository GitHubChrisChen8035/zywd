//auto_exam1.js
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
	//解除复制粘贴限制，这里[onpaste]是用属性选择的办法定位元素，并修改其attr
	setInterval(function(){ $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncut", "").attr("onpaste", ""); } , 2000)
}catch(error){}

//获取考试title，直接获取name，一方面会报错，另外它是string而非undefined类型
try{
	var name = document.getElementsByClassName("head-info inline-block")[0].getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ","");
	//判断name是否超长，有省略号
	if(name.slice(name.length-3) == '...'){
		name = name.slice(0,(name.length-3));		
	}
	console.log("name=" + name);
	console.log("缓存考试info...")
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

		if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf(name) != -1){
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
	var questionsCopy = value.paper.questions;
    var questionsCopy_filter = questionsCopy.map(function(item) {
    var questionAttrCopysValues = [];

    if (item.questionAttrCopys) {
        item.questionAttrCopys.forEach(function(attr) {
        questionAttrCopysValues.push(attr.value);
    });
    }
    //console.log(questionAttrCopysValues);
    return {
        content: item.content,
        questionAttrCopys: questionAttrCopysValues,
        type: item.type
      };
    });

    console.log(questionsCopy_filter);
	//console.log(questionsCopy);
	//写入浏览器缓存
	var info = {};

	info["name"] = name;
	info["auth"] = auth;
	info["currentUserId"] = currentUserId;
	info["examId"] = examId;
	info["recordId"] = recordId;
	info["paperId"] = paperId;
	info["questionNum"] = questionNum;
	info["questionsCopy"] = questionsCopy;

	localStorage.setItem("info",JSON.stringify(info));
	console.log("考试信息缓存完毕！")
	
	function reload(){
		//alert("请记住您的个人码：" + "111");
		location.reload();
		console.log("reload..");
	};
	//点击"我要交卷",刷新当前页面
	document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].addEventListener("click",reload);	

}
//大部分catch error的情况，是未发现name，即不在考试页	
catch(error){
	
	var info = JSON.parse(localStorage.getItem("info"));
	//如果浏览器缓存没有info，那么info==null，typeof=="object"，所以不能用"undefined"来判断，直接用if(info)即可
	//if (typeof(info) != "undefined"){
	if (info){
		console.log("开始爬取答案...")
		var name = info["name"];
		var auth = info["auth"]
		var currentUserId = info["currentUserId"];
		var examId = info["examId"];
		var recordId = info["recordId"];
		var paperId = info["paperId"];
		var questionNum = info["questionNum"];
		var questionsCopy = info["questionsCopy"];
		//清除本次浏览器缓存info
		localStorage.removeItem("info");

		function score(questionId, answer) {
		  xhr1 = new XMLHttpRequest();
		  var xhrurl1 = "/api/v1/exam/exam-record/front/submitPaper";
		  var xhrdata1 = "examId=" + examId + "&examRecordId=" + recordId + "&submitType=Hand&answerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&clientType=1&lastCacheTime=" + String(new Date().getTime()) + "&submitDetailType=2&clientVersion=Chrome%2F74.0.3729.169&noAnswerCount=" + (questionNum - 1) + "&answeredCount=1";
		  xhr1.open("POST", xhrurl1, false);
		  xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhr1.setRequestHeader("Authorization", auth);
		  xhr1.send(xhrdata1);
		  xhr2 = new XMLHttpRequest();
		  var xhrurl2 = "/api/v1/exam/exam-record/score";
		  var xhrdata2 = "examId=" + examId + "&examRecordId=" + recordId + "&paperInstanceId=" + paperId + "&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" +	questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D";
		  xhr2.open("POST", xhrurl2, false);
		  xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  xhr2.setRequestHeader("Authorization", auth);
		  xhr2.send(xhrdata2);
		  var encryptScore = JSON.parse(xhr2.responseText)["encryptScore"];
		  console.log(encryptScore);
		  return encryptScore.length > 128 ? true : false;
		}

		try{
			var questionsDic1 = {};

			for (var i = 0;i < questionsCopy.length;i++){
				
				if (questionsCopy[i]["type"] == 1){
					
					for (var j = 0; j < questionsCopy[i]["questionAttrCopys"].length; j++){
						
						if (score(questionsCopy[i]["id"], questionsCopy[i]["questionAttrCopys"][j]["name"])){
							//对于question以及answers本身包含引号的，可能需要str.replace(/"/g, '\\"')来进行转义，当前未测试过
							questionsDic1[questionsCopy[i]["id"]] = {"type":1,"question":questionsCopy[i]["content"],"answers":questionsCopy[i]["questionAttrCopys"][j]["value"]};
							break;
							
						}
					}
				
					
				}else if (questionsCopy[i]["type"] == 2){
					  var optList = [
					  "0,1",
					  "0,2",
					  "1,2",
					  "0,3",
					  "1,3",
					  "2,3",
					  "0,1,2",
					  "0,1,3",
					  "0,2,3",
					  "1,2,3"
					];
					for (var j = 0; j < optList.length; j++){
						
						if (score(questionsCopy[i]["id"], optList[j])){
							
							var rightAnswers = [];
							
							for (var l = 0; l < optList[j].length; l++){
								
								for (var m = 0; m < questionsCopy[i]["questionAttrCopys"].length; m++){
									
									if (optList[j][l].toString() == questionsCopy[i]["questionAttrCopys"][m]["name"]){
										
										rightAnswers.push(questionsCopy[i]["questionAttrCopys"][m]["value"]);
										
									}
								}
							}	
							
							questionsDic1[questionsCopy[i]["id"]] = {"type":2,"question":questionsCopy[i]["content"],"answers":rightAnswers};
							break;
							
						}else{if(j==9){
							var allAnswers = [];
							for (var k = 0; k < questionsCopy[i]["questionAttrCopys"].length; k++){
								allAnswers.push(questionsCopy[i]["questionAttrCopys"][k]["value"]);			
								}
								questionsDic1[questionsCopy[i]["id"]] = {"type":2,"question":questionsCopy[i]["content"],"answers":allAnswers};
								break;
							}
							
						}
						
					}
				
				
				}else if (questionsCopy[i]["type"] == 3){
					
					if (score(questionsCopy[i]["id"], "1")){				
							questionsDic1[questionsCopy[i]["id"]] = {"type":3,"question":questionsCopy[i]["content"],"answers":"正确"};			
						}else{
							questionsDic1[questionsCopy[i]["id"]] = {"type":3,"question":questionsCopy[i]["content"],"answers":"错误"};	
						}
					
					
				}else{
					console.log("错误题型！");
					break;
				}
			}
		}
		catch(error){
			console.log(error);
		}

		answers = JSON.stringify(questionsDic1);

		(function (console) {
			console.save = function (data, filename) {
				let MIME_TYPE = "text/json";
				if (!data) return;
				if (!filename) filename = name + ".txt";
				if (typeof data === "object") data = JSON.stringify(data, null, 4);

				let blob = new Blob([data], { type: MIME_TYPE });
				// 创建事件
				let e = document.createEvent("MouseEvent");
				// 创建一个a链接
				let a = document.createElement("a");
				// 设置a链接下载文件的名称
				a.download = filename;
				// 创建下载的URL对象（blob或者file）
				a.href = window.URL.createObjectURL(blob);
				a.dataset.downloadurl = [MIME_TYPE, a.download, a.href].join(":");
				console.log(a.href,a.dataset.downloadurl);
				// 初始化事件
				e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				// 触发事件
				a.dispatchEvent(e);
			}
		})(console)
		console.save(answers);
		console.log("答案已导出~~~")
	}else{
		console.log("考试信息info未建立！")
	}
}
