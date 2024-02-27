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
{"6345e27e-8103-42c2-af31-7a22b29d1ea9":{"type":1,"question":"电信企业在设计营销物料宣传时，不得出现名不副实的“0、免费、（）、永久”等容易引发用户误解的表述。","answers":"不限量"},"5c0afaa8-48d3-46ed-8771-4a6a5535a46d":{"type":1,"question":"电信企业在设计营销物料宣传时，下列哪个（）表述可以出现。","answers":"连接"},"2726cc34-9806-4b93-92a7-04fbd4b01a64":{"type":1,"question":"电信企业在给客户办理所有各类业务时，要做好三种确认方式，征得用户同意后才可办理，请问不属于三种确认方式的是（）。","answers":"电话外呼"},"db3c4e82-d39a-493c-8508-d5416636173a":{"type":1,"question":"电信企业在为客户业务办理成功后，应为用户发送告知短信，短信内容须包括企业和业务名称、资费标准、()、生效及失效时间、退订方式等必要信息。","answers":"办理时间及渠道"},"75e01bf0-fa56-4874-8eb5-0352ba5b1b2e":{"type":1,"question":"电话营销涉及业务办理的，应通过业务平台向用户发送请求确认的短信，说明业务的（    ），用户短信回复确认后方可办理。","answers":"必要信息"},"9ed56f0b-e4e2-49c9-bd80-8142d540ed8d":{"type":1,"question":"电信企业在设计营销物料宣传时，不得通过折叠、隐蔽、（）等形式隐瞒或淡化限制性条件。","answers":"模糊"},"6e58c44c-cd55-403f-a140-43355b83fab7":{"type":1,"question":"电信企业在给客户办理所有各类业务时，必须要征得用户明确同意，并按规定留存相关凭证，不得将未回复视为默认同意，严禁（）、欺骗、诱导、擅自办理业务。","answers":"强制"},"c85862fb-fd60-4b23-bdfa-9b15d0a662d0":{"type":1,"question":"电信企业与用户约定采取自动续订、自动续费方式提供服务的，应至少在自动续订、自动续费日期前（）日，以短信等方式提醒用户。","answers":"5"},"ef5ffbf1-3e0a-4f1b-92fb-03d073073a88":{"type":1,"question":"免费体验或优惠活动到期的，须再次征得用户同意后方可继续提供服务，不得未经用户同意自动续订、（）。","answers":"续费"},"75945224-44b9-4713-b9e0-9955f4330e3f":{"type":1,"question":"电信企业营销宣传应清晰、易懂、醒目地在同一页面明示业务的资费标准、服务内容、适用范围、使用规则、优惠政策、在网期限、退订方式、（）等重点事项。","answers":"违约责任"},"3d51a405-5638-4f60-b975-4f6e3829cca3":{"type":2,"question":"电信企业在开展各类营销活动中，要切实履行宣传或承诺的赠送体验、优惠打折、减免返费等事项，不得进行以下哪些行为（）。","answers":["擅自增设办理使用条件","擅自改变或无理由提前终止处于有效期内的承诺事项","降低承诺事项的服务质量"]},"e42a7a45-6ce9-44d8-80a0-5f47ade544ae":{"type":2,"question":"电信企业在给客户办理所有各类业务时，要做好三种确认方式，征得用户同意后才可办理。请问三种确认方式是指（）及用户签字。","answers":["短信回复","含办理说明的手机验证码"]},"1365e897-f747-4fee-95ad-5c9a37bbcd3f":{"type":2,"question":"电信企业营销宣传应清晰、易懂、醒目地在同一页面明示业务的（）、（）、适用范围、使用规则、（）、在网期限、退订方式、（）等重点事项。","answers":["服务内容","资费标准","违约责任","优惠政策"]},"e452f47e-6c94-40fc-a923-a6a425e4ceba":{"type":2,"question":"根据128文件要求，可办理携出服务的电信企业营业厅不得以（）等为由阻碍、拖延提供携号转网服务。","answers":["需要审批","预约办理","系统故障","权限不足"]},"bf33eb6e-af16-402b-99a5-238682a77f12":{"type":2,"question":"以下哪些业务属于异地办理业务（）。","answers":["主副卡绑定异地办理","套餐变更","手机号码过户","合约解除"]},"b07c4f82-5794-4bd9-b8d9-58ded625d56a":{"type":3,"question":"要健全电信企业内部营销方案及业务上线前的服务审核机制，对存在不符合相关规定及服务规范、易引发用户服务争议等情形，实行联合会审机制。","answers":"错误"},"c5ca4ecf-9c8b-424b-8eab-27ae09acfae3":{"type":3,"question":"电信企业营销宣传应清晰、易懂、醒目地在同一页面明示业务的资费标准、服务内容、适用范围等重点事项，未予明示的，可以作为限制性条件。","answers":"错误"},"73ad148d-28c8-4001-93a4-10acbc358ab5":{"type":3,"question":"电信企业营销宣传的页面应明示业务的资费标准、服务内容、适用范围、使用规则、优惠政策等重点事项，如确实文字太多，可通过扫二维码或页面链接跳转方式展示详细内容。","answers":"错误"},"039d3133-87a1-4e81-b93a-e6161e7a9ec0":{"type":3,"question":"办理携转业务，除国际和港澳台漫游费用未出账等特殊情况外，确保在携出次月出账期结束后及时提供余额退还服务，不得强制用户将余额转至网内其他账户。","answers":"正确"},"5415d024-40ba-4667-a02b-4cdad62d0b83":{"type":3,"question":"根据128文件要求，电信企业需在网站、手机APP以明显方式全量公示可办理携出服务的实体渠道地址、营业时间等信息并支持客服热线查询。","answers":"正确"}}
`
function escapeSpecialQuotes(jsonString) {
  // 正则表达式用于匹配不需要转义的双引号前后的特定字符（{, :, [, }, ,]）
  // 并保留这些字符不变，同时转义其他情况下的双引号
  return jsonString.replace(/(?<![{,:[\]])"(?![,:}\]])/g, '\\"');
}


// 调用函数处理字符串
var questionsDic = escapeSpecialQuotes(questionsDic1);

console.log(JSON.parse(questionsDic));


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
