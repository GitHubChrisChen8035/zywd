//auto_exam2.js
try {
    //移除切屏监听事件
    removeEventListener("blur", getEventListeners(window).blur[0].listener);
    //window.blur = "";
    setInterval(function () {
        $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncopy", "").attr("onpaste", "");
    }, 2000)
} catch (error) {}

//更新答案集
var questionsDic1 = `
{"bbaab901-1b48-43a3-8204-bd70f848f7c6":{"type":1,"question":"网络应用系统的安全性需求分析主要表现在()","answers":"包括以上"},"6d31fbb5-5b61-450b-9c7d-fbe386ba2139":{"type":1,"question":"网络运营者对外提供产品和服务,则应当符合国家相关标准的()性要求","answers":"强制"},"782f00f0-8638-4c52-a9d0-2cd2fffbf48b":{"type":1,"question":"遇到如地震、海啸等极端自然灾害的时候,卫星通信业务将为救灾提供高效保障,这主要体现了中国电信天通卫星的哪项优势?","answers":"不受地面通信网络的制约,通信无盲区"},"0730766f-62f8-4277-8232-399026297967":{"type":1,"question":"《数据安全法》提到的数据处理,包括哪些环节","answers":"收集、存储、使用、加工、传输、提供、公开等"},"eef16769-7d8a-481a-a62c-d4a7a8b0fea1":{"type":1,"question":"负责关键信息基础设施保护工作的部门,除按原有渠道报送网络安全预警信息外,还应向国家()报送","answers":"网信部门"},"8bb56678-943e-437a-a1c9-d4fb54373143":{"type":1,"question":"我国对密码实行分类管理,实施分类管理的密码不包括()","answers":"个人密码"},"af345225-9dac-4036-b1ef-0be441c4beca":{"type":1,"question":"开展关键信息基础设施安全保护工作,负责统筹协调的是哪个部门?","answers":"国家网信部门"},"e9eef8da-24ad-4031-8b0f-c9fd6e2b0325":{"type":1,"question":"信息系统安全责任主体根据系统重要性负责对系统开展定级,并向()所在的公共网络安全监管部门进行备案","answers":"地市"},"17ebedc0-0d44-4df2-b3a9-1af113cf5483":{"type":1,"question":"网络产品、服务具有()的,其提供者应当向用户明示并取得同意,涉及用户个人信息的,还应当遵守《网络安全法》和有关法律、行政法规关于个人信息保护的规定。","answers":"收集用户信息功能"},"2717c219-1c1f-4a2c-8f70-c290b621f6dc":{"type":1,"question":"负责关键信息基础设施保护工作的部门,除按原有渠道报送网络安全预警信息外,还应向国家()报送。","answers":"工信部"},"855c92ec-bdba-4a3e-a793-4af2ae11a49e":{"type":2,"question":"以下哪些场景下个人信息处理者应主动删除个人信息?","answers":["个人信息处理者停止提供产品或者服务,或者保存期限已满","个人撤回同意个人信息处理者违反法律、行政法规或者违反约定处理个人信息","处理目的已实现、无法实现或者为实现处理目的不再必要","法律、行政法规规定的其他情形"]},"9712a9b5-761b-45ee-a32a-05f71d5bce81":{"type":2,"question":"保护自己免受恶意代码的危害,可采取以下哪些措施?","answers":["安装或启用防火墙","谨慎点击链接和附件","保持系统、软件更新","文件备份","阻止广告弹出","禁用自动运行、自动播放功能,禁用文档宏加载","安装和维护防病毒软件"]},"1ef95ac1-ed2f-4ccc-a4e8-5f6f42ec8a1f":{"type":2,"question":"以下哪一项是申报网络安全审查应当提交的材料?","answers":["影响或者可能影响国家安全的分析报告","采购文件、协议、拟签订的合同","申报书","网络安全审查工作需要的其他材料"]},"524e329a-d4d3-405f-ac34-fba410f311f7":{"type":2,"question":"商用密码检测机构应有哪些资质?","answers":["具有法人资格","具有与从事商用密码检测活动相适应的资金、场所、设备设施、专业人员和专业能力","具有保证商用密码检测活动有效运行的管理体系"]},"73b43fc2-f679-43de-8b43-fbd94cb4783b":{"type":2,"question":"根据《网络安全法》的规定,()和其他有关机关依照本法和有关法律、行政法规的规定,在各自职责范围内负责网络安全保护和监督管理工作","answers":["公安部门","国务院电信主管部门"]},"71e6bc20-4c74-4f76-b028-e8b20d75b176":{"type":3,"question":"密码设置的基本原则中密码长度应至少8位。","answers":"正确"},"e6228ad2-1220-4694-9624-99a746c85d71":{"type":3,"question":"部署WAF安全防护设备无法有效防护业务逻辑漏洞","answers":"正确"},"44bccc56-7e57-4733-bc1b-205fb642795c":{"type":3,"question":"在宾馆里，不登录无密码的WiFi办公。登录有密码的宾馆WiFi办公，且开着杀毒软件，方可收发邮件","answers":"错误"},"a74fe98b-b291-46c7-9537-7a642c320b33":{"type":3,"question":"如果我们认为计算机受到感染，应该第一时间联系安全团队处理","answers":"错误"},"41d6adf3-a52a-4800-ae27-652f0a6b770c":{"type":3,"question":"如果邮件附件带有可执行文件(.exe格式等),或加密压缩包的，应当引起警惕。Word、XLS、PDF、TXT等文档则可放心打开。","answers":"错误"}}
`
function escapeSpecialQuotes(jsonString) {
  // 正则表达式用于匹配不需要转义的双引号前后的特定字符（{, :, [, }, ,]）
  // 并保留这些字符不变，同时转义其他情况下的双引号
  return JSON.parse(jsonString.replace(/(?<![{,:[\]])"(?![,:}\]])/g, '\\"'));
}


// 调用函数处理字符串
var questionsDic = escapeSpecialQuotes(questionsDic1);

console.log(questionsDic);


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
    var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ", "");
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
    function reload() {
        //alert("请记住您的个人码：" + "111");
        location.reload();
        console.log("reload..");
    };
    //点击"我要交卷",刷新当前页面
    //document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].addEventListener("click", reload);
} else {
    console.log("题库尚未更新！")
    alert("题库尚未更新！")
}
