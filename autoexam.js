//auto_exam2.js
try {
    //移除开发者工具监测弹窗
    var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];
    if (typeof(alt) != "undefined") {
        alt.remove()
    };
    //移除切屏次数弹窗
    var alt1 = document.getElementsByClassName("dialog animated")[0];
    if (typeof(alt1) != "undefined") {
        alt1.remove()
    };
    //影响交卷功能！
    var alt2 = document.getElementsByClassName("modal auto")[0];
    if (typeof(alt2) != "undefined") {
        alt2.remove()
    };
    //移除cover层，解除操作限制
    var alt3 = document.getElementsByClassName("dialog-overlay")[0];
    if (typeof(alt3) != "undefined") {
        alt3.remove()
    };
    var alt4 = document.getElementsByClassName("alertify-cover")[0];
    if (typeof(alt4) != "undefined") {
        alt4.remove()
    };
    //移除切屏监听事件
    removeEventListener("blur", getEventListeners(window).blur[0].listener);
    //window.blur = "";
    //移除刷新页面后弹窗confirm
    window.onbeforeunload = "";
    setInterval(function () {
        $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncopy", "").attr("onpaste", "");
    }, 2000)
} catch (error) {}

//更新答案集
questionsDic1 = {"c4cf79c1-e266-4e4c-b9ce-3e54fb5c1a0c":{"type":1,"question":"现阶段不能携出的号码有卫星移动业务号码、移动通信转售号码和（）。","answers":"物联网号码"},"98161f90-35ee-4a03-bfce-77dc1aedd924":{"type":1,"question":"手机客户满意度=整体满意度×（）+资费套餐×30%+网络质量×30%+业务宣传×10%+提醒服务×10%。","answers":"20%"},"b117918f-7edb-444f-b646-b621907e3d94":{"type":1,"question":"流量快餐是（）流量产品，流量使用有效期为（）。","answers":"灵活帐期型，小时级"},"b195bba3-5a79-497e-9a6e-4806b96525bd":{"type":1,"question":"动感地带品牌的代言人策略取得了良好的传播效果，以下没有代言过动感地带品牌的是？（）","answers":"葛优"},"6a620610-d471-4de3-99f5-f0b048308897":{"type":1,"question":"以下哪个选项是动感地带目标客户群体最准确的描述？（）","answers":"年轻群体"},"15fe369c-fd0e-4f2c-b618-2d0bd821a5b1":{"type":1,"question":"5G时代三大客户品牌升级后能覆盖（）个人客户。","answers":"100%"},"6d5eaf31-df64-43e2-8696-0ae1e515efeb":{"type":1,"question":"随心选会员集团的定价是（）/月。","answers":"15元"},"b5f7d1ae-e6bb-4ffa-b079-cd7287eea5ad":{"type":1,"question":"基础产品融合套餐中，高档次套餐要靠（）形成价值区隔突出。","answers":"权益"},"c452bf53-8320-447a-b98e-0868328f5a2a":{"type":1,"question":"应高质量发展要求，禁止考核的指标为（）。","answers":"客户份额"},"51d9a87f-317f-43ff-a855-f417e4fa2044":{"type":1,"question":"以下哪个不属于全球通全网统一服务？（）","answers":"积分倍享"},"0b936b9f-347d-40f1-a2e0-7f5d7257c4e3":{"type":1,"question":"渠道在携号转网时，我们能给渠道支付（）性质的激励。","answers":"手续费"},"8be4319f-da63-4c28-93de-7a7beacde7b5":{"type":1,"question":"通信客户指统计周期内产生过语音话单、短信上行话单、彩信上行话单、GPRS话单（彩信核减后且流量大于0）且期末在网的（）客户。","answers":"个人"},"020c114d-ec09-4b0a-b759-7797edc71824":{"type":1,"question":"以下哪个不是全球通重塑后的品牌内涵？（）","answers":"责任"},"3dd7139d-d231-4af6-8261-c7c923499a29":{"type":1,"question":"随心系列会员是（）类型的权益，以品类丰富、自主选择、每月可换为核心卖点。","answers":"权益自选产品"},"5b1daf95-4ba1-4994-95a5-a25b83a7df0b":{"type":1,"question":"存量营销的触点主要有（）、热线、电渠、自有队伍、实体渠道、互联网。","answers":"短信"},"9727ee76-fad4-4afc-901e-050337a2cb71":{"type":1,"question":"优酷和家享团购是（）类型的权益。","answers":"权益融合产品"},"846e6cb1-875c-46cd-92f1-8e170753cfad":{"type":1,"question":"下列哪个档次不是智享套餐个人版的档次？（）","answers":"268"},"9cd9337c-aeee-4c27-a741-41f8c88f18a9":{"type":1,"question":"资费套餐满意由（）、套餐办理便捷性、套餐办理规范性、套餐内容适配度、账单服务等关键商业过程满意度加权计算得出。","answers":"资费套餐的清晰度"},"45b6b335-1778-44fd-9a9b-e8647f1ffd95":{"type":1,"question":"细分市场在概念上应该容易区分，并对不同的市场营销组合要素和计划有不同的反应，是指细分市场的（）。","answers":"可差别性"},"965cdd58-a318-4270-8a47-1f6c521632fd":{"type":1,"question":"山东公司参照总部“权益超市” ，打造“权益汇”平台，客户每月只需支付（）元“会员门票”，客户即可在购买“娱乐、教育、出行、美食、医疗”等商品时享享受超值优惠。","answers":"3"},"daf06e29-fa21-474a-beec-a11d7dbe2b8e":{"type":3,"question":"以下说法是否正确：“动感地带”品牌在2001年就诞生了。","answers":"正确"},"11057fd7-f161-4f80-9590-5ea2fb9d60b0":{"type":3,"question":"以下说法是否正确：目前，中国移动5G终端技术路线仅部署SA（独立组网）。","answers":"错误"},"51e32525-f26a-4ec6-9d09-4e95dd0bb7a1":{"type":3,"question":"以下说法是否正确：随心看会员每月可以更换会员权益。","answers":"正确"},"d85ac5aa-0580-4231-af6b-b2c64ad8dc7c":{"type":3,"question":"以下说法是否正确：4G用户更换5G手机后，不换套餐不可以使用5G网络。","answers":"错误"},"2160a9af-8b20-49fc-be3b-6c146acd5787":{"type":3,"question":"以下说法是否正确：拍照重点客户指前一年10-12月月平均ARPU值位于本省通信在网手机客户（即前一年12月为通信在网手机客户）前25%的客户。","answers":"正确"},"ed5105c5-4b5c-46e1-956d-aa348ba0c98d":{"type":2,"question":"权益产品体系包含（）。","answers":["联合权益产品","权益自选产品","权益融合产品","权益超市产品"]},"b4bf6239-fc7b-4b5d-a05d-21bd94951729":{"type":2,"question":"5G套餐较4G套餐有哪些优势？（）","answers":["更大流量","更多权益","更高速率"]},"e9d16578-2ac7-40ef-b786-e0f2061272c7":{"type":2,"question":"当前计费资源分为哪几类？（）","answers":["短彩类","语音类","手机流量","WLAN"]},"a9eb647f-500d-4723-93ef-72409dab66f1":{"type":2,"question":"权益运营是通过合作引入异业服务，或基于自有业务提供特色服务，经过（）等运营手段，为客户提供多样化多层次的消费服务，建立差异化优势。","answers":["渠道推广","营销策划","产品销售","品牌运营"]},"fb52dc2a-9ae4-41a4-b568-13b0778bf6c8":{"type":2,"question":"下列关于各流量单位之间的换算，正确的是？（）","answers":["1MB=1024KB","1KB=1024B"]}}

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
    document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].addEventListener("click", reload);

} else {
    console.log("题库尚未更新！")
    alert("题库尚未更新！")
}
