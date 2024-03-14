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
{"cc037ddd-5c90-4400-a059-3cffb531efe7":{"type":1,"question":"向量数据库的查询通常基于什么来衡量向量之间的相似度？","answers":"余弦相似度"},"234ccf8c-6ea3-4a4c-a421-3b106030ce53":{"type":1,"question":"多模态大模型中，多模态主要指的是（）。","answers":"模型能够处理多种类型的数据"},"af27b91b-5124-42f1-942e-3d58ce6a6d68":{"type":1,"question":"以下哪项模型优化技术可以解决重复计算的问题？（）","answers":"KV Cache"},"923997e2-85ad-4705-8dce-b4125c7111b4":{"type":1,"question":"大模型对于翻译类问题的回答，一般用（ ）评价指标评测翻译的准确性？","answers":"Bleu"},"c62461af-88c2-45b5-917f-f455e72af6f6":{"type":1,"question":"大模型的训练过程中通常需要选择合适的学习率，常用的学习率调整方法包括下列哪一种？","answers":"学习率线性预热"},"771dfd6d-d138-4628-8b6a-6811cc7735cc":{"type":1,"question":"九天网络大模型对现有模型替代率最高的是（）。","answers":"语音"},"4de9ee63-dfd5-4b60-9f62-c3f99a5f7d0f":{"type":1,"question":"卷积神经网络中的池化层（pooling）的主要作用是（）。","answers":"实现信息的降维"},"a5d0b9ec-4b5e-4944-b1a4-829ca3540695":{"type":1,"question":"下面不能作为大模型的量化对象的是（）？","answers":"数据"},"940fee29-8738-493e-9dd9-ff9820c299be":{"type":1,"question":"大模型的数据训练可以来源于（）。","answers":"以上都是"},"0e8126d2-fac1-46ae-9339-ee60d3daaaab":{"type":1,"question":"昇腾910B对标的GPU型号为（）。","answers":"A100"},"79e0ec20-4d41-4a5b-81d9-c9a054d43fc7":{"type":1,"question":"内容安全风险体系是（）级标签。","answers":"3"},"f1ddc4ec-8501-4fe8-a82d-bd374d321c47":{"type":1,"question":"由OpenAI所研发的 ChatGPT大模型的“出圈”，预示着“通用智能”时代的到来，下列功能能够由ChatGPT实现的有（  ）。","answers":"以上都是"},"e60d0aa0-c30f-4428-bacd-345147f7c1ba":{"type":1,"question":"下列属于中国移动公开发布的行业大模型的是（  ）。","answers":"以上都是"},"ecb8b533-d8b1-413f-8567-8b2a9d647ab9":{"type":1,"question":"哪种并行策略的计算效率最低（）。","answers":"张量并行"},"bc9fae3e-3f62-44e6-a15f-7b1b5b498643":{"type":1,"question":"在RAG过程中，怎样利用已有的数据库。","answers":"从数据库中检索到与用户问题相关的部分与用户问题一起放到prompt中"},"a7545de9-4ec0-4bb2-a7b1-466abd57fa9c":{"type":1,"question":"关于泛化性的理解，下列说法正确的是（）。","answers":"模型的泛化性指模型能够胜任某一类场景中的任务"},"d9e185af-ac7a-4897-bf3a-b75a25e40aeb":{"type":1,"question":"语言大模型评测面临的挑战很多，如下说法正确的是（ ）。","answers":"通用语言大模型具备训练数据多元化、能力多样性的特点，因此评测很难保障全面性。"},"6ba6e764-3bb2-49a6-b620-3352d5a40484":{"type":1,"question":"下列几种属于模型压缩的方法的是（）。","answers":"以上都是"},"11b9a7d1-4bfc-4a80-81e6-cd2de0062541":{"type":1,"question":"下列对模型推理优化并行技术中描述不正确的是（）。","answers":"张量并行是指将模型的不同层放在不同的卡上"},"df29a03e-13d5-487e-89f1-3cd6bed94dc6":{"type":1,"question":"面对一个智能语言交互任务，我们通常可以采用下列哪种神经网络？（  ）","answers":"递归神经网络"},"4eb5715f-9184-4e65-adc6-da540fefeda7":{"type":3,"question":"机器学习的输入与输出均由张量表示。","answers":"正确"},"74522521-6e99-4074-bc4d-8462c99e7115":{"type":3,"question":"深度学习的主要结构为神经网络，神经网络由多个神经元构成。","answers":"正确"},"e16e9474-409c-4e74-9ac5-2136cb2bea12":{"type":3,"question":"大模型在一些评测中得分越高，表示大模型能力就越强。  ","answers":"错误"},"4df2c228-46cb-4738-a98e-b0d2a23af69b":{"type":3,"question":"华为昇腾910B支持BF16。","answers":"正确"},"13e45315-2fe7-489c-a54a-6a6cbf512dc9":{"type":3,"question":"BF16精度的指数位比FP16精度的指数位更高。 ","answers":"正确"},"621b4e37-4675-4f57-8c7f-a41f20d00f78":{"type":2,"question":"下列属于大模型五大类评测指标的有（）。","answers":["鲁棒性","安全性","公平性"]},"6d4a02fb-c442-4e32-9340-019c36981f60":{"type":2,"question":"关于大模型训练数据，下列说法正确的是（）。","answers":["行业大模型的训练数据需要来自该行业的特定场景","行业大模型的训练数据应注意时效性","大模型训练数据需要保障数据的合法来源"]},"a575259e-6b85-4df2-8d78-13596d2d49ec":{"type":2,"question":"下列能够满足模仿生成新数据的人工智能结构有（）。","answers":["GAN结构","INFOGAN结构"]},"ad5bfc7b-9446-4d8d-845d-bb666655da7d":{"type":2,"question":"下列属于九天大模型体系特色的是（）。","answers":["供给侧增强","持续训练","异构硬件灵活部署"]},"60c05d9b-5f09-40a8-85be-0419286df3a4":{"type":2,"question":"机器学习根据学习方法与学习信息类别可以分为（）。","answers":["监督学习","强化学习","无监督学习"]}}
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
