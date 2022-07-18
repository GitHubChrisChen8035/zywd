//auto_exam2.js
try{
	//移除开发者工具监测弹窗
	var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];
	if (typeof(alt) != "undefined"){alt.remove()};
	//移除切屏次数弹窗
	var alt1 = document.getElementsByClassName("dialog animated")[0];
	if (typeof(alt1) != "undefined"){alt1.remove()};
	//影响交卷功能！
	var alt2 = document.getElementsByClassName("modal auto")[0];
	if (typeof(alt2) != "undefined"){alt2.remove()};
	//移除cover层，解除操作限制
	var alt3 = document.getElementsByClassName("dialog-overlay")[0];
	if (typeof(alt3) != "undefined"){alt3.remove()};
	var alt4 = document.getElementsByClassName("alertify-cover")[0];
	if (typeof(alt4) != "undefined"){alt4.remove()};
	//移除切屏监听事件
	//removeEventListener("blur",getEventListeners(window).blur[0].listener);
	window.blur = "";
	//移除刷新页面后弹窗confirm
	window.onbeforeunload = "";
}catch(error){}

//更新答案集
questionsDic1 = {
    "850c858b-9ba7-40ce-9371-481eab527d26": {
        "type": 1,
        "question": "关于B域，下列说法正确的是？（    ）",
        "answers": "nB域主要系统有客户经营系统（CRM）、BOSS、产品配置中心、经分、电渠、订单中心等"
    },
    "0013cc46-a244-48dd-bc19-f701adf23c24": {
        "type": 1,
        "question": "关于S域，下列说法正确的是？（    ）",
        "answers": "nS域包括省内的集成公司、创新院等各类专项业务服务系统"
    },
    "a7c7996f-c990-4235-9e11-f9d9b89dc645": {
        "type": 1,
        "question": "关于O域，下列说法正确的是？（    ）",
        "answers": "nO域主要涉及有线、无线、核心网的资源、工单、日志"
    },
    "b16d74cb-e527-4b48-9c9d-78ddd4b9b2d0": {
        "type": 1,
        "question": "关于M域，下列说法正确的是？（    ）",
        "answers": "nM域主要涉及供应链、流程、资产管理等系统"
    },
    "e163009c-00fd-419b-b574-78a980171bbf": {
        "type": 1,
        "question": "关于主数据，下列说法正确的是（    ）",
        "answers": " 是关于业务实体的数据，描述组织内的“物”，如：人、地点、客户、产品等。"
    },
    "948ee5aa-a9f7-4040-87c2-04fd0ed14ff2": {
        "type": 1,
        "question": "元数据（Meta Data）的作用是（    ）",
        "answers": "描述数据"
    },
    "a0955d44-1465-45e7-bb9c-660fe4a4284f": {
        "type": 1,
        "question": "关于数据质量管理中的完整性，下列说法中正确的是？（    ）",
        "answers": "判定哪些关键缺失"
    },
    "ea6f5f7a-fd80-4a20-8532-b3bda7968c4d": {
        "type": 1,
        "question": "关于轻度汇总，下列说法正确的是？（    ）",
        "answers": "轻度汇总是以降低数据量为目的，选取特定的维度组合对数据进行汇总，解决数据粒度问题"
    },
    "db12d199-c2de-4baa-9f49-38f64d1dfff4": {
        "type": 1,
        "question": "关于基础数据层，下列说法正确的是？（    ）",
        "answers": " 基础数据层是原始数据的标准化、格式化，统一命名及数据格式，统一数据理解；有效屏蔽源系统割接造成的影响。"
    },
    "56873162-9fdf-4c60-9d2a-cac645fd7513": {
        "type": 1,
        "question": "4V+1C概念中的C代表的是（    ）",
        "answers": "复杂性"
    },
    "6db0c62f-ae75-47b6-b5de-63531fd0f875": {
        "type": 1,
        "question": "数智驱动的“5141”智能商业总体框架是郑杰总什么会议里提出的？（    ）",
        "answers": "2022年全省总经理座谈会"
    },
    "83b1b6ef-4e10-43a6-b501-d8efd8a42386": {
        "type": 1,
        "question": "关于影响分析，下列说法正确的是（    ）",
        "answers": "以某个元数据为起始节点，展示其后与其有关系的所有元数据，反应数据的流向和加工过程"
    },
    "340032c5-64dd-4587-b250-2236574a3514": {
        "type": 1,
        "question": "数据标准指保障数据的内外部使用和交换的一致性和准确性的规范性约束，数据标准通常可分为（    ）类数据标准和（    ）类数据标准。",
        "answers": "基础、指标"
    },
    "4eadbb51-d650-46b6-bfb4-81d94a487ee6": {
        "type": 1,
        "question": "HADOOP常被用来做数据仓库组件的是（    ）",
        "answers": "HIVE"
    },
    "f446f1d9-baac-41ef-8740-aea2c50a90ea": {
        "type": 1,
        "question": "大数据模型分层框架，从低到高为（    ）",
        "answers": "原始数据层、基础数据层、应用数据层、融合信息层"
    },
    "3271acea-c8ea-4620-95f6-65e0879ed253": {
        "type": 1,
        "question": "关于统计分析数据，下列说法正确的是（    ）",
        "answers": "是对企业业务活动进行技术的数值型数据，即：指标，如：客户数、销售额等 "
    },
    "01e5aa92-81ec-4a2f-9cc4-d635e400450d": {
        "type": 1,
        "question": "主数据（MASTER DATA）的作用是（    ）",
        "answers": "描述业务实体"
    },
    "b0609dc2-499f-40a1-8ccc-ca93b5cdd849": {
        "type": 1,
        "question": "两个大数据经典模型4V和5V比较，多出来的那个V是什么？（    ）",
        "answers": "真实性"
    },
    "68b6855b-9449-41a0-a1d1-8e8175556038": {
        "type": 1,
        "question": "关于数据质量管理中的一致性，下列说法中正确的是？（    ）",
        "answers": "判定哪些数据相互矛盾"
    },
    "7725ca86-d3ce-416d-adb2-29c20aca3cb7": {
        "type": 1,
        "question": "关于数据质量管理中的准确性，下列说法中正确的是？（    ）",
        "answers": "判定哪些数据是否可以清晰表达"
    },
    "dd81427a-2222-4fe6-8e77-5611ee4c9261": {
        "type": 3,
        "question": "数据模型是支撑数据向信息及知识转化的基础。（    ）",
        "answers": "正确"
    },
    "70742fb1-aefe-409d-bad0-cd7061a0eea7": {
        "type": 3,
        "question": "人力资源数据属于BOMS中的S域数据。（    ）",
        "answers": "错误"
    },
    "b6a26f2a-4fd0-44c9-b1d6-daa328fb436d": {
        "type": 3,
        "question": "参考数据是用于将其他数据进行分类或目录整编的数据，如：客户等级分为A、B、C三级。（    ）",
        "answers": "正确"
    },
    "a1d37c3b-e5de-45fe-b1f6-68540fe80f35": {
        "type": 3,
        "question": "业务信息属于极敏感级别的数据。（    ）",
        "answers": "错误"
    },
    "8ede79de-6abb-4595-9a14-eae16296f092": {
        "type": 3,
        "question": "按数据管理视角，将数据分为：主数据、交往数据、统计分析数据、出入参数据、元数据。（    ）",
        "answers": "错误"
    },
    "b41a311d-8005-45e0-a309-44c53a2d2560": {
        "type": 3,
        "question": "按数据管理视角，将数据分为：主数据、交易数据、统计分析数据、参考数据、元数据。（    ）",
        "answers": "正确"
    },
    "e364cf43-43bd-442a-8b17-70ff9182bea1": {
        "type": 3,
        "question": "数据安全治理思路的4个环节是：建体系、强运营、补能力、抓监督、促创新。",
        "answers": "正确"
    },
    "04a48371-e2e1-4e24-a063-6eee5d9b2e07": {
        "type": 3,
        "question": "逻辑模型是一种面向计算机物理表示的模型，描述了数据在储存介质上的组织结构。物理模型的设计应基于逻辑模型的成果，以保证实现业务需求。（    ）",
        "answers": "错误"
    },
    "3f2e68f2-4151-4eb1-9e71-dbd635457154": {
        "type": 3,
        "question": "网络日志数据属于O域数据。（     ）",
        "answers": "正确"
    },
    "97985bbf-0991-4b64-bece-47c9074c0790": {
        "type": 3,
        "question": "数据价值金字塔中，数据资产价值创造是目标，数据应用是载体，数据治理是手段，数据集成和共享是基础。",
        "answers": "正确"
    },
    "a0894897-d942-40e8-a977-d867ae154fed": {
        "type": 3,
        "question": "为加强组织保障，省公司建立了公司级数据治理管委会。",
        "answers": "错误"
    },
    "a3677b73-70bf-4c58-8087-c6cd5021054e": {
        "type": 3,
        "question": "技术漏洞监测是以基础合规为目标，重点关注数据合作和管理过程的安全风险。",
        "answers": "错误"
    },
    "572341d2-e567-4eff-ab73-1090b4a0e075": {
        "type": 3,
        "question": "概念模型是一种面向计算机物理表示的模型，描述了数据在储存介质上的组织结构。物理模型的设计应基于逻辑模型的成果，以保证实现业务需求。（    ）",
        "answers": "错误"
    },
    "67807b6c-e5e4-405c-9815-e712fe26d755": {
        "type": 3,
        "question": "商品信息属于极敏感级别的数据。（    ）",
        "answers": "正确"
    },
    "c91b48ac-b36b-4088-9c98-fe34e4604f53": {
        "type": 3,
        "question": "数据价值金字塔中，数据资产价值创造是目标，数据应用是载体，数据集成和共享是手段，数据治理是基础。",
        "answers": "正确"
    },
    "ecf66750-6175-4131-8069-471e0d647974": {
        "type": 3,
        "question": "为加强组织保障，省公司建立了企业级数据治理委员会。",
        "answers": "正确"
    },
    "16345b9d-c6c0-41fd-a004-930d746f4ad1": {
        "type": 3,
        "question": "5141中的最后的“1”指的是打造1个企业级数据底座。",
        "answers": "错误"
    },
    "0bf2d332-93e9-4c2a-9e76-e691bba05af8": {
        "type": 3,
        "question": "技术漏洞监测是以对业务系统和业务数据平台可能存在的数据泄露关键节点进行深度监测。",
        "answers": "正确"
    },
    "1ac4ca0d-175e-49ae-8cb1-3d52438eb8c3": {
        "type": 3,
        "question": "概念模型是一种面向用户、面向客观世界的模型，主要用来描述现实世界的概念化结构，与具体的数据库管理系统（DBMS）无关。（    ）",
        "answers": "正确"
    },
    "a7ad8f62-ff98-4566-81bb-cfdd540c2693": {
        "type": 3,
        "question": "5141中的最后的“1”指的是支撑1个数据领域消费。",
        "answers": "错误"
    },
    "064e45de-6673-44f0-83cb-a55a4b8fb212": {
        "type": 2,
        "question": "下列说法中，对数据治理描述正确的是？（    ）",
        "answers": ["对认知进行再次定义", "对业务和数据的梳理", "对信息和组织架构进行更现代化的建设", "更加有效地空值数据资源"]
    },
    "c1096573-f8d9-4fa0-92b9-1aa82e0009a2": {
        "type": 2,
        "question": "以下属于管理元数据的是？（    ）",
        "answers": ["人员角色", "数据对象", "业务口径", "数据结构的定义", "数据转换的规则描述", "岗位职责", "业务术语"]
    },
    "63515e0d-175c-4bb5-aefe-e55ee01c924e": {
        "type": 2,
        "question": "在逻辑模型中，需要对模型的（    ）进行标准化定义。",
        "answers": ["统一关系定义", "统一数据定义"]
    },
    "89e117db-ad41-4eee-93b4-0dc0096cde55": {
        "type": 2,
        "question": "数据治理主要包括的维度为（    ）",
        "answers": ["数据安全", "数据质量", "数据架构", "数据标准"]
    },
    "02ca6a9e-fe51-4399-b6a2-f0faee5332de": {
        "type": 2,
        "question": "5141中的最后的“4”指的是？（    ）",
        "answers": ["O", "S", "B", "M"]
    },
    "7c6765bf-9bea-4a78-81bf-f635d6722a76": {
        "type": 2,
        "question": "当前公司运营面临的四大数据问题为（    ）",
        "answers": ["数据贯通不畅", "数据量不够大", "数据记录不全", "信息架构落后 质量参差不弃", "数据开放不够"]
    },
    "0c480e1e-ec55-44aa-bbf6-623bd8e3844c": {
        "type": 2,
        "question": "融合信息层的关键在于？（    ）",
        "answers": ["针对同一信息主体，其业务特征可融合", "不同的信息主体之间，可通过关系实体建立关联"]
    },
    "96fb723d-51af-43e9-8adc-081ed0e2204d": {
        "type": 2,
        "question": "下列数据中，属于主数据的是？（    ）",
        "answers": ["地点", "客户"]
    },
    "c826d0a0-f48e-4884-b224-642b57428ef5": {
        "type": 2,
        "question": "数据模型涵盖以下几种类别（    ）",
        "answers": ["概念模型", "逻辑模型", "物理模型"]
    },
    "651c6781-49b2-4166-abc6-b78917cf48c2": {
        "type": 2,
        "question": "在数据安全治理框架的资产管理中，有哪些关键技术？（    ）",
        "answers": ["文件指纹对比", "关键词监测", "自然语义分析", "正则表达式监测"]
    },
    "10bdedfc-2174-4eae-bed7-a3a2723edb1e": {
        "type": 2,
        "question": "5141的5指的是哪5个方面：对内（????）（????）（????）（????）及对外（????）",
        "answers": ["精智运维", "精益网运", "赋能聚势", "精确管理", "精细服务", "注智赋能", "精准营销"]
    },
    "3918b1b8-82e3-4802-97f3-be7f607596a2": {
        "type": 2,
        "question": "敏感内容分析与识别模型识别以下哪些内容？（    ）",
        "answers": ["涉敏存储识别", "大数据租户", "敏感字段识别", "敏感表识别"]
    },
    "109877c5-e44b-46de-8d91-a70ff79fe356": {
        "type": 2,
        "question": "以下属于技术元数据的是？（    ）",
        "answers": ["数据转换的规则描述", "岗位职责", "数据结构的定义", "业务口径", "业务术语", "数据对象"]
    },
    "c170bce8-781e-42f6-a30f-7247ae7a28ca": {
        "type": 2,
        "question": "数据生命周期，主要管理哪些内容？（    ）",
        "answers": ["归档", "采集", "应用", "数据存储"]
    },
    "2a655271-516b-4c10-a218-b64ab75acd22": {
        "type": 2,
        "question": "以下属于业务元数据的是？（    ）",
        "answers": ["业务口径", "业务术语"]
    }
}


