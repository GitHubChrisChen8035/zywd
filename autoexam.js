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
var questionsDic1 = {"4254ce4c-25f7-4d17-a9f3-090d384cc09a":{"type":1,"question":"某企业有全网发送需求，预估月发送量两千万条以上。如果你是客户经理，为保障客户发送质量，你会选择为其开通（）业务。","answers":"省行业网关全网长流程云MAS"},"9eaf619f-cfc6-4026-9ae1-7c2db3cd8e6f":{"type":1,"question":"龙头示范项目落地验收需完成哪几大里程碑？（）","answers":"完成5G网络部署、应用落地、商业拓展"},"38289cd0-bfd9-4271-aaea-99134006be17":{"type":1,"question":"智慧高速解决方案中不包含哪个功能？（）","answers":"智能理货"},"f6109262-bddd-42f6-acee-9abee951af45":{"type":1,"question":"以下哪种语音接入设备可以用于办公固话接入？（）","answers":"以上都可以"},"61bf4e8b-f5b2-4374-81bc-c34969b2cf53":{"type":1,"question":"播放一条企业视频彩铃需要耗费（）流量。","answers":"0"},"42c691a2-7f9c-4145-9c27-8a7b736f4882":{"type":1,"question":"下列哪个场景是百川智慧园区方案不涉及的？（）","answers":"柔性生产"},"adb48907-7d51-40c6-a81f-a7ff3ebc1fdf":{"type":1,"question":"新型智慧城市建设步骤是（）。1、启动设计工作2、商业模式确定3、启动基础平台建设4、启动上层应用建设","answers":"1-2-3-4"},"5bac252e-968a-4367-a422-e047e3f42405":{"type":1,"question":"“和宝贝”是面向（）垂直领域的家园互动共育、优质养育教学以及园所高效运营的“云平台+内容+应用”一站式幼教信息化产品。","answers":"幼教"},"e004dc72-ae0e-4769-95e1-ab71250dd30e":{"type":1,"question":"以下哪个功能不属于我司退役军人管理产品的功能模块？（）","answers":"手机话费充值"},"cb2fbae7-c862-4dc0-b2fd-a8d0816616b2":{"type":1,"question":"中国移动智慧校园平台基于哪种云平台架构设计？（）","answers":"混合云"},"65c3e198-a7d2-45ff-8d75-aedff0c0a4ec":{"type":1,"question":"关于和办公的说法，下列错误的是（）。","answers":"和办公APP是以高品质办公应用为切入点，提供线上成员权益、营销活动入口，但无法提供中小企业N项业务的自服务入口"},"2debce73-fd3d-4cc7-a9f9-f8c1465acf1f":{"type":1,"question":"中移上研院在工业能源领域打造的“1+1+1+N”产品体系，其中1+1+1+N的N指的是（）。","answers":"解决方案"},"0a0ac133-1f27-4b12-87cc-204ba1936137":{"type":1,"question":"和宝贝学前信息化平台采集到的学前教育数据根据（）、优秀教师评价体系、幼儿园等级评定办法等理论依据，形成数据统计分析。","answers":"《3-6岁儿童学习与发展指南》"},"e769bef0-d4e0-4972-81d6-cafdd294dfe1":{"type":1,"question":"基础设施即服务（IaaS）中云平台管理范围不包括（）。","answers":"操作系统"},"c83dc441-f44e-44ca-83b0-af0f49bc33db":{"type":1,"question":"以下哪些是云游戏业务指标和技术方案：（）
①时延
②画面帧率、码率
③5G
④边缘计算
⑤网络切片","answers":"①②③④⑤"},"43f4b019-ca48-4d51-bd63-02306fe5e6a4":{"type":1,"question":"云视讯产品专有会议接入号码是（）。","answers":"125339"},"96f82687-d043-414b-9df2-fdab9267771f":{"type":1,"question":"以下关于和商务TV业务的说法正确的是（）。","answers":"以上说法全部正确"},"5babc250-0542-45a4-bc02-cd79da61ace3":{"type":1,"question":"某互联网客户希望能够保障其手游用户游玩时的游戏体验，为客户手游业务提供无线网络保障，建议为客户订购（）业务。","answers":"QoS保障"},"5d8ca945-8bd1-4555-9307-0b6a907dba46":{"type":1,"question":"建设退役军人事物管理平台的主要目的是（）。","answers":"全方位服务于退役军人"},"26aaf508-4c2b-49d6-96d7-14dafa4396cc":{"type":2,"question":"工业互联网主要需求有（）。","answers":["区域工业云","数字化车间","数字化运维"]},"4d5ddcbd-6035-4141-a3bf-f046eb789bd1":{"type":2,"question":"以下关于和商务TV业务的叙述，正确的是（）。","answers":["无论是IPTV模式，还是OTT模式，和商务TV均可提供屏幕定制服务","对于咪咕集中建设播控平台的省份，视听内容包和豪华定制包可以组合订购","和商务TV已经对接过的酒管系统包括：中软、西软、opera、泰能、绿云、别样红、瑞通、千里马","对于分省自建播控平台的省份，在省BOSS开通基础视频业务后，可单点登录政企ESP订购政企和商务TV的屏幕个性化定制服务"]},"5830909f-ba94-4d12-a362-07d4e4d14881":{"type":2,"question":"下列哪些号段属于物联卡的专属号段？（）","answers":["188","10647","1476","144","10648"]},"1a1b3316-ca34-4c9c-836d-36a7410adac8":{"type":2,"question":"妇幼保健、疾控系统不属于以下哪个类别？（）","answers":["智慧医疗","远程医疗","AI诊断"]},"fd29e036-5e43-4ac2-b4d8-0b30d5ee4c76":{"type":2,"question":"行业专网模式划分为（）、（）、（）三个等级，网络差异化能力组合逐步增多，网络专用化程度逐步提高。","answers":["优享","专享","尊享"]},"2a31db3d-c4dc-4acc-8342-ac269da744ce":{"type":3,"question":"以下说法是否正确：智慧医疗所围绕的中心是医院。","answers":"错误"},"556d7ec5-cdb7-4cc0-aa54-f5fb5d70f632":{"type":3,"question":"以下说法是否正确：5G医疗专网+边缘云+应用的云网一体智慧医院体系，是面向患者提供便民利民的智慧医院服务，是面向医护人员提供安全可靠的业务处理系统，是面向管理人员提供迅捷高效的管理手段。","answers":"正确"},"f6c7158a-7923-40cd-a130-ee788d7becaa":{"type":3,"question":"以下说法是否正确：院内智能院区管理能够实现医院资产管理、院内应急调度、院区监控、医务人员管理、设备状态管理、门禁安防、患者体征实时监测、院内导航等服务，提升医院管理效率和患者就医体验。","answers":"正确"},"d6f9c4b4-7225-46a3-b94e-e44778d913b0":{"type":1,"question":"云游戏与传统游戏的主要区别为：（)
①跨终端、即点即玩
②以云计算为基础
③本质是交互性的在线视频流
④降低对终端配置的要求，终端只需基本视频解码能力","answers":"①②③④"},"daaef432-7bca-4fa9-b4d0-4ba30b9bb0b1":{"type":3,"question":"以下说法是否正确：有多个部门和子账号需求的大型客户，中国移动云MAS平台支持客户三级及以上组织架构，并可实现不同子账号账户数据隔离。","answers":"正确"},"bdd96b81-4b65-4641-b019-adbc055d324f":{"type":3,"question":"以下说法是否正确：呼叫中心直连业务需客户提供自有特服号码。","answers":"正确"}}


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
