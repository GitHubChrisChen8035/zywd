var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
//console.log("Token=" + token);
//const auth = "Bearer__b5b675d2d6363a5d121d96902c2fea7d";

var examId = document.location.href.match(/([0-9a-zA-Z]+-){4}[0-9a-zA-Z]+/gi)[0];
var req = new XMLHttpRequest();
req.open('GET', "https://wangda.chinamobile.com/api/v1/exam/exam/front/exam-paper?examId=" + examId, false);
req.setRequestHeader("Authorization", auth);
req.send(null);

res = JSON.parse(req.responseText);
var recordId = res.examRecord.id;
var paperId = res.examRecord.paperInstanceId;
var questionNum = res.paper.questionNum;


function score(questionId,answer){

		xhr1 = new XMLHttpRequest();
		var xhrurl1 = "https://wangda.chinamobile.com/api/v1/exam/exam-record/front/submitPaper";
		var xhrdata1 = "examId=" + examId + "&examRecordId=" + recordId + "&submitType=Auto&answerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D&clientType=1&lastCacheTime=" + String(new Date().getTime()) + "&submitDetailType=1&clientVersion=Chrome%2F74.0.3729.169&noAnswerCount=" + (questionNum - 1) + "&answeredCount=1";
		
		xhr1.open("POST", xhrurl1, false);
		xhr1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr1.setRequestHeader("Authorization", auth);
		xhr1.send(xhrdata1);

		xhr2 = new XMLHttpRequest();
		var xhrurl2 = "https://wangda.chinamobile.com/api/v1/exam/exam-record/my-score";
		var xhrdata2 = "examId=" + examId + "&examRecordId=" + recordId + "&paperInstanceId=" + paperId + "&fullAnswerRecords=%5B%7B%22questionId%22%3A%22" + questionId + "%22%2C%22answer%22%3A%22" + encodeURIComponent(answer) + "%22%7D%5D";
			
		xhr2.open("POST", xhrurl2, false);
		xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr2.setRequestHeader("Authorization", auth);
		xhr2.send(xhrdata2);

		return (JSON.parse(xhr2.responseText)["score"] > 0) ? true:false;
}

$(document).ready(function(){
	$("body").on('click','.question',function(){
		var questionId = $(this).find("a").attr("name").replace(/question-/,"");
		//console.log(questionId);
		
		var answerOpts = $(this).parent().next().find("input");
		var optType = answerOpts.eq(0).attr("type");
		//console.log(answerOpts.length);
		
		if (optType == "radio"){

			for (var j=0;j<answerOpts.length;j++){
				//console.log("curJ=" + j);
				var curAnswer = String(answerOpts.eq(j).attr("value"));
				//console.log("curValue=" + curAnswer);
				if (score(questionId,curAnswer)){
					//需从JQuery对象转换为DOM对象，才能使用.click方法
					answerOpts.eq(j)[0].click();
					break;
				}
			}
		} else if (optType == "checkbox"){
			
			  var optList = ["0,1","0,2","1,2","0,3","1,3","2,3","0,1,2","0,1,3","0,2,3","1,2,3"];
			  for (var j=0;j<optList.length;j++){

				  var curAnswers = optList[j];
				  //console.log("curAnswers=" + curAnswers);
				  if (score(questionId,curAnswers)){
					  var answer = curAnswers.split(",");
					  for (var m=0;m<answer.length;m++){
						  answerOpts.filter("[value = " + answer[m] +"]")[0].click();
					  }
					  break;
				  } else {
					//不满足前10种答案，则全选
					  if (j == 9){
						  //console.log('全选~');
						  for (var n=0;n<answerOpts.length;n++){
							  answerOpts.eq(n)[0].click();
						  }
						  break;	
					  }
				  }
			  }	
		  } else {
			  console.log("无效题型!");				
		}
	})
	
})
