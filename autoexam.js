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
var questionsDic1 = {"d35baf73-93fe-43e0-84c7-37b07643a357":{"type":1,"question":"以下选项中，以下不属于订购过程中资费提醒的是（）。","answers":"账单提醒"},"f8665af5-7bad-44e1-85e7-3b93e2f54f16":{"type":1,"question":"以下哪个场景推荐使用猫眼设备？（）","answers":"门口"},"372a0bc8-0b87-4a6f-a4da-1eae5b8542a0":{"type":1,"question":"IPTV模式的魔百和业务，描述正确的是（）。","answers":"两级播控"},"b0a7853a-1990-4b53-9bf5-9c85c16bc0fe":{"type":1,"question":"智能组网服务施工结束后，需客户体验前后优化效果，（），业务完成。","answers":"客户验收完成后"},"945e050c-686d-4cf8-b5df-35088aca45f3":{"type":1,"question":"大屏业务服务体系完善，（）机制可以有效降低用户投诉，提升客户满意度。","answers":"分层分级机制"},"cb229a9e-6070-47f1-93d0-76ecf2d06d13":{"type":1,"question":"我国固定家庭宽带接入总体经历了（）个时期的发展。","answers":"5"},"7c044478-7eaa-4d08-a30b-c75129ab0096":{"type":1,"question":"目前家庭宽带客户速率主要集中在（）。","answers":"100M及以下"},"1e380d90-c98a-426e-8f6f-a696734bafb6":{"type":1,"question":"大屏业务是以（）终端为载体的融媒体业务。","answers":"电视"},"4a17a9d5-3999-4f89-8211-83dca4f5615d":{"type":1,"question":"关于家庭组网的服务目标，以下描述中错误的是（）。","answers":"宽带提速"},"d809b7ff-19da-4a62-895a-285f80ff1e2b":{"type":1,"question":"关于家庭组网包含的服务内容，以下描述中错误的是（）。","answers":"不包括家庭网络现场评测"},"a00c41ba-27c9-47f3-ba4a-afcf642d7b77":{"type":1,"question":"魔百和的增值产品，一般来说不包括哪种模式（）。","answers":"包天"},"8bea0c1d-6697-4283-8eaf-ad002e0896a2":{"type":1,"question":"移动看家安防云存储套餐目前最长支持（）天。","answers":"30"},"5cdaa28b-50b7-4b71-adea-541dd977128e":{"type":1,"question":"（）典型业务场景有家庭WIFI信号不好、家庭智能终端较多等场景。","answers":"智能组网服务"},"c7524b11-dd21-42fa-b4d5-c47d497b59ec":{"type":1,"question":"智能组网服务施工结束后，需（），客户验收完成后，业务完成。","answers":"客户体验前后优化效果"},"b9b3fffc-3d8d-43b0-b784-616e5b952da0":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务故障维护时间要求最高不超过（）。","answers":"24小时"},"34244be4-c5f2-4422-aa44-d53c2dc89ef1":{"type":1,"question":"中国移动智能组网设备接入的标准化协议是（）。","answers":"Andlink"},"ab6c7cc1-d1c1-4acb-91cc-9cb5e5fa9f5f":{"type":1,"question":"保底型家庭融合宽带最主要的特征是（）。","answers":"成员资费独立"},"05cc017d-24e5-41ae-ba55-f42498bf375d":{"type":1,"question":"中国移动（）年获得固网运营牌照。","answers":"2013年"},"dacce157-19b5-4355-91d7-d17b4938bbdd":{"type":1,"question":"智能组网服务中（）方案，可实现家中弱电施工美观实用，同时也可解决多房间的WIFI信号覆盖问题。","answers":"POE面板+AP"},"25aa5b7e-ca1a-4754-8abc-e0afaf0619c3":{"type":1,"question":"以下选项中，（）不是大屏业务的查询退订渠道。","answers":"邮件"},"18e897bf-b4c1-47b7-85f1-f10939bfff4f":{"type":2,"question":"开通云存储可以享受（）权益。","answers":["回放视频查看","告警事件"]},"dce59022-90a7-4694-9af3-9eb6896edc72":{"type":2,"question":"以下哪些材质的物体会对WIFI信号造成比较大的损耗？（）","answers":["承重墙","金属柜"]},"aab90bb9-d400-44c2-a43b-eb6c73b603d8":{"type":2,"question":"大屏业务活动专题运营一般可以从以下哪些角度进行推荐？（）","answers":["重要节日","重点事件","关键主题","头部IP"]},"50f4d2a9-84bb-4c63-914c-2fb9813c61f4":{"type":2,"question":"宽带业务的办理流程包括（）。","answers":["数据制作","工单施工","工单回访及归档","资源分配","业务受理","工单调度"]},"29255275-75ae-4dd4-b0e0-5ab605487a22":{"type":2,"question":"智能组网服务可以通过（）渠道申请办理该业务。","answers":["移动营业厅","和家亲APP","装维上门随销"]},"088cbac0-7f28-48d2-97ea-1e753503810f":{"type":3,"question":"以下说法是否正确：智能组网服务的内容包括专业的家庭WiFi环境测评、组网设计、组网终端销售、调测部署服务，以达到WiFi覆盖更优、上网更稳更快的目的。","answers":"正确"},"9e36426a-2dde-49a5-a6cc-ff28ca901d07":{"type":3,"question":"以下说法是否正确：安防云存类型分为事件型和全天型2大类。","answers":"正确"},"610fa5c6-257e-4830-9957-ddf9a63f2721":{"type":3,"question":"以下说法是否正确：当有陌生人闯入房间，智能摄像头将自动启动视频录像，并发布警报将消息传送至手机。","answers":"正确"},"27b64d68-837c-46c0-afc9-58458bd31afc":{"type":3,"question":"以下说法是否正确：《中国移动2019-2021年战略规划纲要》提出加强全量融合产品创新，拓展智慧家庭价值是重点战略措施。","answers":"正确"},"70189bc7-f087-4da5-85f7-1c5501cb00b9":{"type":3,"question":"以下说法是否正确：大屏专题运营可以有效发挥存量内容的长尾价值。","answers":"正确"}}


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