//JS原生xpath选择，document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null)，返回的是枚举类型，需要逐个取出
function Xpath(xpath){
	var xresult = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
	var xnodes = [];
	var xres;
	while(xres = xresult.iterateNext()){
		xnodes.push(xres);
	}
	return xnodes;

}

//自动做题function，i为时间延迟参数，j为题目编号。分为三部分：主函数 + 下一题try + 结束判断
function task(i,j) {
   setTimeout( function () {
		
		try{

			var questionId = document.getElementsByClassName("question")[j].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
			var answerList = questionsDic1[questionId]['answers'];
			if (typeof(answerList) == "undefined"){
				console.log("本题无答案");
				//将无答案的标记为'待检查'
				Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click(); 
			}else if (questionsDic1[questionId]['type'] == 1) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label', document).iterateNext().click();


					}else if (questionsDic1[questionId]['type'] == 3) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();

					}else if (questionsDic1[questionId]['type'] == 2) {
						//取消选择的checkbox
						//document.evaluate('//a[contains(@id,"' + questionId + '")]', document).iterateNext().style.backgroundColor="#32CD32";
						var answers = Xpath('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div//input[@type="checkbox"]');

						if (answers[0]) {
							for (ans of answers){ans.checked=false;} 
						}
						
						//必须先反选，再延迟选择正确答案。猜测是正确答案click后，会更新checkbox，导致之前的反选操作失效
						setTimeout(function (){
							for (var answer of answerList){
									document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label', document).iterateNext().click();
							}	 
						},100)

					}else {
						console.log("题型错误！");
						Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click(); 
					}
					/*左侧list-item改变背景颜色为淡绿。需延迟生效，否则Xpath获取不到元素。原因为：list-item实时监测答案选择情况（已选/未选），并更新元素。无法实现除了“待检查”外的标记，因为元素都是通过XHR从后台获取显示*/


				
		}catch(error){}
		
		try{
			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
		}catch(error){}
		
		if (i == questionNum-1 || j == questionNum-1){
			//由于多选需要反选操作，导致正确答案填入有延后，当多选题量大时，需要延迟一定时间弹出alert
			setTimeout(function(){
				//alert("答题完成，请记住个人码，重新进入考试");
				//window.opener=null;window.top.open('','_self','');window.close();
				//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";
				alert("答题完成，感谢使用");
				console.log("答题完毕，感谢使用");
			},questionNum*50)	
		}
   }, 1000 * i);
}

