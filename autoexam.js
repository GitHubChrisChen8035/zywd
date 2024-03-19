//auto_exam.js
try {
    //移除切屏监听事件
    removeEventListener("blur", getEventListeners(window).blur[0].listener);
    //window.blur = "";
    setInterval(function () {
        $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncopy", "").attr("onpaste", "");
    }, 2000)
} catch (error) {}


//var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ", "");

var name = "代维-集客专线-通用-L1-202403-A场";

var filename = "https://raw.githubusercontent.com/GitHubChrisChen8035/zywd/main/答案集/" + name + ".txt";

console.log(filename);

//全局定义，但不赋值，默认值将是undefined
var questionsDic;

// 使用 fetch API 获取文件内容，并赋值给questionsDic
fetch(filename)
    .then(response => response.text())
    .then(text => {
        // 正则表达式用于匹配不需要转义的双引号前后的特定字符（{, :, [, }, ,]）
        // 并保留这些字符不变，同时转义其他情况下的双引号
        questionsDic = JSON.parse(text.replace(/(?<![{,:[\]])"(?![,:}\]])/g, '\\"'));
	
        console.log(typeof(questionsDic),questionsDic);
    })
    .catch(error => {
	questionsDic = {};
        console.log('当前考试暂无答案');
    });

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
                //取消选择的checkbox
                //document.evaluate('//a[contains(@id,"' + questionId + '")]', document).iterateNext().style.backgroundColor="#32CD32";
                var answers = Xpath('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div//input[@type="checkbox"]');
                if (answers[0]) {
                    for (ans of answers) {
                        ans.checked = false;
                    }
                }
                //必须先反选，再延迟选择正确答案。猜测是正确答案click后，会更新checkbox，导致之前的反选操作失效
                setTimeout(function () {
                    for (var answer of answerList) {
                        document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label',document).iterateNext().click();
                    }
                }, 500)
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
                //alert("答题完成，请记住个人码，重新进入考试");
                //window.opener=null;window.top.open('','_self','');window.close();
                //document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";
                alert("答题完成，感谢使用");
                console.log("答题完毕，感谢使用");
            }, questionNum * 50)
        }
    }, 1000 * i);
}
if (Object.keys(questionsDic).length > 0) {
    console.log(name + "  开始答题...");
    var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
    console.log(auth);
    var req = new XMLHttpRequest();
    req.open(
        "GET", "/api/v1/system/setting/frontend?_=" + new Date().getTime(), false);
    req.setRequestHeader("Authorization", auth);
    req.send(null);
    res = JSON.parse(req.responseText);
    currentUserId = res.currentUser.id;
    var content = document.getElementsByClassName("head-info")[1].children[0].innerHTML;
    var questionNum = parseInt(content.match(/\d+/)[0],10);
    
    console.log(questionNum);
    var next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();
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

} else {
    console.log("当前考试暂无答案")
    alert("当前考试暂无答案")
}

