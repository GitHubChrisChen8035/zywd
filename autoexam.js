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
var questionsDic1 = {"d35baf73-93fe-43e0-84c7-37b07643a357":{"type":110,"question":"以下选项中，以下不属于订购过程中资费提醒的是（）。","answers":"账单提醒"},"8b11db40-eb92-4451-befe-0202179e01e0":{"type":1,"question":"宽带办理流程中涉及市场线条工作的是（）。","answers":"业务受理"},"372a0bc8-0b87-4a6f-a4da-1eae5b8542a0":{"type":1,"question":"IPTV模式的魔百和业务，描述正确的是（）。","answers":"两级播控"},"c896f7f3-7bb1-4fba-9114-f18cb985d598":{"type":1,"question":"客户有高带宽高质量需求，无线路由器应主推（）类型产品。","answers":"千兆双频"},"fa033b9e-48ea-4490-aba4-8b8630213c51":{"type":1,"question":"2019年中国移动安防产品重点推出（）品牌。","answers":"移动看家"},"b458f3af-19eb-47d6-8820-dd8ee255408f":{"type":1,"question":"智能组网是面向（）家庭宽带用户提供的“家庭网络提升”服务。","answers":"中国移动"},"b0a7853a-1990-4b53-9bf5-9c85c16bc0fe":{"type":1,"question":"智能组网服务施工结束后，需客户体验前后优化效果，（），业务完成。","answers":"客户验收完成后"},"e15ef4a8-aee3-4816-8fcb-29ff4d10a761":{"type":1,"question":"目前大屏业务主流推广的定价模式是（）。","answers":"包月"},"c7524b11-dd21-42fa-b4d5-c47d497b59ec":{"type":1,"question":"智能组网服务施工结束后，需（），客户验收完成后，业务完成。","answers":"客户体验前后优化效果"},"b9b3fffc-3d8d-43b0-b784-616e5b952da0":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务故障维护时间要求最高不超过（）。","answers":"24小时"},"8bea0c1d-6697-4283-8eaf-ad002e0896a2":{"type":1,"question":"移动看家安防云存储套餐目前最长支持（）天。","answers":"30"},"51e67642-3912-49c8-b208-a2526ee9a24c":{"type":1,"question":"智能组网服务主要解决（）信号覆盖不全、信号弱等问题。","answers":"中国移动家庭WiFi网络"},"f8665af5-7bad-44e1-85e7-3b93e2f54f16":{"type":1,"question":"以下哪个场景推荐使用猫眼设备？（）","answers":"门口"},"7768c879-4657-4d31-be9c-a883afdfc4a1":{"type":1,"question":"以下哪个产品不属于“智享+”业务?（）","answers":"魔百和"},"3da8b412-2193-480e-b24c-f837a18673c1":{"type":1,"question":"（）的解决方案主要有无线路由器方案、POE方案、电力猫方案等。","answers":"智能组网服务"},"cbf54cb0-b923-45bd-9d91-d17ec8b927df":{"type":1,"question":"OTT模式的魔百和业务，牌照方一共有（）家。","answers":"7"},"5634dc3c-e465-4b38-8b62-4266b80f01c5":{"type":1,"question":"专业安防包7天全天套餐资费是（）元/月。","answers":"13"},"5cdaa28b-50b7-4b71-adea-541dd977128e":{"type":1,"question":"（）典型业务场景有家庭WIFI信号不好、家庭智能终端较多等场景。","answers":"智能组网服务"},"0c95e840-dae0-4f88-b3b6-6ced030def05":{"type":1,"question":"以下哪个服务不属于家庭安防的基础功能服务（）。","answers":"云存储视频回看"},"05cc017d-24e5-41ae-ba55-f42498bf375d":{"type":1,"question":"中国移动（）年获得固网运营牌照。","answers":"2013年"},"745dbcaf-5a68-4c64-aeb0-52d3ac0a88b4":{"type":2,"question":"智能组网服务的需求沟通主要需要了解（）。","answers":["客户使用需求","网络出现的问题描述"]},"ad30337f-62fe-44ff-815f-3b4564e9f3ff":{"type":2,"question":"智能组网服务的解决方案主要有（）。","answers":["无线路由器方案","电力猫方案","POE方案"]},"50f4d2a9-84bb-4c63-914c-2fb9813c61f4":{"type":2,"question":"宽带业务的办理流程包括（）。","answers":["数据制作","工单施工","工单回访及归档","资源分配","业务受理","工单调度"]},"12c8b94c-3dc6-4ebc-add9-5f618c7387b6":{"type":2,"question":"移动看家家庭安防业务的应用场景有（）。","answers":["看沿街店铺","看门口","看家护院","看小孩"]},"7141c1a7-e0de-4aff-ac6c-b2d43443bef5":{"type":2,"question":"宽带产品模式包括哪两种模式？（）","answers":["单家庭宽带产品","融合家庭宽带产品"]},"1f69a20c-4903-4d7e-b3e4-d6a76ee2973b":{"type":3,"question":"以下说法是否正确：家庭宽带一般给客户分配固定公网IP地址。","answers":"错误"},"abc99b7d-4315-445e-80d4-4deb51966eb5":{"type":3,"question":"以下说法是否正确：智能组网是我公司面向全国各运营商的家庭宽带用户提供的“家庭网络提升”服务。","answers":"错误"},"9e36426a-2dde-49a5-a6cc-ff28ca901d07":{"type":3,"question":"以下说法是否正确：安防云存类型分为事件型和全天型2大类。","answers":"正确"},"610fa5c6-257e-4830-9957-ddf9a63f2721":{"type":3,"question":"以下说法是否正确：当有陌生人闯入房间，智能摄像头将自动启动视频录像，并发布警报将消息传送至手机。","answers":"正确"},"81e7c180-6fe7-4c2f-ab0f-c3c25f828df3":{"type":3,"question":"以下说法是否正确：智能组网服务方案设计时，应根据客户的上网需求、家庭网络环境和装前评测结果，针对性的设计组网优化方案。","answers":"正确"}}


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
