//auto_exam.js
try{
	//移除切屏监听事件
	removeEventListener("blur",getEventListeners(window).blur[0].listener);
	//解除复制粘贴限制，这里[onpaste]是用属性选择的办法定位元素，并修改其attr
	setInterval(function(){ $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncut", "").attr("onpaste", ""); } , 2000)
}catch(error){}
var ansArray = {"name2":{"245":"245","ok":[1,23]},"在线考试test6":{"6f2a9367-96e8-43bb-8d62-2f1cf4155e33":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}},"在线考试test7":{"6f2a9367-96e8-43bb-8d62-2f1cf4155e33":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}}};
var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ", "");
if(name.slice(name.length-3) == '...'){
	name = name.slice(0,(name.length-3));		
}

//var name = "宁波移动员工网信安全考试";

var questionNum = document.getElementsByClassName("list-item").length;
console.log(questionNum);

function autoExam(name) {
  const url = 'https://api.github.com/repos/GitHubChrisChen8035/zywd/contents/答案集/' + name + '.txt';
  console.log(url);
  // 发送GET请求
  fetch(url)
    .then(response => {
      // 检查响应状态
      if (!response.ok) {
        alert(`本场考试暂无答案`);
        throw new Error(`本场考试暂无答案`);
      }
      return response.json();
    })
    .then(data => {
      // 对Base64编码的内容进行解码
      const text = decodeURIComponent(escape(atob(data.content)));
      //console.log(text);
      return text;
    })
    .then(text => {
	// 正则表达式用于匹配不需要转义的双引号前后的特定字符（{, :, [, }, ,]）,并保留这些字符不变，同时转义其他情况下的双引号
	const questionsDic = JSON.parse(text.replace(/(?<![{,:[\]])"(?![,:}\]])/g, '\\"').replace(/\n/g, ""));
	
	console.log(typeof(questionsDic),questionsDic);
	
	console.log(name + "  开始答题...");
	var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
	//console.log(auth);
	var req = new XMLHttpRequest();
	req.open("GET", "/api/v1/system/setting/frontend?_=" + new Date().getTime(), false);
	req.setRequestHeader("Authorization", auth);
	req.send(null);
	res = JSON.parse(req.responseText);
	currentUserId = res.currentUser.id;  
	
	var next = document.evaluate('//div[contains(@class, "border") and (text()="下一题" or text()="上一题")]', document).iterateNext();
	for (var i = 0; i < questionNum; i++) {
	    if (next) {
		try {
		    document.getElementsByClassName("list-item")[0].click();
		} catch (error) {}
		task(i, 0)
	    } else {
		task(0, i)
	    }
	}
	
			
	}).catch(err => {
	        console.error("发生错误:", err.message);
	    });
}

//JS原生xpath选择，document.evaluate返回的是枚举类型，需要逐个取出
function Xpath(xpath) {
    var xresult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    var xnodes = [];
    var xres;
    while (xres = xresult.iterateNext()) {
        xnodes.push(xres);
    }
    return xnodes;
}
//自动做题function，i为时间延迟参数，j为题目编号。分为三部分：主函数 + 下一题try + 结束判断
function task(i, j) {
    setTimeout(function () {
        try {
            var questionId = document.getElementsByClassName("question")[j].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
            var answerList = questionsDic[questionId]['answers'];
            if (questionsDic[questionId]['type'] == 1) {
                document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label',document).iterateNext().click();
            } else if (questionsDic[questionId]['type'] == 3) {
                document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();
            } else if (questionsDic[questionId]['type'] == 2) {
                    for (var answer of answerList) {
                        document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label',document).iterateNext().click();
                    }
            } else {
                console.log("题型错误！");
                Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click();
            }
        } catch (error) {
            Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click();
        }
        try {
            document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
        } catch (error) {}
        if (i == questionNum - 1 || j == questionNum - 1) {
            //由于多选需要反选操作，导致正确答案填入有延后，当多选题量大时，需要延迟一定时间弹出alert
            setTimeout(function () {
                alert("答题完成，感谢使用");
                console.log("答题完毕，感谢使用");
            }, questionNum * 50)
        }
    }, 1000 * i);
}

autoExam(name);
