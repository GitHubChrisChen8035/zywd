//fetchanswers.js
try{
	//移除切屏监听事件
	removeEventListener("blur",getEventListeners(window).blur[0].listener);
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
	fullName = res.currentUser.fullName;

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
	info["fullName"] = fullName;
	info["examId"] = examId;
	info["recordId"] = recordId;
	info["paperId"] = paperId;
	info["questionNum"] = questionNum;
	info["questionsCopy"] = questionsCopy;

	localStorage.setItem("info",JSON.stringify(info));
	console.log("考试信息缓存完毕！")

}
//大部分catch error的情况，是未发现name，即不在考试页	
catch(error){
	var info = JSON.parse(localStorage.getItem("info"));
	//如果浏览器缓存没有info，那么info==null，typeof=="object"，所以不能用"undefined"来判断，直接用if(info)即可
	if (info){
		console.log("开始爬取答案...")
		var name = info["name"];
		var auth = info["auth"]
		var currentUserId = info["currentUserId"];
		var fullName = info["fullName"];
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
							//对于question以及answers本身包含引号的，可能需要str.replace(/"/g, '\\"')来进行转义，包括其他如\n换行符等！
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
		//将答案保存至本地
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
		console.log("答案已导出~~~");
		
		console.log("准备上传至Github仓库");
		//var name = '在线考试';
		const token = 'github_pat_' + '11AGBO4FA0Yy6PH8Rsg161_uV7im6fz8LIHl0FQHfJd1KdPUCqzqobGgofbN7APzJxM4WZEWQ6rAfrH1bW';
		const owner = 'GitHubChrisChen8035';
		const repo = 'zywd';
		const path = '答案集/' + name + '.txt';
		const message = '上传by ' + fullName;
		const newContent = JSON.parse(answers); // 假设answers是JSON格式的字符串
		
	        //js文件中的ansArray更新
	        async function updateJavaScriptFile() {
		    try {
		        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
		            method: 'GET',
		            headers: {
		                'Authorization': `token ${token}`,
		                'Content-Type': 'application/json'
		            }
		        });
		        const data = await response.json();
		        const uploadedContent = JSON.parse(decodeURIComponent(escape(atob(data.content))));
		
		        const jsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/autoexam.js`, {
		            method: 'GET',
		            headers: {
		                'Authorization': `token ${token}`,
		                'Content-Type': 'application/json'
		            }
		        });
		        const jsData = await jsResponse.json();
		        let jsFileContent = decodeURIComponent(escape(atob(jsData.content)));
		        let ansArrayMatch = jsFileContent.match(/var ansArray = (\{[\s\S]*?\});/m);
		
		        if (ansArrayMatch) {
		            let ansArray = JSON.parse(ansArrayMatch[1]);
		            if (typeof ansArray === 'object' && !Array.isArray(ansArray)) {
		                while (Object.keys(ansArray).length >= 10) {
		                    delete ansArray[Object.keys(ansArray)[0]];
		                }
		                ansArray[name] = uploadedContent;
		                jsFileContent = jsFileContent.replace(ansArrayMatch[0], `var ansArray = ${JSON.stringify(ansArray, null, '\t')};`);
		            }
	
		            const updateResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/autoexam.js`, {
		                method: 'PUT',
		                headers: {
		                    'Authorization': `token ${token}`,
		                    'Content-Type': 'application/json'
		                },
		                body: JSON.stringify({
		                    message: '更新 [' + name + '] 答案',
		                    content: btoa(unescape(encodeURIComponent(jsFileContent))),
		                    sha: jsData.sha
		                })
		            });
		
		            if (updateResponse.ok) {
		                console.log("JS文件更新成功");
		                alert("答案已更新，自动答题功能生效");
		            } else {
		                throw new Error('JS文件更新失败');
		            }
		        } else {
		            throw new Error('未找到 ansArray');
		        }
		    } catch (error) {
		        console.error(error);
		        alert("操作失败");
		    }
		}
	
	
	
		//上传、合并答案集
		async function uploadOrUpdateFile() {
		    try {
		        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
		            method: 'GET',
		            headers: {
		                'Authorization': `token ${token}`,
		                'Content-Type': 'application/json'
		            }
		        });
		
		        if (response.status === 404) {
		            // 文件不存在，直接上传新内容
		            console.log("答案不存在，开始上传...");
		            const uploadResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
		                method: 'PUT',
		                headers: {
		                    'Authorization': `token ${token}`,
		                    'Content-Type': 'application/json'
		                },
		                body: JSON.stringify({
		                    message,
		                    content: btoa(unescape(encodeURIComponent(JSON.stringify(newContent))))
		                })
		            });
		
		            if (uploadResponse.ok) {
		                console.log("答案上传成功");
		                //上传至答案集后，将内容写入autoexam.js
		                updateJavaScriptFile();
		            } else {
		                throw new Error('上传答案失败');
		            }
		        } else if (response.ok) {
		            // 文件存在，读取内容并合并
		            console.log("文件存在，开始合并...");
		            const data = await response.json();
		            const existingContent = JSON.parse(decodeURIComponent(escape(atob(data.content))));
		            const mergedContent = Object.assign(existingContent, newContent);
		            const updateResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
		                method: 'PUT',
		                headers: {
		                    'Authorization': `token ${token}`,
		                    'Content-Type': 'application/json'
		                },
		                body: JSON.stringify({
		                    message,
		                    content: btoa(unescape(encodeURIComponent(JSON.stringify(mergedContent)))),
		                    sha: data.sha // 需要原文件的SHA来更新文件
		                })
		            });
		
		            if (updateResponse.ok) {
		                console.log("文件更新成功");
		                updateJavaScriptFile();
		            } else {
		                throw new Error('文件更新失败');
		            }
		        } else {
		            throw new Error('获取答案失败');
		        }
		    } catch (error) {
		        console.error(error);
		        alert(error);
		    }
		}
	
	
	uploadOrUpdateFile();
	

		
	}else{
		console.log("考试信息info未建立！")
	}
}
