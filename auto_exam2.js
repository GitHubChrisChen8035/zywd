//alert("题库尚未更新，请等待...")

console.log("提示：脚本可用");

try{var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("dialog animated")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("modal auto")[0];alt.remove();}catch(error){}

try{var alt1 = document.getElementsByClassName("dialog-overlay")[0];alt1.remove();}catch(error){}

try{var alt2 = document.getElementsByClassName("alertify-cover")[0];alt2.remove();}catch(error){}

try{removeEventListener("blur",getEventListeners(window).blur[0].listener);}catch(error){}

//var examId = url.match(/(paper\/|question-|detail\/)([0-9a-zA-Z-]+)/)[2];
//var examId = document.location.href.match(/(paper\/|question-|detail\/)([0-9a-zA-Z-]+)/)[2];
//console.log(examId);
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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf("在线自测") != -1){
		var examId = JSON.parse(localStorage.getItem(key)).id;
        var name = JSON.parse(localStorage.getItem(key)).name;
		console.log(name,examId);
		break;
	}
}
key = "Model.exam.exam/exam/answer-paper.LS." + currentUserId + "." + examId;
value = JSON.parse(localStorage.getItem(key));
var recordId = value.examRecord.id;
console.log(recordId);
var paperId = value.examRecord.paperInstanceId;
console.log(paperId);
var questionNum = value.paper.questionNum;
console.log(questionNum);

questionsDic1 = {"7a9179cc-c10c-482c-b06b-c44b7788dc91":{"type":1,"question":"业务中台是（）的能力封装","answers":"场景化"},"f5a68bc7-d52a-40e4-b88a-3bbb782ae2aa":{"type":1,"question":"业务中台建设六步法，依次是（）。","answers":"场景梳理、业务设计、服务设计、能力打造、能力沉淀、编排开放"},"a64ab243-595c-4064-b266-8ac7390c3c30":{"type":1,"question":"智慧赋能是指锻造产品的智慧化投放能力，丰富（）数据营销能力","answers":"千人千面"},"61fbaca6-a53e-4738-a494-f9b954d0f92f":{"type":3,"question":"破冰行动任务通过应用推广破冰、组织机制破冰，打造标杆应用，健全应用战队工作模式，强化管建战协同，探索将技术中台纳入对内对外常态化生产流程","answers":"正确"},"9f99ca8d-66b1-4767-8360-49a86e880e86":{"type":3,"question":"云边协同架构中集中化节点负责储算任务和数据的集中管控","answers":"正确"},"e04ee5d9-7fb7-45d2-8e20-8310ec3ba447":{"type":1,"question":"符合智慧中台能力治理双平面特点的是","answers":"控制与流量分离"},"4095e266-d109-41ef-822d-87eeac8d62b0":{"type":1,"question":"不是AMG的主要功能是","answers":"全网路由数据管理"},"339cd9ca-18c6-4d30-8cee-d5bc3b5c76f0":{"type":1,"question":"下列哪个选项不属于统一门户前端展示区的频道（   ）","answers":"能力评价"},"d7995dce-419c-47c8-ac06-533e0dda75c2":{"type":1,"question":"智慧中台统一门户目前已经面向什么人员进行开放（   ）（）","answers":"集团内部全体员工"},"5904c9a9-ce1d-46a1-8d01-4386a5dd5b3e":{"type":1,"question":"数据中台是（）","answers":"全网一个数据中台"},"a8a97fc7-f22f-467d-a89d-ed138ccac29b":{"type":1,"question":"数据中台技术规划，将加强大数据核心能力的（），实现大数据技术从跟随到引领","answers":"自主掌控"},"198441a4-e3bf-4388-bd39-a3cb72cc2cfb":{"type":1,"question":"以下属于DaaS服务模式的是（）","answers":"API接口"},"c440d8e0-7981-4b1b-b4e6-d577f73cba88":{"type":2,"question":"业务中台是对业务支撑能力解耦整合，沉淀（）的业务能力","answers":["标准化","可复用","可共享"]},"8e49b7da-e73b-440c-87c0-a7ec1f9cecb9":{"type":3,"question":"能力使用者只能从固定的AMG调用某项中台能力","answers":"错误"},"8a4bf6c8-e36a-4829-8ee5-cd3edbc2d8b3":{"type":2,"question":"攻坚行动指的是通过（   ），提升能力水平、打通敏捷高效运营流程","answers":["能力汇聚攻坚","高效运营攻坚"]},"1e641a70-1735-46ad-8b91-0be5220fc2a2":{"type":1,"question":"智慧中台发展的三个阶段，逐步推进的顺序（）。","answers":"一体化运营、数智化运营、生态化运营"},"92bceedc-bddc-4bd1-b89b-523e1b29f91c":{"type":1,"question":"\"AaaS\"的全称中文解释为：","answers":"能力即服务"},"6cc78c45-6480-41e3-a71a-65e2b47180dd":{"type":1,"question":"智慧中台统一运营体系在（）指引下，通过运营释放能力价值，以（）为核心基础，以（）为流程运转的运营枢纽，以组织协同化、管理规范化、运营一体化、配套系统化为（），不断打通堵点、解决冲突、顺畅流转，全方位实现统一、协同、高效的智慧中台运营体系。","answers":"统一战略、三台能力、统一门户、四个抓手"},"c198cb19-2f4f-4ce5-8fb5-f7d063875890":{"type":1,"question":"面向前台，智慧中台首先要做好（   ）角色，其次要做好（   ）角色，推动业务过程、工作过程、服务过程的数字化、数据化。","answers":"服务员；教练员"},"11d1f640-e836-49cf-88da-85c2f7d9295d":{"type":1,"question":"智慧中台运营效能评价模型包含，客户成功、从1到N、和（   ）","answers":"数智提效"},"457ede5f-5184-47a6-941a-d4b735e8e9bb":{"type":1,"question":"为理顺各角色关系，加强组织协同，构建“三横三纵三维”集、省、专协同的智慧中台运营架构。下列选项中，有关“三横三纵三维”的说法正确的是（   ）","answers":"“三纵”是覆盖全域、全渠道的三台一体化运营"},"98edc425-6a37-49c1-9ffb-eae44c1d7188":{"type":1,"question":"智慧中台统一运营管控的“315”质量保障要素中，“3”码指的是（   ）","answers":"场景编码、能力编码、服务编码"},"5f66f34b-8b3a-45ad-a283-6100c800972a":{"type":1,"question":"技术中台的构建理念是（   ）","answers":"开门建中台"},"7635091f-4dd8-4541-9f09-1f30925e603b":{"type":1,"question":"（   ）能力指的是内部需求方广泛引用了外部能力，自建能力尚未成为服务需求的主力军，或内部特色能力未规模化，如漏洞检测、高精度定位等","answers":"发展型能力"},"aaed44c6-8e9a-47e0-b64b-7c8a110c84b3":{"type":1,"question":"推广模式-能力带应用，指的是基于中台能力，与需求方挖掘可复用、引入增益大的业务场景，实现从（ ）到（ ）的快速应用落地","answers":"0 1"},"a9d96b72-3815-42ac-8a9f-c653c7158120":{"type":3,"question":"智慧中台是全集团各单位可开放、可共享能力的集合，全集团有多个智慧中台。","answers":"错误"},"5cfee1a3-17c7-459a-a924-034070da3c9a":{"type":2,"question":"“智慧中台能力使用者、能力提供者，各方都能够有贡献有付出、有获益有回馈。”这句话中，提到的是统一门户的哪个模块（   ）","answers":["能力考核","能力结算"]},"4acbfc71-619f-43d2-919c-6a6c81b89411":{"type":3,"question":"中台能力从构建就基于统一云原生架构，形成共平台、共能力、共研发的技术体系，降低应用能力开发难度，缩短技术研发交付周期，最大化发挥出“云”的价值。","answers":"正确"},"d23800eb-3cfb-4bb4-8e61-aa1486addfed":{"type":2,"question":"持续推进中台能力构建和运营对内，提升了整体运营和创新效能，主要体现在哪方面？","answers":["推动能力自主可控","提升企业运营效率","赋能数智化创新","敏捷支撑业务发展"]},"377234ea-5fee-450e-b043-37ea8c811b66":{"type":2,"question":"数据中台组织方式遵循（）","answers":["共建共享","多方参与","三边原则"]}}


