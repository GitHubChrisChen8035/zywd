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
var questionsDic1 = {"25aa5b7e-ca1a-4754-8abc-e0afaf0619c3":{"type":1,"question":"以下选项中，（）不是大屏业务的查询退订渠道。","answers":"邮件"},"983af908-2b2b-4cef-8eef-ada9616437b4":{"type":1,"question":"中国智慧家庭市场仍处于（），智慧家庭作为待开发的蓝海，将容纳越来越多的市场竞争者，市场空间和潜力巨大。","answers":"启动期"},"fa033b9e-48ea-4490-aba4-8b8630213c51":{"type":1,"question":"2019年中国移动安防产品重点推出（）品牌。","answers":"移动看家"},"82353960-5af0-4767-9f00-2ee441fb182a":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务装机时间要求最高不超过（）。","answers":"48小时"},"dacce157-19b5-4355-91d7-d17b4938bbdd":{"type":1,"question":"智能组网服务中（）方案，可实现家中弱电施工美观实用，同时也可解决多房间的WIFI信号覆盖问题。","answers":"POE面板+AP"},"b9b3fffc-3d8d-43b0-b784-616e5b952da0":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务故障维护时间要求最高不超过（）。","answers":"24小时"},"945e050c-686d-4cf8-b5df-35088aca45f3":{"type":1,"question":"大屏业务服务体系完善，（）机制可以有效降低用户投诉，提升客户满意度。","answers":"分层分级机制"},"9d2bf1f0-2a8a-4f7d-9f09-513047cc6c76":{"type":1,"question":"当前公司宽带安装主要使用的网线类型为（）。","answers":"超五类线"},"05cc017d-24e5-41ae-ba55-f42498bf375d":{"type":1,"question":"中国移动（）年获得固网运营牌照。","answers":"2013年"},"0c95e840-dae0-4f88-b3b6-6ced030def05":{"type":1,"question":"以下哪个服务不属于家庭安防的基础功能服务（）。","answers":"云存储视频回看"},"8b11db40-eb92-4451-befe-0202179e01e0":{"type":1,"question":"宽带办理流程中涉及市场线条工作的是（）。","answers":"业务受理"},"7c044478-7eaa-4d08-a30b-c75129ab0096":{"type":1,"question":"目前家庭宽带客户速率主要集中在（）。","answers":"100M及以下"},"8df33766-93c6-4c2c-8cb1-1f0496a0f952":{"type":1,"question":"预计到2022年，全球数字家庭市场将达（）规模。","answers":"千亿"},"ab6c7cc1-d1c1-4acb-91cc-9cb5e5fa9f5f":{"type":1,"question":"保底型家庭融合宽带最主要的特征是（）。","answers":"成员资费独立"},"b6e53279-a971-489c-a5d3-316d8c4a0fed":{"type":1,"question":"针对价格敏感型用户，大屏业务产品订购时可以采用（）二次确认方式，以降低投诉风险。","answers":"短信"},"a00c41ba-27c9-47f3-ba4a-afcf642d7b77":{"type":1,"question":"魔百和的增值产品，一般来说不包括哪种模式（）。","answers":"包天"},"10f96d1d-c473-45d2-82e1-d11f6e2f6867":{"type":1,"question":"在全球宽带资费排名中，我国宽带平均资费水平处于（）水平。","answers":"较低"},"c7524b11-dd21-42fa-b4d5-c47d497b59ec":{"type":1,"question":"智能组网服务施工结束后，需（），客户验收完成后，业务完成。","answers":"客户体验前后优化效果"},"b0a7853a-1990-4b53-9bf5-9c85c16bc0fe":{"type":1,"question":"智能组网服务施工结束后，需客户体验前后优化效果，（），业务完成。","answers":"客户验收完成后"},"b9ba95c2-b925-416b-b613-815cf0e6387a":{"type":1,"question":"以下哪个场景不是家庭安防的范围（）。","answers":"看小区门口"},"dce59022-90a7-4694-9af3-9eb6896edc72":{"type":2,"question":"以下哪些材质的物体会对WIFI信号造成比较大的损耗？（）","answers":["承重墙","金属柜"]},"5a5885dd-fa30-4eaa-92a8-1af1b5011907":{"type":2,"question":"目前布局家庭生态的运营商有（）。","answers":["互联网厂商","家电厂商","电信运营商"]},"070c7673-940a-44b8-a5ca-3298dca8424d":{"type":2,"question":"精细化用户运营，可以实现下列哪些目标？（）","answers":["拉动长订购","付费转化","促活跃","提高ARPU"]},"e6309c3b-a0e6-4f1d-9ec9-c078cbd3f05e":{"type":2,"question":"电力猫的特点包含（）。","answers":["使用电力线传输数据","子母设备之间不需要拉网线"]},"9bba9db4-eed6-4efe-bece-8afeb8150e20":{"type":2,"question":"随着中国智慧家庭的发展，未来家庭市场的发展将呈现（）的特点。","answers":["场景化","智能联控","个性化","多屏互动"]},"610fa5c6-257e-4830-9957-ddf9a63f2721":{"type":3,"question":"以下说法是否正确：当有陌生人闯入房间，智能摄像头将自动启动视频录像，并发布警报将消息传送至手机。","answers":"正确"},"c0e10098-45be-4719-9ba5-bbdc4cec5b7a":{"type":3,"question":"以下说法是否正确：客户办理手机业务需要进行实名登记，办理宽带业务时可以不进行实名登记。","answers":"错误"},"27b64d68-837c-46c0-afc9-58458bd31afc":{"type":3,"question":"以下说法是否正确：《中国移动2019-2021年战略规划纲要》提出加强全量融合产品创新，拓展智慧家庭价值是重点战略措施。","answers":"正确"},"abc99b7d-4315-445e-80d4-4deb51966eb5":{"type":3,"question":"以下说法是否正确：智能组网是我公司面向全国各运营商的家庭宽带用户提供的“家庭网络提升”服务。","answers":"错误"},"ade7183c-e93f-45c5-997d-5f25519a0681":{"type":3,"question":"以下说法是否正确：OTT的管理架构为二级播控模式。","answers":"错误"}}


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
