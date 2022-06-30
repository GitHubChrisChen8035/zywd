try{var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("dialog animated")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("modal auto")[0];alt.remove();}catch(error){}

try{removeEventListener("blur",getEventListeners(window).blur[0].listener);}catch(error){}

try{var alt1 = document.getElementsByClassName("dialog-overlay")[0];alt1.remove();}catch(error){}

try{var alt2 = document.getElementsByClassName("alertify-cover")[0];alt2.remove();}catch(error){}

var kw = "测试";
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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf(kw) != -1){
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

var info = {};

info["kw"] = kw;
info["auth"] = auth;
info["currentUserId"] = currentUserId;
info["examId"] = examId;
info["recordId"] = recordId;
info["paperId"] = paperId;
info["questionNum"] = questionNum;
info["questionsCopy"] = questionsCopy;

localStorage.setItem("info",JSON.stringify(info));
