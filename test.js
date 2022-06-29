try{var alt = document.getElementsByClassName("alertify alertify-show alertify-alert")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("dialog animated")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("modal auto")[0];alt.remove();}catch(error){}

try{var alt = document.getElementsByClassName("dialog-overlay")[0];alt.remove();}catch(error){}

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

    if (key.indexOf("Model.exam.exam/exam/answer-paper.LS." + String(currentUserId)) != -1 && JSON.parse(localStorage.getItem(key)).name.indexOf("移动云") != -1){
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

questionsDic1 = {"9c7fb815-34d9-4768-bb54-aad7efcc9d5f":{"type":1,"question":"5G的连接能力可达到（）。","answers":"100万/平方公里"},"436ecda6-e334-45c6-8218-78874c05f571":{"type":1,"question":"5G相对于之前的移动通信技术，最主要的特点是（）。","answers":"万物互联"},"6d05b1c1-983c-43bc-9cdf-cc102d0c49b1":{"type":1,"question":"比特币、以太币等数字产品的核心技术是（）。","answers":"区块链"},"eb28017e-6ae2-4d2c-87ea-3f6a22e56e53":{"type":2,"question":"以下哪个功能是Windows控制面板中包含的（）。","answers":["显示设置","键盘和鼠标","添加和删除应用程序"]},"eed34d5c-ce65-4ec5-bf09-f62444e28912":{"type":3,"question":"采用区块链系统的业务系统由于不可篡改，故不可能作假。","answers":"错误"},"b99298d0-2e7b-441f-9384-6be67fa13dab":{"type":3,"question":"物联网体系架构分为感链知控，其中知指的是数据采集，感知。","answers":"错误"},"57387d13-08bc-4810-a443-30bdbdda16fa":{"type":3,"question":"OCR是利用光学技术和计算机技术把印在或写在纸上的文字读取出来，并转换成一种计算机能够接受、人又可以理解的格式的技术。","answers":"正确"},"0b3b328d-cd91-4786-a253-41145572fbc9":{"type":3,"question":"SDN是未来网络的基础性技术，通过软件定义网络技术，快速响应市场需求，实现网络的快速部署、业务的快速上线、网络的灵活调度、降低网络建设成本、提高网络运营效率。","answers":"正确"},"8612baf8-f788-4be3-b62a-9104cf039e6a":{"type":3,"question":"Redis数据库数据存放在内存中，无法持久化到硬盘中，数据可能丢失","answers":"错误"},"ef910923-dc68-4054-ae6a-481af36ea3d8":{"type":3,"question":"单路E7-8800V4支持内存通道数为8。","answers":"错误"},"16abd497-1361-4211-b38a-6c822adde318":{"type":3,"question":"操作系统可以脱离硬件设备，独立运行。","answers":"错误"},"7770ac4e-db99-4f43-a3b6-28d16fd80ad8":{"type":3,"question":"信息安全的三要素是：机密性，完整性，可用性","answers":"正确"},"27b1a727-9ea3-4129-b2fa-8a7df7281c05":{"type":2,"question":"云桌面支持以下哪些外设（）。","answers":["USB端口重定向","文件重定向","剪贴板重定向"]},"2d519eb2-1768-45ae-8c3e-84392bae73a6":{"type":2,"question":"用户订购云主机后，发现访问公网速度很慢，此时可以变更哪些产品，提升公网访问速度（）。","answers":["弹性公网IP","NAT网关"]},"b531a439-6030-49e4-87d1-51362b8a9cfe":{"type":2,"question":"用于办公的公有云桌面包含哪些特点（）。","answers":["支持多终端接入","支持快速修复故障","支持批量升级、统一维护"]},"e9af0f51-5c07-4c4f-82c3-4d11e533babd":{"type":1,"question":"网络攻击方式多种多样，从单一方式向多方位、多手段、多方法结合化发展。（ ）是指攻击者在非授权的情况下，对用户的信息进行修改，如修改电子交易的金额。","answers":"完整性破坏攻击"},"c21e4359-f273-47b4-a2a1-abec76a7a5f0":{"type":2,"question":"大型传统企业的哪些业务可以优先考虑使用公有云模式（）。","answers":["测试","灾备","门户系统"]},"1867d63c-9825-4ca7-888b-c299634d5038":{"type":2,"question":"服务器按处理器数量可分为（）服务器。","answers":["单路","双路","多路"]},"0b9e6482-3d76-41f6-a225-c0a999f10f23":{"type":2,"question":"虚拟机的特点包括（）。","answers":["分区","隔离","独立"]},"04299407-ed37-4827-a8fb-19fda395a6c1":{"type":2,"question":"非关系型数据库的优势包括（）。","answers":["无需经过sql层的解析，读写性能很高","基于键值对，数据无耦合性，易扩展","存储数据格式多样"]},"efe83e31-69fe-476e-8248-f5407705195e":{"type":2,"question":"以下（）属于目前移动云EMR提供的集群服务。","answers":["HDFS","YARN","MapReduce"]},"d04808da-edde-4335-954c-8bfc9846f8cb":{"type":2,"question":"以下哪些是移动云弹性伸缩产品支持的伸缩场景？","answers":["弹性拓展","弹性收缩","弹性自愈"]},"36fba01f-1791-4887-b690-9bf5e2ed2bce":{"type":2,"question":"常见机器学习算法有哪些类型（）。","answers":["监督学习","非监督学习","半监督学习"]},"4f268c2e-a0c7-44f5-8b17-372d3530a760":{"type":2,"question":"区块链涉及到核心技术包括（）。","answers":["智能合约","加密算法","激励机制"]},"16e1a96c-85e2-4585-b900-b09a42cf1efa":{"type":2,"question":"5G的三大特性是什么（）。","answers":["大带宽","广连接","低时延"]},"627dbb42-3877-4f0d-9eae-b0db96d5c5d6":{"type":1,"question":"虚拟私有云VPC可帮助用户基于移动云构建出一个隔离的网络环境。通过和下列哪种方式结合,可以实现 VPC 与传统数据中心组成一个按需定制的网络环境（）","answers":"IPSEC VPN"},"8dc4e182-38af-41c0-adec-bb10aa9d60c2":{"type":1,"question":"www.bestcar.com是一个刚建立的汽车资讯车友交流网站。主站用Php搭建,有10GB的图片素材,部分JS文 件。目前购买一台ECS放置所有程序代码,并在ECS上安装MySQL数据库。随着用户访问量的不断增长,访问网站的速度越来越慢,图片加载慢,网站响应慢。用户上传的图片每周增长50GB。以下哪种产品组合方案可以同时解决大量图片存储和快速访问两个问题（）。","answers":"采用对象存储+CDN组合"},"4c141805-a485-4cce-9a3d-3a16856cefdb":{"type":1,"question":"物联网组成中可能会用到的移动云消息队列中间件是（）。","answers":"M2M"},"03432ce5-4488-4ed6-9304-eef4739cc881":{"type":2,"question":"下列哪些属于云桌面的目标用户。","answers":["政府机构","金融企业","高新企业"]},"a8845690-6a12-46af-85e4-fd3ea39c56d1":{"type":2,"question":"以下属于常见的外网攻击是（）。","answers":["DDoS攻击","端口渗透","SQL注入"]},"189c6624-56cc-416b-b384-57512f53794e":{"type":2,"question":"通过http访问网站的网络层报文包含以下哪些信息（）。","answers":["IP头","TCP头","上层数据"]},"79ec7d14-4410-49ab-b4c2-1cd2711a1d24":{"type":1,"question":"下面哪一项不是自然语言处理的技术（）。","answers":"语义分割"},"3dd9162c-2819-4bd2-b420-b400a5d35599":{"type":3,"question":"存储自动精简配置如果使用不当容易造成存储空间过量分配。","answers":"正确"},"278ca45b-d680-49cc-a788-b8e8421eb7dd":{"type":1,"question":"以下哪种存储类型的扩展性最低（）。","answers":"DAS"},"7f590f02-3b08-4359-9eb9-355b67b6bcc1":{"type":1,"question":"（）承担着向云租户/服务消费者提供云服务的角色。","answers":"云服务运营者"},"d0dfed39-b963-42d5-9a5c-850dcdf2bef6":{"type":1,"question":"CPU由（）、控制器、寄存器组成。","answers":"运算器"},"66952862-dca4-4fc7-b162-e32fe6fa10e5":{"type":1,"question":"以下哪项不是计算虚拟化的特性（）。","answers":"业务不停机"},"80255460-0156-49a5-8892-4d05cf9f82bd":{"type":1,"question":"（）是常见的IaaS资源调度编排技术。","answers":"OpenStack"},"e4facd4d-7910-4e03-a50c-28cedc1a9372":{"type":1,"question":"计算机网络的基本功能是（）。","answers":"数据传输和资源共享"},"46296869-494f-49fd-aaf5-348559bbe771":{"type":1,"question":"以下哪种云计算架构主要使用人员是运维人员（）。","answers":"IaaS"},"6a482316-7d1a-4e84-8793-056992911e35":{"type":2,"question":"5G在交通行业无人驾驶领域组网可以通过（）实现。","answers":["5G网络蜂窝网","车路协同网","高精定位网"]},"6ef9f9c3-5f7b-48b7-a194-bdbd0d70892f":{"type":2,"question":"物联网终端层用到的技术是（）。","answers":["二维码","传感器","智能标签"]},"3b22d38e-f382-4bec-a351-2eb84841d3fc":{"type":1,"question":"以下哪个存储场景适合使用云硬盘（）。","answers":"MySQL数据库"},"14642677-e903-413b-a957-a102137dc40d":{"type":1,"question":"交通高速视频云联网按照交通运输部的规定，要求全国在（ ）之前完成“部省全面联网”工作。","answers":"2020年12月底"},"7afce09b-d277-4cde-9a04-60038cd831fa":{"type":1,"question":"2017年至2021年SAAS在国内市场市场处于哪个阶段（）。","answers":"调整发展期"},"1d9d4917-de80-4134-9a10-13b99fb5f0bf":{"type":1,"question":"弹性伸缩是怎么计费的 （）。","answers":"本身服务是不收取费用"},"a906a4b2-ff7c-4c87-b49c-6aac2d2247ca":{"type":1,"question":"弹性伸缩中每个伸缩组可创建的策略数目是多少 （）。","answers":"10"},"9c2240b3-0fe4-450a-ae66-19220fd07137":{"type":1,"question":"云桌面适用于以下哪种特性的客户。","answers":"按需租用"},"bd93630d-bc0a-48ff-bc7e-d4c81d920b9e":{"type":1,"question":"以下哪一项不是虚拟私有云的应用场景（）。","answers":"一站式部署运维容器化应用"},"f1639f49-f7e0-4f06-ab11-0bbc917a0264":{"type":1,"question":"以下哪项不是云专线订购时需要填写的关键参数（）。","answers":"系统版本"},"da93d44b-15e2-40f7-bb45-c27d1813f97a":{"type":1,"question":"业务迁移上云过程中涉及多个环节，最后一个环节是( )。","answers":"业务验证"},"0820d2d2-3e64-4299-8110-b90ee65434bc":{"type":1,"question":"云桌面的本质是将计算机能力和存储迁移到（），弱化本地需求和能力，仅提供输入输出信息。","answers":"云端"},"4df7b0fe-cc57-4f51-8609-f5b8dc9fafc8":{"type":1,"question":"以下哪项不是数据加密产品特性（）。","answers":"审计归档"},"51f8f250-5df4-481d-a615-a4d6b0ba2cd0":{"type":1,"question":"用户最多可订购（）个共享流量包。","answers":"30"},"063239df-ba57-4cd2-a89b-4d5e80b7d268":{"type":1,"question":"新型基础设施建设（简称：新基建），主要包括5G基站建设、特高压、城际高速铁路和城市轨道交通、新能源汽车充电桩、大数据中心、人工智能、( )七大领域。","answers":"工业互联网"},"6314354b-b1c9-40b6-8af1-b150007b8cb4":{"type":1,"question":"共享带宽产品指的是多个（）共享一个带宽。","answers":"公网IP"},"6666e516-f28d-4be4-8217-b607d8fed359":{"type":1,"question":"存储网关可以将S3对象接口协议转义为POSIX语义，这是存储网关的（）优势。","answers":"协议转换"},"75c91be4-fb96-46bb-b4eb-540a09bc95f2":{"type":1,"question":"容量型文件存储（）GB起订。","answers":"10"},"b1bbe885-50ed-4728-a753-1c89a337da8e":{"type":1,"question":"云API网关的产品特点不包括（）。","answers":"灵活多变"},"a6831579-4251-41f3-91a7-b284b35c4f0d":{"type":1,"question":"（）云硬盘单盘最大IOPS可达20000，单盘最大吞吐量可达350MB/s。","answers":"高性能型"},"e26bff54-6beb-43ba-bbf3-282fc56749e1":{"type":1,"question":"下列关于块存储、对象存储、文件存储说法错误的是（）。","answers":"块存储擅长存储非结构化数据，对象存储擅长存储结构化数据"},"66bbb5e6-e804-416c-98ac-2fe5db4afe61":{"type":1,"question":"移动云基础口令设置中产品的折扣优先级最高的是（）。","answers":"云+网一键折扣"},"2df5de7f-d068-4e54-b4b1-fb26f3ad8767":{"type":1,"question":"当云主机无法加入指定的安全组时,可能是由于什么原因造成的（）。","answers":"云主机已经加入的安全组数量达到上限"},"a6902407-5b12-4909-9ca2-072314e1e881":{"type":1,"question":"移动云的四融战略中没有包括（）。","answers":"云物融合"},"3f7346fa-d8f9-4910-af44-c6e3d334efb1":{"type":1,"question":"云空间的客服电话跟web网页地址分别是（）。","answers":"4001100868转4/www.ecpan.cn"},"c973fd93-0eda-4c63-b6a2-e6a4d222b47a":{"type":1,"question":"云硬盘业务的可用性和持久性分别是（）。","answers":"99.95%和99.9999999%"},"75948adc-029a-457f-bd51-cee417678d69":{"type":1,"question":"移动云云主机备份是为云主机（）提供的备份产品。","answers":"系统盘"},"0340f506-2740-4e71-83a0-dcb7a1c43d0b":{"type":1,"question":"云硬盘性能指标一般不包括（）。","answers":"最大容量"},"e7340668-8763-4ae6-8a37-5bf744f61f5f":{"type":1,"question":"负载均衡监听器的以下哪个参数不是在创建监听器的时候设置的（）。","answers":"后端端口"},"d3103e26-8d44-4407-a6bd-842e77a58852":{"type":1,"question":"以下哪项不是云桌面一体机所支持的（）。","answers":"三副本机制"},"d480cebb-018e-4bb8-bdb4-5087820da279":{"type":1,"question":"下列哪些是云主机的规格（）。","answers":"以上都是"},"7e9954f3-9b39-4149-ba2c-29ea44f73acc":{"type":1,"question":"内存优化型云主机规格CPU、内存配比为（）。","answers":"1:8"},"3a8f40d1-1f42-4f1d-8331-534df50a3464":{"type":1,"question":"按小时后付费产品不支持续订，只能在订购（）分钟后进行退订操作。","answers":"30"},"4d7855fb-d9cd-43d9-9609-032a4e135fef":{"type":1,"question":"以下哪项不属于云桌面的业务价值（）。","answers":"离线数据编辑与保存"},"dbd4feda-5446-43f8-b6cf-c4093d00b929":{"type":1,"question":"公网IP的网络可用性可以达到多少（）。","answers":"99.95%"},"72fe81c0-9aad-479b-8e5d-215cd12e8c16":{"type":1,"question":"移动云中提供安全、低成本、高可靠、可弹性伸缩的云端托管Hadoop服务的产品是（）。","answers":"EMR"},"1a8cbe61-9f74-414b-a9c0-2fcdccd0f654":{"type":1,"question":"以下( )不属于商贸行业范畴。","answers":"工商服务"},"93fbc0f6-3bfd-4cc9-a0e8-013bb80b32d1":{"type":1,"question":"弹性伸缩在客户需求降低时，云主机运行的实例会怎么变化（）。","answers":"自动减少"},"e31872c2-9d58-49fe-b219-852f1ef1f5b5":{"type":1,"question":"传统无人机与控制台之间主要采用2.4GHZ公共频段的WiFi或厂商私有协议通信，有效控制半径一般不超过( )公里。","answers":"2"},"4bbfaea1-68cc-448d-a6e0-59e3799e76f8":{"type":1,"question":"云主机要进行（）操作之后才能访问文件存储服务。","answers":"绑定NAS网卡"},"6b443c0a-3495-406d-b389-7cac9afa9e70":{"type":1,"question":"下列哪个是云主机的产品功能（）。","answers":"以上都是"},"df158e44-e5a1-4c33-9467-71f8664a77ff":{"type":1,"question":"办公类公有云桌面所采用的终端设备一般是（）。","answers":"瘦终端"},"777ad2af-19cc-4294-8f82-41214a8c7c89":{"type":1,"question":"云迁移分析工具，主机和存储云迁移分析工具都为免费工具，免费提供agent，下列说法不正确的是（）。","answers":"Linuxs操作系统的主机迁移需要安装迁移工具agent"},"e769c22e-f01f-460a-9b86-8c0cacd4615d":{"type":1,"question":"以下哪项资源在删除的时候，不会提示“有关联关系无法删除”（）。","answers":"负载均衡的后端主机"},"7e81a333-f8ae-4b3f-8889-79832be7f167":{"type":1,"question":"以下哪个产品可以为客户的业务提供全网加速分发能力( )。","answers":"CDN"},"fd7eda8d-1429-4de1-a7f8-696569e207ec":{"type":1,"question":"移动云云数据库MySQL最多可增加（ ）个只读实例。","answers":"5"},"115f383c-4bdd-4709-bb99-895f3d2f5a13":{"type":1,"question":"关于对象存储，以下说法错误的是（）。","answers":"单个对象容器，用户只能设置一种访问权限"},"6c23d5bf-6791-4e8c-8512-6ec64039d451":{"type":1,"question":"移动云弹性负载均衡后端云主机的权重一样，但实际负载却不一样，可能是什么原因造成的（）。","answers":"开启了会话保持功能"},"ec54c451-e721-45f8-a2c8-01723790c81e":{"type":1,"question":"NAT网关（）功能，将NAT网关上的公网IP映射给云主机使用，使得后端云主机或者物理机可以面向互联网提供服务。并且可以通过端口转换来隐藏提供服务的真实端口号。","answers":"DNAT"},"9e2d1664-a2aa-48c1-ae3e-2d5fa1588deb":{"type":1,"question":"弹性伸缩产品可以帮助用户在业务增长时自动增加云主机，业务下降时自动减少云主机，实现了可伸缩架构，那么同时需使用什么产品可以实现业务分发（）。","answers":"弹性负载均衡"},"d7bf4728-bd8f-4b06-85b1-6a27ecdc39f6":{"type":1,"question":"以下哪项不属于非关系型数据库的存储格式（）。","answers":"表格模式"},"27935e26-73a4-4ee1-aae3-02a84282962c":{"type":1,"question":"以下哪项不属于Redis特点（）。","answers":"Oracle公司提供开发支持"},"0025279d-3205-4f41-b43a-fcdea4634eca":{"type":1,"question":"以下哪种类型的硬盘转速能够达到10000（）。","answers":"SAS HDD"},"fec1997b-f5c6-4c1d-876b-f69db5aee9d0":{"type":1,"question":"以下哪个端口是Windows系统默认远程连接端口（）。","answers":"3389"},"e18a8b20-584b-430c-8f76-2108023610c1":{"type":3,"question":"移动云Kafka 不支持SASL 认证。","answers":"错误"},"043e91e7-f0a1-415b-ba58-78428a7bc254":{"type":3,"question":"等保的地方要求不属于法律法规。","answers":"错误"},"907f2a90-e137-4cd2-976f-6ca8cd81e8e5":{"type":3,"question":"移动云强化服务能力，多举措并举抢占市场不包括加大合营云的资源布局。","answers":"错误"},"e4ebba45-10ba-4dd0-9040-c709fe9cd1fd":{"type":3,"question":"CDM产品支持单表迁移、整库迁移、全量迁移和增量迁移。","answers":"正确"},"3a8d5b8b-d600-44a8-a2c1-4bdfebbe062e":{"type":3,"question":"云备份为云内的云主机、云硬盘提供简单易用的备份服务，可将数据恢复到任意备份点。","answers":"正确"},"2c23f12b-73c8-4fe4-ac9b-cf2111be168d":{"type":3,"question":"移动云容器服务产品已经具备了Kubernetes服务提供商资质（）。","answers":"正确"}}


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
			alert("答题完成，请记住个人码，重新进入考试");
			window.opener=null;window.top.open('','_self','');window.close(this);
		}
   }, 1000 * i);
}


for (var i=0;i<questionNum;i++){
	if(next){
		task(i,0)
	}else{
		task(0,i)
	}
}
