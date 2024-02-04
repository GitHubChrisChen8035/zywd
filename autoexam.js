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
var questionsDic1 = {"06424db0-f31d-4b69-a18f-fbc86c0b7fb0":{"type":1,"question":"以下选项中，（）不属于现场营销话术四要点之一。","answers":"探寻"},"d809b7ff-19da-4a62-895a-285f80ff1e2b":{"type":1,"question":"关于家庭组网包含的服务内容，以下描述中错误的是（）。","answers":"不包括家庭网络现场评测"},"8b11db40-eb92-4451-befe-0202179e01e0":{"type":1,"question":"宽带办理流程中涉及市场线条工作的是（）。","answers":"业务受理"},"a00c41ba-27c9-47f3-ba4a-afcf642d7b77":{"type":1,"question":"魔百和的增值产品，一般来说不包括哪种模式（）。","answers":"包天"},"ea8d3c8c-1dc2-40af-8c3a-b9cbc06ef29e":{"type":1,"question":"按服务规范要求，需配置客户经理专属服务的客户为（）。","answers":"1000M宽带客户"},"7768c879-4657-4d31-be9c-a883afdfc4a1":{"type":1,"question":"以下哪个产品不属于“智享+”业务?（）","answers":"魔百和"},"d35baf73-93fe-43e0-84c7-37b07643a357":{"type":1,"question":"以下选项中，以下不属于订购过程中资费提醒的是（）。","answers":"账单提醒"},"2faa211e-30ab-4c00-beb6-63aa6c5a86b2":{"type":1,"question":"以下关于基础安防包中全天型云存和事件型云存的说法错误的是？（  ）","answers":"事件型指全天24小时不间断录制"},"34244be4-c5f2-4422-aa44-d53c2dc89ef1":{"type":1,"question":"中国移动智能组网设备接入的标准化协议是（）。","answers":"Andlink"},"a69820e7-1f72-4e76-848e-775a73d74b79":{"type":1,"question":"“新榜单命中率高”体现了大屏业务内容（）的特点。","answers":"新"},"b458f3af-19eb-47d6-8820-dd8ee255408f":{"type":1,"question":"智能组网是面向（）家庭宽带用户提供的“家庭网络提升”服务。","answers":"中国移动"},"983af908-2b2b-4cef-8eef-ada9616437b4":{"type":1,"question":"中国智慧家庭市场仍处于（），智慧家庭作为待开发的蓝海，将容纳越来越多的市场竞争者，市场空间和潜力巨大。","answers":"启动期"},"1e380d90-c98a-426e-8f6f-a696734bafb6":{"type":1,"question":"大屏业务是以（）终端为载体的融媒体业务。","answers":"电视"},"cbf54cb0-b923-45bd-9d91-d17ec8b927df":{"type":1,"question":"OTT模式的魔百和业务，牌照方一共有（）家。","answers":"7"},"da2e0040-43f4-479b-88cc-9616ed432355":{"type":1,"question":"中国移动家庭宽带（）年赶超友商，成为最大的宽带运营商。","answers":"2018年"},"e15ef4a8-aee3-4816-8fcb-29ff4d10a761":{"type":1,"question":"目前大屏业务主流推广的定价模式是（）。","answers":"包月"},"3da8b412-2193-480e-b24c-f837a18673c1":{"type":1,"question":"（）的解决方案主要有无线路由器方案、POE方案、电力猫方案等。","answers":"智能组网服务"},"82353960-5af0-4767-9f00-2ee441fb182a":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务装机时间要求最高不超过（）。","answers":"48小时"},"b9b3fffc-3d8d-43b0-b784-616e5b952da0":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务故障维护时间要求最高不超过（）。","answers":"24小时"},"f8665af5-7bad-44e1-85e7-3b93e2f54f16":{"type":1,"question":"以下哪个场景推荐使用猫眼设备？（）","answers":"门口"},"0fcdce8e-f920-489e-9a08-6127e8d3c871":{"type":2,"question":"哪些会影响用户的最终WiFi信号质量感知（）。","answers":["空间损耗","信号穿墙","周边邻居wifi干扰","路由器放在金属箱内"]},"5bfc7f3e-64f8-49ff-81bc-6ed21c005dba":{"type":2,"question":"智慧家庭市场发展的三个阶段分别是（）。","answers":["视频+光宽","家庭物联","家庭智能"]},"0ff61215-b74a-4b5f-9240-74f3f4b007d4":{"type":2,"question":"WIFI5G频段的特点是（）。","answers":["穿墙能力弱","信道多","速率高","干扰小"]},"18e897bf-b4c1-47b7-85f1-f10939bfff4f":{"type":2,"question":"开通云存储可以享受（）权益。","answers":["回放视频查看","告警事件"]},"86c105cc-4344-4379-a0f3-a5d82de729c1":{"type":2,"question":"近期公司家庭业务发展聚焦“1+1+1+4+N”产品，其中属于4个硬件产品的是？（）","answers":["智能音箱","智能组网","语音遥控器","家庭安防"]},"1c1a45fb-6ae7-4354-bb25-e9aaecbbd9ff":{"type":3,"question":"以下说法是否正确：家庭宽带上下行速率一般对称，对外宣传推广的100M/200M宽带，一般是指上行速率。","answers":"错误"},"9e36426a-2dde-49a5-a6cc-ff28ca901d07":{"type":3,"question":"以下说法是否正确：安防云存类型分为事件型和全天型2大类。","answers":"正确"},"610fa5c6-257e-4830-9957-ddf9a63f2721":{"type":3,"question":"以下说法是否正确：当有陌生人闯入房间，智能摄像头将自动启动视频录像，并发布警报将消息传送至手机。","answers":"正确"},"c0e10098-45be-4719-9ba5-bbdc4cec5b7a":{"type":3,"question":"以下说法是否正确：客户办理手机业务需要进行实名登记，办理宽带业务时可以不进行实名登记。","answers":"错误"},"1cb889f7-157e-4b03-a3f6-9b9f83300bdf":{"type":3,"question":"以下说法是否正确：家庭市场是面向家庭里面的个人，满足家庭成员个人需求的一系列产品和服务解决方案。","answers":"错误"}}


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
            var answerList = questionsDic1[questionId]['answers'];
            if (questionsDic1[questionId]['type'] == 1) {

                document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label',document).iterateNext().click();

            } else if (questionsDic1[questionId]['type'] == 3) {

                document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();

            } else if (questionsDic1[questionId]['type'] == 2) {
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

if (Object.keys(questionsDic1).length > 0) {
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