var next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();

//自动做题function，i为时间延迟参数，j为题目编号。分为三部分：主函数 + 下一题try + 结束判断
function task(i,j) {
   setTimeout( function () {
        
		try{

			var questionId = document.getElementsByClassName("question")[j].getElementsByTagName("a")[0].getAttribute("name").replace(/question-/, "");
			var answerList = questionsDic1[questionId]['answers'];
			console.log(questionId,answerList)
			if (questionsDic1[questionId]['type'] == 1) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answerList + '"]/../../div/label', document).iterateNext().click();


					}else if (questionsDic1[questionId]['type'] == 3) {

								document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//span[text()="' + answerList + '"]/preceding-sibling::div[1]/label', document).iterateNext().click();

					}else if (questionsDic1[questionId]['type'] == 2) {
						//取消选择的checkbox
						/*var answerEl = document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div',document).iterateNext();
						var ipt = answerEl.getElementsByTagName("input");
						if(ipt){	
							for (k=0;k<ipt.length;k++){
								if (ipt[k].getAttribute("type") == "checkbox"){
									console.log(questionId,ipt[k]);
									if(ipt[k].checked==true){ 
										ipt[k].checked=false; 
									}
									console.log(ipt[k].checked)
								}
							}
						}*/

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
			console.log("");
		}
		
		if (i == questionNum-1 || j == questionNum-1){
			//document.evaluate('//a[text()="我要交卷"]', document).iterateNext().click();
			//alert("答题完成，请记住个人码，重新进入考试");
			//window.opener=null;window.top.open('','_self','');window.close(this);
			//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";	

			alert("答题完成，感谢使用");
		}
   }, 1000 * i);
}


for (var i=0;i<questionNum;i++){
	if(next){
		document.getElementsByClassName("list-item")[0].click();
		task(i,0)
	}else{
		task(0,i)
	}
}
