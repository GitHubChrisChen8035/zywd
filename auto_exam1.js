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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf("ICT") != -1){
		var examId = JSON.parse(localStorage.getItem(key)).id;
        var name = JSON.parse(localStorage.getItem(key)).name;
		console.log(name,examId);
		break;
	}
}
key = "Model.exam.exam/exam/answer-paper.LS." + currentUserId + "." + examId;
//key = "Model.exam.exam/exam/answer-paper.LS.89867706.e21d7fb3-91b0-4a88-823b-4e66c5e800b1";
value = JSON.parse(localStorage.getItem(key));
var recordId = value.examRecord.id;
console.log(recordId);
var paperId = value.examRecord.paperInstanceId;
console.log(paperId);
var questionNum = value.paper.questionNum;
console.log(questionNum);
var questionsCopy = value.paper.questions;
console.log(questionsCopy);

/*var examId = "6659f980-36b1-488b-a741-69ad5dfea772";
var auth = "Bearer__bded4b3f04f08a40cfaec9da073fad49";
var recordId = "21044277-5f0b-43ef-a082-79bac5794b83";
var paperId = "b9878813-c377-45cd-a91a-8d90847b0939";
var questionNum = 26;
var questionsCopy = ;*/

function score(questionId, answer) {
  xhr1 = new XMLHttpRequest();
  var xhrurl1 = "/api/v1/exam/exam-record/front/submitPaper";
  var xhrdata1 =
    "examId=" + examId + "&examRecordId=" + recordId + "&submitType=Hand&answerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" + questionId +
    "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&clientType=1&lastCacheTime=" + String(new Date().getTime()) +
    "&submitDetailType=2&clientVersion=Chrome%2F74.0.3729.169&noAnswerCount=" + (questionNum - 1) + "&answeredCount=1";
  xhr1.open("POST", xhrurl1, false);
  xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr1.setRequestHeader("Authorization", auth);
  xhr1.send(xhrdata1);
  xhr2 = new XMLHttpRequest();
  var xhrurl2 = "/api/v1/exam/exam-record/score";
  var xhrdata2 =
    "examId=" + examId + "&examRecordId=" + recordId + "&paperInstanceId=" + paperId + "&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" +
    questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D";
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

//console.log(questionsDic1);

answers = JSON.stringify(questionsDic1);

(function (console) {
    console.save = function (data, filename) {
        let MIME_TYPE = "text/json";
        if (!data) return;
        if (!filename) filename = name + ".txt";
        console.log(filename);
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
