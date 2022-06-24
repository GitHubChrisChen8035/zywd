var questionsDic1 = {
    "7ea4ac7e-9b2d-43bc-a6cb-3f31ec3e202b": {
        "type": 1,
        "question": "5G的RRC层状态不包括以下哪个？",
        "answers": "RRC_ACTIVE"
    },
    "2f1555dd-2995-4fd2-9b8b-f51926667804": {
        "type": 1,
        "question": "FDD，3GHz以下的SSB最大波束数量是多少个？",
        "answers": "4"
    },
    "8ca79761-a92a-46f5-9bdf-2da1f135764e": {
        "type": 1,
        "question": "关于定义eCPRI接口的意义，说法正确的是哪项？",
        "answers": "降低前传数据带宽速率"
    },
    "c8aa05ff-4edd-4f72-b8fd-2f5cdf6c5d3b": {
        "type": 2,
        "question": "PBCH信道承载的MIB消息内容包含以下哪些项？",
        "answers": ["波束ID", "10bit的SFN", "4bit的Kssb", "SIB1 CORESET配置信息"]
    },
    "67055a2f-b7bb-4f7d-a823-3f13824ce95d": {
        "type": 2,
        "question": "PDCCH承载的DCI包括如下哪些信息？",
        "answers": ["PDSCH的资源指示", "PMI", "PUSCH的功控命令", "CQI"]
    },
    "09efff2b-ced1-48f9-8ab4-da82a3396c25": {
        "type": 2,
        "question": "5G根序列长度是多少？",
        "answers": ["839", "139"]
    },
    "a7dfd01d-c439-4578-8966-df953610a81c": {
        "type": 3,
        "question": "5G NR PRACH的相关物理资源配置会在SIB2消息中获知。",
        "answers": "错误"
    },
    "b5ad314f-e430-406d-a1f3-b111422d201b": {
        "type": 3,
        "question": "gNodeB可以同时支持NG接口和S1接口。",
        "answers": "正确"
    },
    "11cc2fd3-64a1-4045-83d2-bf48559b5859": {
        "type": 3,
        "question": "对于BBU和AAU的距离超过150米的场景，建议使用多模光模块。",
        "answers": "错误"
    }
};

//setTimeout循环内的方法不会使循环暂停！
for (var i=0;i<9;i++){
	task(i)
}
	
function task(i) {
   setTimeout( function () {
       console.log(i);
		try{
			var questionId = document.getElementsByClassName("question")[0].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
			var answerList = questionsDic1[questionId]['answers'];
			console.log(questionId,answerList)
			if (questionsDic1[questionId]['type'] == 1) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label', document).iterateNext().click();


					}else if (questionsDic1[questionId]['type'] == 3) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();

					}else if (questionsDic1[questionId]['type'] == 2) {

						for (answer of answerList){
									document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label', document).iterateNext().click();
							 
							}

					}else {
						console.log("题型错误！");
					}
			
			
		}catch(error){
			console.log("本题无答案")
		}
		try{

			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();

		}catch(error){
			console.log("已完成自动答题，如有未完成题目，请手工完成");
		}
   }, 2000 * i);
}
