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
var questionsDic1 = {"c00672e8-eff4-4a1c-9042-595570b7e622":{"type":1,"question":"（）是依托传输网络资源向集团客户提供的数字传输电路租用和维护服务。公司根据集团客户选择的传输带宽、业务接口类型和传输地点，为其搭建安全、可靠的专用数据通道环境，以实现传送数据业务的需求。","answers":"数据专线"},"4c921c54-ba72-4ecd-9915-e53e2f914bfe":{"type":1,"question":"移动云业务资费主要包括（）种标准。","answers":"4"},"c828509d-9dfe-4174-b326-2c2a55ff9851":{"type":1,"question":"和商务TV业务包括哪些业务类型？（）","answers":"电视屏幕个性化定制服务和基础视听资源接入支撑服务业务"},"286f985a-a891-43ee-a321-94226824a740":{"type":1,"question":"下列场景中，不属于金融行业应用场景的是（）。","answers":"智慧闸机"},"38b22720-cbc2-4803-9dd7-cc023b7ad094":{"type":1,"question":"某客户需求如下：1.异地灾备系统互联；2.尽量高的安全要求；3.与互联网隔离。最可能满足以上需求的专线是（）。","answers":"数据专线"},"8982f533-aa52-4d92-9f6b-a35716813895":{"type":1,"question":"“远程医疗平台”是以国家政策法规为指引，以分级诊疗为核心模式，基于中国移动基础通信网络和覆盖全国的云视讯网络，打造的集会诊、影像判读、心电判读、（）、互联网诊疗为一体的综合性远程医疗服务平台。","answers":"教学培训"},"31a43341-d061-422b-be81-e2671983cf86":{"type":1,"question":"移动云资源布局N+31+X中的N目前覆盖（）个业务大区。 ","answers":"5"},"a661554e-8a89-4f0a-9041-af59fccb822d":{"type":1,"question":"移动云业务办理时，客户编码是在（）平台生成。","answers":"EBOSS"},"65c3e198-a7d2-45ff-8d75-aedff0c0a4ec":{"type":1,"question":"关于和办公的说法，下列错误的是（）。","answers":"和办公APP是以高品质办公应用为切入点，提供线上成员权益、营销活动入口，但无法提供中小企业N项业务的自服务入口"},"996545d4-1168-4048-ac01-e0be8dba5ca5":{"type":1,"question":"以下关于中国移动云MAS的描述，错误的是（）。","answers":"云MAS仅支持页面短信发送"},"55e4aa42-0469-4fac-a336-23fce9f658e8":{"type":1,"question":"5G专网的专享服务模式主要解决客户哪些需求？（）","answers":"数据不出场、超低时延"},"fe7b930a-df51-4679-8bfc-fb08881a8788":{"type":1,"question":"中国移动云MAS从多方面保障客户安全，具体包括：（）。","answers":"以上都是"},"e769bef0-d4e0-4972-81d6-cafdd294dfe1":{"type":1,"question":"基础设施即服务（IaaS）中云平台管理范围不包括（）。","answers":"操作系统"},"43f4b019-ca48-4d51-bd63-02306fe5e6a4":{"type":1,"question":"云视讯产品专有会议接入号码是（）。","answers":"125339"},"fa189075-bdee-405e-ae47-5873fd261ae6":{"type":1,"question":"车路协同云平台可实现V2X设备和（）的接入与管理。","answers":"路侧感知设备"},"15c61340-8b8e-443e-96bc-6225fa615242":{"type":1,"question":"和商务TV业务包括哪些业务类型？（）","answers":"电视屏幕个性化定制服务和基础视听资源接入支撑服务业务"},"c04e7c1b-3ed2-4cfc-8d9a-e792512024f8":{"type":1,"question":"车联网后装，提供云管端一体化的2B车队管理服务，应用于企事业公务用车市场，运营车辆、公交等客货运输市场以及自动配送，智能作业，短途/接驳等新兴市场，主要产品能力有（）。","answers":"以上都是"},"ac796699-053e-4e29-8af0-661e34226f26":{"type":1,"question":"OneNET平台主要面向哪类客户？（）","answers":"企业/个人物联网行业开发者"},"652fc2b6-5794-4a91-98e7-16efb819dbc0":{"type":2,"question":"移动云的卖点包括（）。","answers":["属地支撑","属地支撑","专项定制","云网融合"]},"bfb0db63-de7d-4860-b455-2b455c28f528":{"type":2,"question":"移动查房主要具有哪些功能？（）","answers":["护理信息阅览","流畅视频记录","实时医嘱调阅","智能语音识别记录"]},"52a522a5-8c36-4150-aeb2-b4c078c1e01b":{"type":2,"question":"以下功能可在和商务TV界面实现的是（）。","answers":["开机欢迎语定制","开机播放消防知识视频","酒店个人消费账单查询","酒店所在省份景点信息定制"]},"cd6f4821-c90c-4103-bee8-54c64d3f977e":{"type":2,"question":"万维模型可输出的产品类型有？（）","answers":["白名单","信用分","反欺诈模型"]},"88541456-819a-453d-831e-d81b3706d647":{"type":3,"question":"以下说法是否正确：OneLink平台对标Jasper平台已在各项能力上实现了全面超越。","answers":"错误"},"edee644b-a7e2-4124-88cb-0a0da4a64b0c":{"type":3,"question":"以下说法是否正确：园区物业管理使用的各种设备如摄像头、智能一卡通、IoT终端设备，不可以通过百川智慧园区平台管理。","answers":"错误"},"2d95fd71-cced-4981-b810-fb8e5e387fa8":{"type":3,"question":"以下说法是否正确：为规范和对讲业务，和对讲平台不支持线下为客户开通商用。","answers":"正确"},"a9be0d2c-784f-4d1e-8cf1-3a7b177bbc01":{"type":1,"question":"和办公超级会议每月向团队成员免费赠送（）分钟使用时长。","answers":"500"},"cb2fbae7-c862-4dc0-b2fd-a8d0816616b2":{"type":1,"question":"中国移动智慧校园平台基于哪种云平台架构设计？（）","answers":"混合云"},"c126d222-9c1c-4e2e-b96b-4cbb19b6246b":{"type":2,"question":"以下哪些是MediaX的功能？（）","answers":["会议管理","媒体处理","媒体控制"]},"aff9926a-3715-4f9c-b46c-194fcdbfa686":{"type":3,"question":"以下说法是否正确：AI辅助诊断可实现对影像医学数据进行建模分析，对病情、病灶进行分析，为医生提供决策支撑，提升医疗效率和质量。","answers":"正确"},"bedc7a2e-c964-48d3-9eef-b1b991dca816":{"type":3,"question":"以下说法是否正确：云WiFi的SSID漫游功能可实现无线信号覆盖范围内无缝漫游，不需手动重新认证。","answers":"正确"}}


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
