//alert("题库尚未更新，请等待...")
try{var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];alt.remove();}catch(error){}

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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf("ICT") != -1){
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

questionsDic1 = {
    "f976faab-db21-4e8c-be59-044549b12306": {
        "type": 1,
        "question": "PTN组网主要以（）组网为主。",
        "answers": "环形"
    },
    "d8478bf0-feac-4296-bb2c-28c3f9a11329": {
        "type": 1,
        "question": "MPLS-VPN对以下哪种网络拓扑组网结构最适合？",
        "answers": "网状结构"
    },
    "0fb4768e-e150-41e4-adf1-bb6c9b786421": {
        "type": 1,
        "question": "根据《中国移动有线接入网建设场景模型方案汇编》（2015年版），不属于有线接入传输主推技术包括",
        "answers": "SDH/MSTP 技术"
    },
    "08274f46-a29c-4c2a-aced-4bcc90e0d43b": {
        "type": 1,
        "question": "网络拓扑结构的要素不包含（）：",
        "answers": "单板"
    },
    "9eb30b57-fe60-45a7-845b-9c0eb65d92fe": {
        "type": 1,
        "question": "GPON是基于（）",
        "answers": "ATM、GEM封装"
    },
    "bd862507-9f3c-4132-a5aa-b364cbac0207": {
        "type": 1,
        "question": "ONU是指（ ）。",
        "answers": "光网络单元"
    },
    "1ca6e994-0643-4c48-b69c-a44455639b31": {
        "type": 1,
        "question": "如果有网络连通性问题，可以使用() 命令来检查到达的目标IP地址的路径并记录结果。",
        "answers": "tracert"
    },
    "af920d42-ab85-4260-9095-c863e13e2166": {
        "type": 1,
        "question": "DHCP 属于TCP/IP 参考模型的哪层",
        "answers": "应用层"
    },
    "436d6bff-9ee6-4edb-b81e-e78048ca52a3": {
        "type": 1,
        "question": "源主机ping 目的设备时，如果网络工作正常，则目的设备在接收到该报文后，将会向源主机回应\nICMP的什么报文。",
        "answers": "Echo Reply"
    },
    "dcbcceec-5e5a-49ed-8070-864b64943ecf": {
        "type": 1,
        "question": "想要修改设备名称，应该使用什么命令",
        "answers": "sysname"
    },
    "ffec4939-308c-4ff0-95c8-0b614d658962": {
        "type": 1,
        "question": "以太网帧头封装的MAC地址是以下的哪个代表它是一个广播地址",
        "answers": "FF-FF-FF-FF-FF-FF"
    },
    "cb505fd5-aceb-4960-bacb-c2aa9c647746": {
        "type": 1,
        "question": "传输层的数据封装后被传递给网络层,网络层添加IP报头得到的PDU被称为？",
        "answers": "Packet（数据包）"
    },
    "1ee454be-b9d6-4770-a158-4dc2d84e9efe": {
        "type": 1,
        "question": "网络层进行封装时包含的协议字段是用来标识传输层所使用的协议的，那么填充值为0X06代表上层协议是什么？",
        "answers": "TCP"
    },
    "b29dac19-5cb3-4c59-a530-937e3a599273": {
        "type": 1,
        "question": "以下对于交换机的端口类型描述不正确的是？",
        "answers": "Trunk类型：端口可以属于多个VLAN，可以接收和发送多个VLAN的报文，一般用于交换机之间连接无法与终端设备对接"
    },
    "ff55c642-e69b-4c6f-a1a2-7ffeca4a04f7": {
        "type": 1,
        "question": "共享型MEC组网（MEC部署在地市UPF）的端到端平均时延约为？",
        "answers": "20-40ms"
    },
    "972557b2-728a-4c1b-8d65-d7c0abc287b9": {
        "type": 1,
        "question": "以下哪种业务属于uRLLC场景应用？（）",
        "answers": "远程驾驶"
    },
    "583be153-f3f2-480e-b247-e88ea8617603": {
        "type": 1,
        "question": "以下不属于BAF网络服务增值功能？",
        "answers": "Volte高清语音"
    },
    "349255c1-1eca-4dad-94d6-5a411b590d1e": {
        "type": 1,
        "question": "以下4种业务中，哪种业务跟其他三种不属于同一类？",
        "answers": "3D全息"
    },
    "4c06f086-d72f-454a-856b-c6bf2e462c99": {
        "type": 1,
        "question": "共享型MEC与入驻式MEC两种组网模式，客户侧CE是否需要支持GRE隧道协议？",
        "answers": "共享：需要  入驻：不需要"
    },
    "35a85e39-ef0a-4b82-bbe7-d6231906c7bd": {
        "type": 1,
        "question": "以下哪些不属于5G核心网络关键技术？",
        "answers": "语音连续性"
    },
    "dc38aa90-0d9d-4db7-9a4d-921ad9856825": {
        "type": 1,
        "question": "下列哪种5G应用场景对承载网时延挑战最大？",
        "answers": "uRLLC"
    },
    "0d3374b0-f48c-4046-bc24-3451d911017c": {
        "type": 1,
        "question": "DICT雷达兵通过（）方式采集项目点位信息",
        "answers": "ping"
    },
    "dc661309-81d8-40b6-98cd-258af698e2df": {
        "type": 1,
        "question": "DICT雷达兵通过（）协议采集服务器、交换机等IT设备信息",
        "answers": "SNMP"
    },
    "95a3156a-82fa-447f-8247-6a4528ed29a2": {
        "type": 1,
        "question": "DICT雷达兵集中式部署适用于（）方式组网的项目",
        "answers": "MPLS VPN"
    },
    "c5678257-c72d-4075-a8cf-86e9d9c34c69": {
        "type": 1,
        "question": "DICT雷达兵支持（）登录",
        "answers": "一键远程"
    },
    "ab9babf2-9159-4fb0-9496-47789c5c1f07": {
        "type": 1,
        "question": "DICT雷达兵通过（）关联、拓扑收敛分析等能力，远程一键定位故障原因",
        "answers": "告警"
    },
    "5ec457cc-27c3-4b3e-b2de-143e48a4d477": {
        "type": 1,
        "question": "DICT雷达兵是一款（）的运维操作工具",
        "answers": "自研"
    },
    "1d35d59d-2a57-4ba8-8898-c192c6ac26d1": {
        "type": 1,
        "question": "DICT雷达兵通过内网安全扫描软件，可以对（）进行扫描与检测",
        "answers": "弱口令"
    },
    "6e6ae787-7357-4a15-a21d-d0e5c8217c23": {
        "type": 1,
        "question": "5G专网数据不出场需求（MEC入驻至客户园区）对应那种产品模式",
        "answers": "A4"
    },
    "762a7afc-2436-45fe-a54c-8bcd8187a4cf": {
        "type": 1,
        "question": "5G专网专网专用需求（新建基站独享）对应那种产品模式",
        "answers": "B3"
    },
    "71e8eb21-b4ff-4a89-98dc-928c73853360": {
        "type": 1,
        "question": "5G专网共享模式组网，在客户要求3A建设标准情况下，一般建设周期",
        "answers": "60"
    },
    "744c2c41-24d6-4526-a0ad-24dbf68774e7": {
        "type": 1,
        "question": "5G双域产品下单里含一条什么专线",
        "answers": "云专线"
    },
    "6ed308b1-0f10-486a-ae98-46dc6d9a8826": {
        "type": 1,
        "question": "5G双域产品开通时长",
        "answers": "5个工作日"
    },
    "a7126f73-b406-4de2-b15e-0f8e78afe7c4": {
        "type": 1,
        "question": "智云领航安全产品的实现方式是（   ） ",
        "answers": "软件能力"
    },
    "7c70a98b-abaf-4801-811f-c8bb0a7cb7e0": {
        "type": 1,
        "question": "网络安全防护的充要条件是（）",
        "answers": "存在互联网出口"
    },
    "587c8801-61eb-4e6d-aa4c-e9b6aec09a05": {
        "type": 1,
        "question": "根据国标《网络安全等级保护基本要求》，对信息系统分为有()级安全要求",
        "answers": "五级"
    },
    "6b53274f-01d4-43ae-94ec-b9c0f898f1cd": {
        "type": 1,
        "question": "智云领航安全除了标准化产品外，还有()安全服务能力",
        "answers": "安全产品托管服务"
    },
    "fb71cd05-6afa-4891-a013-cca5dcacd2f3": {
        "type": 1,
        "question": "对于需要专线开通的智云领航安全产品，正确的说法是()",
        "answers": "托管在移动idc机房的客户也需要开通专线"
    },
    "37e83ee1-4f68-4b76-9cb8-05f9341ff578": {
        "type": 1,
        "question": "对于中小型企业来说哪一种等保等级更适合()",
        "answers": "一级和二级"
    },
    "ba1e250e-0fef-409d-a68a-cd58ef19ef32": {
        "type": 1,
        "question": "以下哪种云业务场景支持智云领航的防火墙产品？",
        "answers": "合营云"
    },
    "1c5672d0-a7a1-4fe6-a9bf-28c0a9204932": {
        "type": 2,
        "question": "根据当前已有的接入技术和我公司的业务发展策略，以下关于有线接入技术的选择,以下说法正确的是",
        "answers": ["对于普通集团客户、WLAN 等业务接入优先考虑使用PON 技术", "对于 AB 类集团客户和宏站接入等高等级业务需求采用PTN、小型化PTN接入，原则上现有DH/MSTP 网络仅限于插板扩容，严格控制其投资规模。"]
    },
    "76b3d49f-24ab-445e-8cc8-304933ab5cec": {
        "type": 2,
        "question": "智能组网可实现哪些接入方式？",
        "answers": ["VC-OTN", "PON", "SD-WAN", "SPN"]
    },
    "f645a0a9-e430-430f-9e71-c90874e318ef": {
        "type": 2,
        "question": "OTN关键技术特征体现为大颗粒的宽带的（）、（）和（）。",
        "answers": ["复用", "交叉", "配置"]
    },
    "19a18d59-5e14-46d7-80ad-ee05323ff75a": {
        "type": 2,
        "question": "TCP/IP 协议栈包括以下哪些层次？",
        "answers": ["网络层", "应用层", "会话层", "表示层", "传输层", "网络接口层"]
    },
    "c2128898-bd00-4985-899c-4048453a27a8": {
        "type": 2,
        "question": "在网络层上实现网络互连的设备是",
        "answers": ["路由器", "三层交换机"]
    },
    "a8ae1be2-bf4d-4f3f-90e8-b6840bee590d": {
        "type": 2,
        "question": "在TCP 连接中,客户端在发起连接请求前会先确定一个客户端端口,然后用这个端口去和服务器端进行握手建立连接,客户端在发起连接时可能会使用的端口有哪些？",
        "answers": ["443", "1027", "3000"]
    },
    "678a6554-91fc-455f-8080-cc9b8fa956be": {
        "type": 2,
        "question": "5G核心网网元包括（）",
        "answers": ["SMF", "AMF", "UPF", "NEF"]
    },
    "e7098b73-6fd2-4321-a84f-3cc4bd9f1d90": {
        "type": 2,
        "question": "5G的三个主要商业场景是：",
        "answers": ["eMBB", "uRLLC", "mMTC"]
    },
    "3113dee6-df82-4538-a542-6ba18f2025a0": {
        "type": 2,
        "question": "下列哪些属于5GC的标识符？",
        "answers": ["DNN", "TAI", "GPSI"]
    },
    "55153160-bdeb-402d-833d-45ecb4229325": {
        "type": 2,
        "question": "DICT雷达兵能够采集项目点位的网络质量信息包括（）",
        "answers": ["抖动", "丢包", "在线状态", "时延"]
    },
    "b683dd91-fddc-4a4c-8bb4-b4abc7ca4e6f": {
        "type": 2,
        "question": "DICT雷达兵能够采集项目中服务器设备的信息包括（）",
        "answers": ["CPU", "内存", "硬盘", "应用进程"]
    },
    "81adc475-7478-4565-ac96-eb4635698a8c": {
        "type": 2,
        "question": "DICT雷达兵的安全防护功能能够对（）进行扫描和检测",
        "answers": ["弱口令", "漏洞", "高危端口"]
    },
    "bb068a8a-90c5-4b6a-aa3e-e64ccebcf87d": {
        "type": 2,
        "question": "5G终端配置主要有哪些内容",
        "answers": ["SA模式设置", "DNN名称设置"]
    },
    "5721ddc0-a8dc-470b-9566-c553dee9efaf": {
        "type": 2,
        "question": "5G双域专网是哪双域",
        "answers": ["公网域", "内网域"]
    },
    "d0e5b040-270e-4a52-a653-ea6ca08c2b08": {
        "type": 2,
        "question": "5G双域专网主要应用场景",
        "answers": ["学校", "医院"]
    },
    "e938706f-25b9-496c-b7ab-3bbae8f671bb": {
        "type": 2,
        "question": "智云领航安全能力的三大特点是（   ）",
        "answers": ["实现资源的弹性订购", "软件式快速部署", "跟随技术发展不断更新"]
    },
    "565c1f3a-ced1-4d36-9d47-c00a53c788ba": {
        "type": 2,
        "question": "智云领航安全能力的三大着力点是（   ）",
        "answers": ["边界安全防护", "服务器、终端防护"]
    },
    "eae1cdee-24fd-4f49-a752-c4b1b81b951e": {
        "type": 2,
        "question": "智云领航典型场景有（   ）",
        "answers": ["移动idc或客户机房场景", "云上业务场景"]
    },
    "108142bf-49b4-449a-b507-63f3451874ed": {
        "type": 3,
        "question": "5G专网共享模式组网，客户侧AR设备是否需要具备GRE功能",
        "answers": "正确"
    },
    "dda61de0-da9c-448e-8aba-e7d9df39dd2a": {
        "type": 3,
        "question": "5G双域专网客户信息收集表中“客户内网全量地址段”和“客户内网服务器地址段”信息一定不同",
        "answers": "错误"
    }
}




next = document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext();
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
						var answerEl = document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]/div',document).iterateNext();
						var ipt = answerEl.getElementsByTagName("input");
						for (k=0;k<ipt.length;k++){
							
							if(ipt[k].checked==true){ 
								ipt[k].checked=false; 
							} 
}

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
			alert("已完成，感谢使用！");
		}
   }, 1000 * i);
}

for (var i=0;i<questionNum;i++){
	if(typeof(next) != "undefined"){
		task(i,0)
	}else{
		task(0,i)
	}
}
