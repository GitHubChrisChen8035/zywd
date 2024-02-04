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
var questionsDic1 = {"05cc017d-24e5-41ae-ba55-f42498bf375d":{"type":1,"question":"中国移动（）年获得固网运营牌照。","answers":"2013年"},"1e380d90-c98a-426e-8f6f-a696734bafb6":{"type":1,"question":"大屏业务是以（）终端为载体的融媒体业务。","answers":"电视"},"7768c879-4657-4d31-be9c-a883afdfc4a1":{"type":1,"question":"以下哪个产品不属于“智享+”业务?（）","answers":"魔百和"},"6021142a-e063-46c6-a358-1372ef2181dc":{"type":1,"question":"FTTH方式接入需要使用光猫设备，目前公司宽带安装主要使用的光猫类型为（）。","answers":"IHGU"},"b6e53279-a971-489c-a5d3-316d8c4a0fed":{"type":1,"question":"针对价格敏感型用户，大屏业务产品订购时可以采用（）二次确认方式，以降低投诉风险。","answers":"短信"},"c7524b11-dd21-42fa-b4d5-c47d497b59ec":{"type":1,"question":"智能组网服务施工结束后，需（），客户验收完成后，业务完成。","answers":"客户体验前后优化效果"},"25aa5b7e-ca1a-4754-8abc-e0afaf0619c3":{"type":1,"question":"以下选项中，（）不是大屏业务的查询退订渠道。","answers":"邮件"},"82353960-5af0-4767-9f00-2ee441fb182a":{"type":1,"question":"非客户侧及客观原因情况下，宽带业务装机时间要求最高不超过（）。","answers":"48小时"},"b9ba95c2-b925-416b-b613-815cf0e6387a":{"type":1,"question":"以下哪个场景不是家庭安防的范围（）。","answers":"看小区门口"},"3da8b412-2193-480e-b24c-f837a18673c1":{"type":1,"question":"（）的解决方案主要有无线路由器方案、POE方案、电力猫方案等。","answers":"智能组网服务"},"8df33766-93c6-4c2c-8cb1-1f0496a0f952":{"type":1,"question":"预计到2022年，全球数字家庭市场将达（）规模。","answers":"千亿"},"f8665af5-7bad-44e1-85e7-3b93e2f54f16":{"type":1,"question":"以下哪个场景推荐使用猫眼设备？（）","answers":"门口"},"8a59f5ed-d6cc-460e-a17f-df4451dea794":{"type":1,"question":"OTT业务目前有（）牌照方。","answers":"七个"},"e15ef4a8-aee3-4816-8fcb-29ff4d10a761":{"type":1,"question":"目前大屏业务主流推广的定价模式是（）。","answers":"包月"},"10f96d1d-c473-45d2-82e1-d11f6e2f6867":{"type":1,"question":"在全球宽带资费排名中，我国宽带平均资费水平处于（）水平。","answers":"较低"},"cbf54cb0-b923-45bd-9d91-d17ec8b927df":{"type":1,"question":"OTT模式的魔百和业务，牌照方一共有（）家。","answers":"7"},"a69820e7-1f72-4e76-848e-775a73d74b79":{"type":1,"question":"“新榜单命中率高”体现了大屏业务内容（）的特点。","answers":"新"},"b458f3af-19eb-47d6-8820-dd8ee255408f":{"type":1,"question":"智能组网是面向（）家庭宽带用户提供的“家庭网络提升”服务。","answers":"中国移动"},"2518cff1-11a5-45ba-8d72-105f8397bd5b":{"type":1,"question":"“限时免费”活动，可以实现用户运营中的（）转化。","answers":"非活跃→活跃"},"ea8d3c8c-1dc2-40af-8c3a-b9cbc06ef29e":{"type":1,"question":"按服务规范要求，需配置客户经理专属服务的客户为（）。","answers":"1000M宽带客户"},"86c105cc-4344-4379-a0f3-a5d82de729c1":{"type":2,"question":"近期公司家庭业务发展聚焦“1+1+1+4+N”产品，其中属于4个硬件产品的是？（）","answers":["智能音箱","智能组网","语音遥控器","家庭安防"]},"6fb3ce90-385e-488b-a38d-d6f62faffb35":{"type":2,"question":"移动看家家庭安防业务涵盖哪些产品类型？（）","answers":["智能门锁","门铃","猫眼","摄像头"]},"12c8b94c-3dc6-4ebc-add9-5f618c7387b6":{"type":2,"question":"移动看家家庭安防业务的应用场景有（）。","answers":["看沿街店铺","看门口","看家护院","看小孩"]},"7141c1a7-e0de-4aff-ac6c-b2d43443bef5":{"type":2,"question":"宽带产品模式包括哪两种模式？（）","answers":["单家庭宽带产品","融合家庭宽带产品"]},"5a5885dd-fa30-4eaa-92a8-1af1b5011907":{"type":2,"question":"目前布局家庭生态的运营商有（）。","answers":["互联网厂商","家电厂商","电信运营商"]},"1cb889f7-157e-4b03-a3f6-9b9f83300bdf":{"type":3,"question":"以下说法是否正确：家庭市场是面向家庭里面的个人，满足家庭成员个人需求的一系列产品和服务解决方案。","answers":"错误"},"b3f0a5e0-e3fc-4f91-9364-1a037e3a9983":{"type":3,"question":"以下说法是否正确：智能组网服务的装前评测主要是按照与客户约定的时间准时到达现场，勘察家庭网络环境，进行WiFi信号质量测试。","answers":"正确"},"abc99b7d-4315-445e-80d4-4deb51966eb5":{"type":3,"question":"以下说法是否正确：智能组网是我公司面向全国各运营商的家庭宽带用户提供的“家庭网络提升”服务。","answers":"错误"},"ade7183c-e93f-45c5-997d-5f25519a0681":{"type":3,"question":"以下说法是否正确：OTT的管理架构为二级播控模式。","answers":"错误"},"81e7c180-6fe7-4c2f-ab0f-c3c25f828df3":{"type":3,"question":"以下说法是否正确：智能组网服务方案设计时，应根据客户的上网需求、家庭网络环境和装前评测结果，针对性的设计组网优化方案。","answers":"正确"}}


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