if(Object.keys(questionsDic1).length > 0){
	var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ","");
	console.log(name + "  开始答题...");
	var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
	console.log(auth);
	var req = new XMLHttpRequest();
	req.open(
	  "GET","/api/v1/system/setting/frontend?_=" + new Date().getTime(),false
	);
	req.setRequestHeader("Authorization", auth);
	req.send(null);
	res = JSON.parse(req.responseText);
	currentUserId = res.currentUser.id;
	for (i=0;i<localStorage.length;i++){
		key = localStorage.key(i);
		//console.log("当前key=" + String(key));

		if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf(name) != -1){
			var examId = JSON.parse(localStorage.getItem(key)).id;
			var name = JSON.parse(localStorage.getItem(key)).name;
			console.log(name,examId);
			break;
		}
	}
	key = "Model.exam.exam/exam/answer-paper.LS." + currentUserId + "." + examId;
	value = JSON.parse(localStorage.getItem(key));
	var questionNum = value.paper.questionNum;
	console.log(questionNum);
	var next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();

	for (var i=0;i<questionNum;i++){
		if(next){
			try{document.getElementsByClassName("list-item")[0].click();}catch(error){}
			task(i,0)
		}else{
			task(0,i)
		}
	}
	
	function reload(){
		//alert("请记住您的个人码：" + "111");
		location.reload();
		console.log("reload..");
	};
	//点击"我要交卷",刷新当前页面
	document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].addEventListener("click",reload);	
	
}else{
	console.log("题库尚未更新！")
	alert("题库尚未更新！")
}
