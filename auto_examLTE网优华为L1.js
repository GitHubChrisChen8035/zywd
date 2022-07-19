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
    "2869a7d8-0c6c-4803-be80-9d88bc57819f": {
        "type": 1,
        "question": "漏做邻区时，可能会导致的网络出现以下问题()",
        "answers": "弱覆盖，掉话"
    },
    "7a7b7bb7-188f-4f30-9ea6-0e6b0a78c49f": {
        "type": 2,
        "question": "4G室分系统内邻区设置原则（手工规划）",
        "answers": ["添加有交叠区域的室分小区为邻区（比如电梯和各层之间）；", "将低层小区和宏站小区添加为邻区，保证覆盖连续性；", "高层如果窗户边宏站信号很强，可以考虑添加宏站小区到室分小区的单向邻小区。"]
    },
    "b4f8548e-a486-40f2-b3b0-dbcab7bd47fe": {
        "type": 1,
        "question": "LTE下行没有采用哪项多天线技术:",
        "answers": "TSTD"
    },
    "8ac98597-2961-46ef-8225-d1e4d560cf92": {
        "type": 1,
        "question": "以下下行信道中，允许路损最小的是？",
        "answers": "2M的下行业务信道"
    },
    "2faebe42-f457-4b19-87dc-47063604edc8": {
        "type": 1,
        "question": "目前设备可实现的是单通道功率",
        "answers": "40W"
    },
    "ad8df854-87b9-455d-9206-d1628605db92": {
        "type": 1,
        "question": "下面协议子层不属于用户面的是____?",
        "answers": "RRC"
    },
    "20acae90-d8ca-4fb2-9661-4fdbdd3dc650": {
        "type": 1,
        "question": "（LTE）3GPP R8 及以后的SGSN与SGW之间的接口是（）",
        "answers": "S4"
    },
    "cc9809cc-0066-4ea8-8aaf-fbfdee191775": {
        "type": 1,
        "question": "X2AP的Resource Status Reporting Initiation过程通过那条消息发起？",
        "answers": "RESOURCE STATUS REQUEST"
    },
    "7fe71a05-5e11-4f1d-9892-c5f06a976ab7": {
        "type": 1,
        "question": "室内覆盖站（E频段）：同频网络、 20MHz 、10用户同时接入，小区边缘用户下行速率约（）",
        "answers": "1Mbps/250Kbps"
    },
    "3d1c90e4-b1e9-4a2a-929e-6cc31a4c5d1b": {
        "type": 1,
        "question": "对于越区覆盖问题,下述的原因分析,错误的是:（）",
        "answers": "查询是否存在邻区漏配问题。可根据Measurement Control或SIB3中携带的邻区信息确认"
    },
    "7dfddf95-efcb-4c0b-ae4a-f48a3d28603a": {
        "type": 1,
        "question": "目前LTE终端发射功率最大值是( )",
        "answers": "23dBm"
    },
    "df7a11cb-feb0-4597-a71e-2f20c4b2136f": {
        "type": 1,
        "question": "天线端口之间的隔离度一般需要满足：（）",
        "answers": "大于30dB"
    },
    "3da69c11-8f04-4ad9-a2cd-cc7297c64191": {
        "type": 2,
        "question": "2012年10月中国政府首次正式公布了FDD频谱规划方案，将原3GFDD规划的（）和（），可作为LTE-FDD和LTE-AFDD系统使用频率。",
        "answers": ["1.9G", "2.1G"]
    },
    "7a19dc02-455e-42f6-afb2-8b01e5b00b6f": {
        "type": 2,
        "question": "A5事件加快服务向目标切换",
        "answers": ["增大A5门限1", "减小A5门限2"]
    },
    "4b03be7e-5cae-4490-a87b-78be672bfffd": {
        "type": 2,
        "question": "S1接口控制平面与用户平面类似,也是基于IP传输的,其传输网络层包括哪些？",
        "answers": ["数据链路层", "物理层", "SCTP层", "IP层"]
    },
    "741b22f9-2e9b-45db-8b30-1ceed5bcb8fa": {
        "type": 2,
        "question": "以下哪些接口是属于HLR/HSS融合设备的接口？()",
        "answers": ["S6d", "Lh/Lh’", "Gr", "S6a"]
    },
    "1f3d2804-eb5f-40fb-a436-5f8c00f8e590": {
        "type": 2,
        "question": "ICIC技术就是在相邻小区之间进行协调，以避免或降低ICI这种“协调”实际上是通过在小区边缘采用小区频率复用方法实现的，可分为()",
        "answers": ["软频率复用", "部分频率复用"]
    },
    "f50975cf-4b5d-4ebf-9de9-feae856636ee": {
        "type": 2,
        "question": "以下不是Ga接口的承载协议的是________",
        "answers": ["Diameter", "SCTP", "Radius"]
    },
    "b0a1c5fe-f87b-4bb8-9555-3228fd9ee22e": {
        "type": 2,
        "question": "天线增益用表示？",
        "answers": ["dBi", "dBd"]
    },
    "95810f8f-dffb-4486-aac0-ff142be6fbfe": {
        "type": 2,
        "question": "手机要在一个小区中发起RRC连接或重建立请求必须要获取到哪几条系统消息（）？",
        "answers": ["MIB", "SIB1", "SIB2"]
    },
    "09b75599-38ec-4f0a-98ad-8b54294e24ac": {
        "type": 2,
        "question": "在移动通信系统中常用的多址方式有( )以及他们的混合应用",
        "answers": ["FDMA频分多址", "TDMA时分多址", "CDMA码分多址"]
    },
    "89723ea8-e5e9-4e65-9438-065e2726f2f6": {
        "type": 2,
        "question": "LTE网络L2层协议包括：RLC、MAC和PDCP层，其中PDCP层的主要功能包括如下( )?",
        "answers": ["头压缩和解压缩", "执行安全机制", "支持切换功能"]
    },
    "6f89ed5d-e2c7-4cdd-9b4c-bd7018525cc2": {
        "type": 1,
        "question": "1×3频率规划：指全网总共使用（）个频点，一个基站分为3个扇区，每个扇区使用不同的频点。",
        "answers": "3"
    },
    "79766041-6993-4fbd-8894-1591ff719fc1": {
        "type": 1,
        "question": "以下室内分布系统中，通过相同长度馈线，损耗最小的是（）？",
        "answers": "GSM"
    },
    "a9fcbd79-f32f-4f66-88ef-e05513e84001": {
        "type": 1,
        "question": "PCI复用距离用大于__倍的小区覆盖半径",
        "answers": "5"
    },
    "ea819fc0-e8fc-4ca0-aeed-a26bb6c450f7": {
        "type": 1,
        "question": "LTE室分目标覆盖区域内95%以上的RS-SINR要求＞( )dB",
        "answers": "6"
    },
    "21693478-b303-4e93-9776-c13b1dc2a229": {
        "type": 1,
        "question": "LTE中路测发现天馈接反的现象，以下排查措施无效的是？",
        "answers": "核查天线端口与馈线是否一一对应"
    },
    "b1504cee-897f-410e-9984-cdcb8fcfa108": {
        "type": 1,
        "question": "四天线MIMO模式不适合高速场景主要因为（）？",
        "answers": "信道估计精度不够"
    },
    "5e149c52-fdd7-410f-8d1e-2a9541de3694": {
        "type": 1,
        "question": "如果BS8800机柜的基带框已经安装了一个GU的BBU，那么该基带框的剩余空间还可以安装几个BBU？",
        "answers": "1个"
    },
    "d9946b08-a74a-45d4-bc41-e2cab8f23372": {
        "type": 1,
        "question": "关于弱覆盖及不连续覆盖，下述哪些是错误的？（）",
        "answers": "GPS跑偏引起弱覆盖"
    },
    "88cf635c-fb27-433c-a252-df89e4791a94": {
        "type": 1,
        "question": "E-UTR系统覆盖半径最大可达（）",
        "answers": "100km"
    },
    "71193e07-e340-4571-9479-796c07c813ac": {
        "type": 2,
        "question": "影响天线覆盖距离的主要因素有？",
        "answers": ["天线增益", "天线挂高", "天线方位角", "天线下倾角"]
    },
    "4b26be60-1a5e-4aed-a253-39f6c8b26002": {
        "type": 2,
        "question": "以下场景中，一般只考虑视距覆盖的有？",
        "answers": ["机场", "IT卖场"]
    },
    "f6aac51b-d385-47c7-9b5a-2416a7f1958b": {
        "type": 2,
        "question": "RRU的安装方式",
        "answers": ["RRU落地安装架", "RRU挂墙安装", "RRU抱杆安装"]
    },
    "b394e79f-d9f0-4685-951e-87a0fa4e789b": {
        "type": 2,
        "question": "系统支持指定用户赋予一个或多个操作权限，能灵活地划分管理范围权限和操作权限。在授权时，除了授予登录后的操作权限，同时需要限制或授予在登录时的权限，包括：",
        "answers": ["客户端IP地址", "可登录类型", "缺省密码和登录后修改密码选项", "登录时段"]
    },
    "57e8405b-fdfd-4603-912c-183103c33fe1": {
        "type": 1,
        "question": "在商用网络中，若进行BBU GPS时钟级联，一般推荐级联不超过（）级。",
        "answers": "3"
    },
    "52edac0c-850e-4662-8b9e-b3730f26223d": {
        "type": 1,
        "question": "当eNb采用线路而非GPS时钟时，对于传输为微波时，一般建议不要超过（）跳。",
        "answers": "20"
    },
    "f5da62b1-53a2-4896-9b32-d5b9bece8573": {
        "type": 1,
        "question": "DBS3900支持RGPS应用必须要配置（    ）单板。",
        "answers": "USCU"
    },
    "2ae7d170-738b-4d84-9b44-365f3e5d3be7": {
        "type": 1,
        "question": "现场一个BBU最多可以支持几块LBBPd单板？（ ）",
        "answers": "4"
    },
    "e67d0f72-3143-4ba7-91c1-58100049c10b": {
        "type": 2,
        "question": "传输带宽规划需要考虑以下哪些流量？（   ）",
        "answers": ["S1信令面", "操作维护通道", "S1用户面", "X2"]
    },
    "20294436-5465-4872-aa07-f101724d9305": {
        "type": 2,
        "question": "BBU3900按逻辑功能可划分为几个子系统",
        "answers": ["控制子系统", "传输子系统", "基带子系统"]
    },
    "d788919f-5f0c-4e5c-bdc4-b5e90af6ccfc": {
        "type": 1,
        "question": "下面不属于LTE TDD使用的频率",
        "answers": "2110～2170MHz"
    },
    "79639515-8fe1-40ca-821a-811d35ef54fc": {
        "type": 1,
        "question": "下面关于LTE频率规划说法正确的是（）：",
        "answers": "上下行的ICIC不完全相同"
    },
    "9f1f7414-06c0-43dd-8a25-bd71367e682a": {
        "type": 1,
        "question": "LTE UE 振荡器中的频率经度要求小于（）PPM",
        "answers": "0.1"
    },
    "f01fbe78-da3c-4bba-8c61-6d919ffc7fd3": {
        "type": 1,
        "question": "RRU3152-e支持的频段是（）",
        "answers": "2320-2370"
    },
    "cd54ffc5-cee1-473c-a147-a6ffdca89a41": {
        "type": 1,
        "question": "关于载波聚合下的准入控制，华为产品对于准入控制的实现主要有用户数的准入和QoS满意率的准入。基于用户数的准入在PCell和SCell同时进行；基于QoS满意率的准入只在()。",
        "answers": "Pcell"
    },
    "061dc389-599e-45cb-a9b0-866a3a19393d": {
        "type": 2,
        "question": "Atoll可以直接输出的覆盖图包括:",
        "answers": ["参考信号强度", "最佳服务小区"]
    },
    "7d0cb3fa-2df4-4e61-8b0f-029adbb8377f": {
        "type": 2,
        "question": "LTE上行实现半静态或动态频率重用方案的指示()",
        "answers": ["HII（High Interference Indicator）", "OI（Overload Indicator）"]
    },
    "5ef0d994-e9ac-40bd-b0fd-32bb9cd86e86": {
        "type": 1,
        "question": "S1-U接口基于以下哪种接口协议（）",
        "answers": "GTP-U"
    },
    "18beb97e-c1c2-4733-97eb-f016280c93fe": {
        "type": 1,
        "question": "S-GW和P-GW之间的接口 （）",
        "answers": "S5"
    },
    "eaab9040-838e-4379-836c-9d28db9d2bdd": {
        "type": 1,
        "question": "（LTE）3GPP R8 及以后的SGSN与MME之间的接口是（）",
        "answers": "S3"
    },
    "274c3df0-2960-435f-993e-656d18fd1215": {
        "type": 1,
        "question": "E-UTRAN包括下列哪些节点（）",
        "answers": "ENodeB"
    },
    "b219df4e-59c5-443e-a734-0e68a367b482": {
        "type": 1,
        "question": "为了支持GTL的CSFB，需要在MME和MSC之间增加什么接口（）",
        "answers": "SGs接口"
    },
    "1acd81a9-529e-43e5-b7c3-1099bc674dc8": {
        "type": 1,
        "question": "S1接口不支持的功能有:",
        "answers": "LTE_ACTIVE态的UE在LTE系统内移动性管理功能"
    },
    "bf67fd4c-c3fb-4618-aab5-0777c769422d": {
        "type": 1,
        "question": "关于TD-LTE网络结构，以下哪种说法是错误的?",
        "answers": "E-NodeB间的接口为S1接口"
    },
    "dffd09fc-00b2-4e6a-95b4-b1d751f76ed4": {
        "type": 1,
        "question": "LTE系统小区间干扰抑制技术主要有3种解决方式，不包括",
        "answers": "频分复用"
    },
    "0a916dd7-904a-46da-a2ee-a2108cc9a055": {
        "type": 2,
        "question": "S-GW和P-GW之间的接口有哪些（）",
        "answers": ["S5", "S8"]
    },
    "a540c597-da1e-402f-805d-c4d4fa4f465a": {
        "type": 2,
        "question": "SGW具有哪些功能（）？",
        "answers": ["终止由于寻呼原因产生的用户平面数据包", "支持由于UE移动性产生的用户平面切换"]
    },
    "76df3f63-70a0-417a-8e31-2c3ac168bbd3": {
        "type": 2,
        "question": "RRC层的主要功能包括以下哪些（）",
        "answers": ["UE测量报告与控制", "RRC连接管理", "无线承载（RB）管理"]
    },
    "c2fb5a0c-337a-4449-8c0d-66aad7a0ebb9": {
        "type": 1,
        "question": "TD-LTE在系统配置为TM3/7自适应模式下，关于定点FTP业务测试（）可以算通过单站验证",
        "answers": "UL Tput>15Mbps,DL Tput>50Mbps"
    },
    "aa6098e3-8853-45ef-b5a2-c0bfd1405d66": {
        "type": 1,
        "question": "下面哪些不属于组网拓扑切换( )",
        "answers": "基于覆盖的切换"
    },
    "5953492d-6a5a-4b5e-8e55-6a765e9fbf97": {
        "type": 1,
        "question": "切换成功率反映了UE在小区间移动时，存在信令以及至少一个( )业务连续的成功概率？",
        "answers": "NonGBR"
    },
    "fbe1640d-9b3f-44b7-8134-39dd740ff07d": {
        "type": 1,
        "question": "单站验证需要哪些设备",
        "answers": "电脑：终端：GPS"
    },
    "7bf63ff4-c3ea-4c47-af12-25e3b02b10fb": {
        "type": 1,
        "question": "切换过程中的“重配置完成”消息是由（1）_____发给（2）_______的",
        "answers": "(1).UE;(2).TargeteNB"
    },
    "1c33cf0d-b51a-460f-9fbe-f9e3e11f42e0": {
        "type": 2,
        "question": "以下哪些是单站验证（优化）结果的输出范畴？()",
        "answers": ["TD-LTE单站核查优化测试记录表", "TD-LTE单站优化状态表", "TD-LTE站点建设问题汇总表"]
    },
    "ef91e587-52b0-439f-b18b-3ad9d96af020": {
        "type": 2,
        "question": "哪些属于TD-LTE室外宏站单站优化范畴（）",
        "answers": ["站内切换", "Idle模式参数配置检查", "双模共站影响", "覆盖检查"]
    },
    "8a908581-11d3-4ce9-b5b3-e73c39c45a06": {
        "type": 1,
        "question": "驻波比是一个比较重要的指标。优化前应该确定基站每个小区在LTE的工作频率上驻波比小于( )",
        "answers": "1.5"
    },
    "b4f82bc1-0127-4aa3-af4f-1f79e0591204": {
        "type": 1,
        "question": "为保障网络无线覆盖质量正常，驻波比（VSWR）通常要求小于（）。",
        "answers": "1.5"
    },
    "c5fc4b66-e0ff-4273-a3b5-8990c4333e1c": {
        "type": 1,
        "question": "LTE室外宽频智能天线支持的频段不包括（）",
        "answers": "E频段"
    },
    "5de42772-607c-4e3b-8bf5-347af7bc1e79": {
        "type": 1,
        "question": "日常监控巡检中，Ir接口光功率取值在（ ）区间范围内为正常。",
        "answers": "[-130，0]"
    },
    "9ffd8ac9-95be-43e9-8200-9c6389d0d5e6": {
        "type": 1,
        "question": "以下哪个单板对于基站来说是可选配置？（  ）",
        "answers": "UTRP"
    },
    "397e24ce-1ce3-42cf-b32e-b2e9eab256aa": {
        "type": 1,
        "question": "以下哪些是属于SGW的功能（）",
        "answers": "针对UE，PDN和QCI的计费"
    },
    "e54ee86e-e7b7-4dfe-9171-5ef7f4d2cfa9": {
        "type": 2,
        "question": "单站测试时如何选择测试点( )",
        "answers": ["测试点位置接近小区中心", "选择在小区天线主发射方向距离基站100米左右，且与基站间有视距传输的位置", "选择目标小区信号强度较强且其他小区信号相对较弱的位置"]
    },
    "0c65aa2a-08d8-4b04-a494-67492588cdae": {
        "type": 2,
        "question": "BBU主要功能包括（）？",
        "answers": ["产生时钟信号并与网络进行同步", "传输接口作用", "eNodeB的OA&M控制作用"]
    },
    "4cfa0be0-5401-40fa-987f-b98e341d557f": {
        "type": 2,
        "question": "AMRLC实体会处理哪些RLCPDU（）",
        "answers": ["AMDPDU", "AMDPDUsegment", "STATUSPDU"]
    },
    "c17ef566-1c43-46cf-9b05-af0d3d18f73a": {
        "type": 1,
        "question": "从环保考虑，LTE室内覆盖的天线口功率一般不超过（ ）dbm?",
        "answers": "15"
    },
    "562541ec-fabb-48dc-a85e-206eeae58f20": {
        "type": 1,
        "question": "室内多系统合路要求TD-LTE的电平RSRP大于（）dBm",
        "answers": "-85"
    },
    "fdff2661-8bff-4c70-a6e8-6011559d3dd7": {
        "type": 1,
        "question": "用于室内的是",
        "answers": "E频段"
    },
    "b2b07c71-b24b-459a-8f5c-e5da8e48105a": {
        "type": 1,
        "question": "室内多系统合路要求TD-LTE的电平RSRP大于（）dBm",
        "answers": "-85"
    },
    "ed2d00e4-56c0-424b-8976-4352bdbef6fe": {
        "type": 2,
        "question": "LTE和WLAN在某一室内房间都要做覆盖,以下建议正确的有:",
        "answers": ["建议在LTE频率规划中,尽量采用远离WLAN频段的可用频率", "如果不是一套室分系统,两系统天线间距过大可能会导致异系统干扰增加"]
    },
    "ac1773e3-6c1c-4306-a915-74909889ff77": {
        "type": 2,
        "question": "以下关于室内覆盖SU-MIMO说法正确的有:",
        "answers": ["它能同时实现单UE和小区吞吐量翻番", "其效果与UE所处位置有关"]
    },
    "9d2ef651-b9ef-468b-863e-805d7c887187": {
        "type": 1,
        "question": "属于干扰随机化的方法是:",
        "answers": "加扰"
    },
    "51a9cc28-cf82-4451-b66c-e0cbdc4df2b4": {
        "type": 1,
        "question": "天馈测试过程中，VSWR测试值为1.5,对应的return loss为（）",
        "answers": "14dB"
    },
    "079e65ec-c61a-4691-8e7a-4912fa1279c0": {
        "type": 2,
        "question": "ACLR是邻道泄漏,它是指发射信号落入到被干扰接收机通带内的能力？",
        "answers": ["邻道", "带外"]
    },
    "c03503ba-52a4-4535-a3c4-90a2d547c4cb": {
        "type": 1,
        "question": "收到用户投诉，我们不可以通过哪些方式分析处理？",
        "answers": "根据客户话进行推测"
    },
    "162bee0c-8aff-49e2-bce8-042550bcf7c1": {
        "type": 1,
        "question": "ATU平台ATU设备管理中不包含",
        "answers": "ATU登陆日志"
    },
    "0b7d3db9-2f1d-492b-a7c5-16488060c795": {
        "type": 1,
        "question": "一台8模块ATU，语音四网同测需要多少张SIM卡（考虑数据回传）？()",
        "answers": "9"
    },
    "0ef27394-0f82-4029-bbd0-4a6399081067": {
        "type": 2,
        "question": "ATU平台监控发现ATU设备处于在线状态但提示“无GPS信息”的原因",
        "answers": ["ATU设备充电线连接不稳", "ATU设备GPS模块故障", "WEB服务器问题导致显示异常", "ATU设备处于在隧道或室内", "ATU设备温度过高"]
    },
    "e189be05-5619-4114-b873-ba216959ec82": {
        "type": 1,
        "question": "DUMeter软件在路测中主要作用是( )。",
        "answers": "L3平均吞吐量统计"
    },
    "846aee11-6a59-481a-8b87-78371c7ede0e": {
        "type": 1,
        "question": "根据以往的经验，簇的数量应根据实际情况，( )个基站为一簇，不宜过多或过少。",
        "answers": "15-25"
    },
    "2a4314f1-3a36-45ee-bf33-c0a370972690": {
        "type": 2,
        "question": "LTE测试衡量覆盖和信号质量的基本测量量有哪些？",
        "answers": ["RSRP", "SINR"]
    },
    "ee75e477-2d8c-4ebc-b1d7-2bdffe63ceb9": {
        "type": 1,
        "question": "考虑到干扰控制，城区三扇区站水平波束宽度一般不大于",
        "answers": "65°"
    },
    "e54c57d7-48b4-4f86-a49e-d578c598ecd5": {
        "type": 1,
        "question": "以安利的MT8222B扫频仪为例，trace模式设置为normal是什么含义",
        "answers": "在一次扫描周期内把得到的每个频率的电平强度显示出来，每一次扫描刷新一次，保持实时刷新的状态"
    },
    "03d0596b-8f45-43a4-8792-8cd5a0ae6fd9": {
        "type": 1,
        "question": "下列哪一种干扰是由于受扰系统的设备性能指标不合格导致的",
        "answers": "阻塞干扰"
    },
    "47dfa993-ce4f-4b40-b661-30c47237a97c": {
        "type": 2,
        "question": "底噪计算公式包含哪几个因素",
        "answers": ["平均热噪声", "噪声系数", "RBW"]
    },
    "d6d0fcf3-9395-4ef0-8b82-24b4ed57b45c": {
        "type": 1,
        "question": "性能查询的时间段在下列哪个标签页进行设置（）",
        "answers": "其他设置"
    },
    "adc91132-218c-4733-bb9b-4ff2c05e2815": {
        "type": 1,
        "question": "提取性能指标时，指标的时间颗粒度在下列哪个标签页进行设置（）",
        "answers": "指标设置"
    },
    "d752f367-c558-4699-ad33-82365f8a3b86": {
        "type": 1,
        "question": "华为U2000对于自定义性能指标的启动测量方式是以下哪种（）",
        "answers": "配置完性能指标再配置测量"
    },
    "deaeaf9e-5286-4036-96ff-4ee6a7fdbb38": {
        "type": 1,
        "question": "U2000的自定义性能指标在哪个功能菜单下面（）",
        "answers": "性能"
    },
    "fc9cc640-9860-404a-a97c-ebfccf86e20a": {
        "type": 1,
        "question": "华为U2000网管支持下列那个键批量选择查询基站（）",
        "answers": "shift"
    },
    "eb0be5e5-a631-4991-9787-a41eaf201d69": {
        "type": 2,
        "question": "性能测量的三个基本要素（）",
        "answers": ["性能测量指标", "性能测量对象", "性能测量周期"]
    },
    "446c5874-4a3a-4c38-8bb2-776fd4540887": {
        "type": 2,
        "question": "可通过下列哪些标签页对测量指标进行定制（）",
        "answers": ["对象设置", "指标设置", "其他设置"]
    },
    "6493f460-02a2-42e1-8678-ca384765533a": {
        "type": 1,
        "question": "___反映小区对UE呼叫的接纳能力，直接影响用户对网络使用的感受:",
        "answers": "无线接通率"
    },
    "565ad410-0784-4057-90e8-ac84e16085e3": {
        "type": 1,
        "question": "目前阶段，LTE系统内的切换是基于:",
        "answers": "RSRP"
    },
    "fcf9c6e0-7a92-4f38-bd21-bf61bcae3b1a": {
        "type": 1,
        "question": "关于高流量节日保障小区的定义正确的是（）",
        "answers": "无线利用率≥50% & RRC连接数≥300的小区"
    },
    "c0f0a042-f547-4d65-90eb-7ef4a2a436c2": {
        "type": 1,
        "question": "对于低流量小区，以下说法正确的是（）",
        "answers": "城区网格区域内的小区连续7天每天流量都低于100MB"
    },
    "4ae36dcd-5c73-4657-9ec4-bbbb89a6cc06": {
        "type": 1,
        "question": "高流量感知预警小区是指无线利用率超过（）的小区；",
        "answers": "0.5"
    },
    "fa88c80b-f12b-4eee-8b1c-5dcbe2e936da": {
        "type": 2,
        "question": "切换根据触发原因有哪些类型:",
        "answers": ["基于覆盖的切换", "基于业务的切换", "基于负荷的切换", "基于UE移动速度的切换"]
    },
    "c6a9d608-4bb6-45c0-834c-e7fc9ab78f98": {
        "type": 2,
        "question": "业务相关的RRC连接建立原因包括:",
        "answers": ["MT-Access", "MO-Access"]
    },
    "d658ede7-4cd4-4290-ae2c-5993caeba61a": {
        "type": 1,
        "question": "天线的VSWR合理的范围为()",
        "answers": "1<VSWR<1.5  "
    },
    "a1f665b4-c896-4b7f-aa67-673d897770c4": {
        "type": 1,
        "question": "E1/T1复帧失步告警会导致",
        "answers": "该E1/T1链路承载的业务中断"
    },
    "5b3789ba-4bfb-45e5-8405-cb2bb99ae31b": {
        "type": 1,
        "question": "如果出现eNB的告警“小区退服，光口不可用”（1018007），不可能是以下哪种原因造成的（）",
        "answers": "基带板上Ir接口光纤收发接反"
    },
    "0febbbe8-8708-42ad-82a4-6bba866f9d71": {
        "type": 1,
        "question": "默认情况下，外部电源告警接到UPEU单板的哪个端口上（）",
        "answers": "EXT-ALM0"
    },
    "dacfbe42-9235-423b-92c1-e6a573787892": {
        "type": 1,
        "question": "天馈严重驻波比告警是指驻波比值（）",
        "answers": ">3.0"
    },
    "6d4756e4-6718-4d63-b560-822df7b7e109": {
        "type": 1,
        "question": "BTS3900中那块单板提供告警监控接口（）",
        "answers": "UPEU"
    },
    "3ad16073-8b19-4ef8-b639-02bfffdf7c9b": {
        "type": 2,
        "question": "华为小区服务能力下降告警产生原因包括",
        "answers": ["当前小区需要重建到另外一块基带板，目标基带板的基带资源不允许该小区按照原规格重建", "多模场景下由于共享资源受限（如频率、功率），导致部分天线资源分配失败，引起小区降规格，产生此告警", "多BBU互联场景下，不同BBU上的CaGroupCell配置不一致导致CA工作不正常，产生此告警", "当基站射频资源或基带资源不能满足当前小区的配置规格或CA业务配置异常时，产生此告警"]
    },
    "b14d58fc-248f-48f2-ae8b-e327e664657b": {
        "type": 2,
        "question": "在华为网管监控菜单中可查询LTE告警包括",
        "answers": ["查询告警日志", "查询历史告警", "浏览当前告警"]
    },
    "2d5b6987-4c45-45c7-ac4a-4071b23ee884": {
        "type": 2,
        "question": "关于双模基站告警上报，以下说法正确的是（）",
        "answers": ["支持对公共告警按整站进行告警的确认，清除", "公共告警双边上报，单制式告警分别上报，互不影响。"]
    },
    "63b27dd2-3508-4704-9f0b-1753f763063b": {
        "type": 1,
        "question": "一条SCTP记录，最多可配置( )条SCTP流信息?",
        "answers": "6"
    },
    "087b31da-980a-4ea0-9535-7d44392724a4": {
        "type": 1,
        "question": "在LTE系统内，移动性测量的事件有多少种()",
        "answers": "5"
    },
    "b6c300ec-304d-4cc4-ae4c-0e68f47bf07a": {
        "type": 1,
        "question": "以下哪种QCI业务的优先级最高_？",
        "answers": "QCI=5"
    },
    "6229d770-5e05-4bb6-a351-25665c396610": {
        "type": 1,
        "question": "一个资源块在时域上对应于一个时隙，在频域上对应于？",
        "answers": "180kHz"
    },
    "e2300e30-75ea-47a7-ba19-3e6bc37e2559": {
        "type": 1,
        "question": "小区范围内的过载指示在（）接口进行交换，用于小区间功率控制？",
        "answers": "X2"
    },
    "26ed82d6-32f2-4758-a279-4f8f0cf0520d": {
        "type": 1,
        "question": "UE检测到主同步序列x和辅同步序列y后，如何得到PCI（）",
        "answers": "x+3y"
    },
    "dd28a6ec-38fd-48a5-86d0-2336c4b63f13": {
        "type": 2,
        "question": "LTE 中的上下行分别用什么HARQ 协议？",
        "answers": ["下行用异步自适应HARQ", "上行用同步HARQ"]
    },
    "f8c2ba72-c6de-41c4-9b7f-2a7d1aa6c89c": {
        "type": 2,
        "question": "信道编码方式由下列哪些步骤组成?",
        "answers": ["错误检测", "信道映射/分离", "交织", "错误纠正", "速率匹配"]
    },
    "0eed9fc4-fb8c-46c7-a039-e7c08b497a4a": {
        "type": 2,
        "question": "哪些RRC层信令用于承载NAS信令（）？",
        "answers": ["RRCConnectionSetupComplete", "ULinformationTransfer", "DLinformationTransfer"]
    },
    "cf354424-3532-4252-9307-7b59cd7cc217": {
        "type": 1,
        "question": "关于空闲态小区重选对现有2/3G网络及用户体验的影响，下面说法错误的是（ ）",
        "answers": "执行重选时对用户拨打电话没有影响"
    },
    "8c6d4abd-2e27-4c5f-bb09-3a3f59d98f2b": {
        "type": 1,
        "question": "以下（）TDLTE的业务类型，其macMIMOModeDl必须设置为mimoTwoLayersNotAllowed",
        "answers": "QCI1"
    },
    "5664bc4c-f71f-4d4e-be09-014eb717ef5d": {
        "type": 1,
        "question": "针对TDD小区单验时，有效初传数据的最大MCS数是多少",
        "answers": "28"
    },
    "223d0065-0296-4721-95c5-e0bf17fe27f8": {
        "type": 1,
        "question": "路测软件主要采集分析()的信令",
        "answers": "Uu接口；"
    },
    "2cb9dcac-4409-4a69-a2de-43b587fb123a": {
        "type": 1,
        "question": "在对路测数据的分析操作中，（）是一个很重要的功能，通过该功能，分析人员可以再现路测时的情况，帮助分析无线网络中存在的问题:",
        "answers": "回放"
    },
    "7e6def0c-2e83-45f2-9d1a-e327b3198ef5": {
        "type": 1,
        "question": "TDLTE的UE的小区重选的S法则要求小区满足（ ）",
        "answers": "Srxlev > 0 dB"
    },
    "1c9a07ae-919b-42a4-aa3a-704ad8769ded": {
        "type": 2,
        "question": "以下哪几个场景容易产生导频污染：",
        "answers": ["高架桥或者高层建筑", "十字路口", "水面、桥面"]
    },
    "01a953a5-46da-4a69-a71c-f27c266809ee": {
        "type": 2,
        "question": "RRC_IDLE状态下UE的行为有",
        "answers": ["PLMN选择", "NAS配置的DRX过程", "邻小区测量"]
    },
    "169a5484-806d-4fc9-a99f-3665714b3356": {
        "type": 2,
        "question": "下列会影响LTE用户吞吐率的因素有",
        "answers": ["链路自适应算法", "UE等级", "多用户调度算法", "SINR"]
    },
    "750b53ea-1ad0-4b43-b0b2-9dbc9798dbd5": {
        "type": 1,
        "question": "下列哪条命令是用于查询单板的电子标签（ ）",
        "answers": "DSP BRDMFRINFO"
    },
    "6900b6eb-e886-4287-8473-053f0f49e305": {
        "type": 1,
        "question": "查询小区状态的MML命令（）",
        "answers": "DSP CELL"
    },
    "34b65c23-3240-4202-b7af-e35f7fdf79e2": {
        "type": 1,
        "question": "当网元测量结果遗失时，通过哪个操作对遗失数据进行补采（ ）。",
        "answers": "结果同步"
    },
    "d86166d5-1d0c-48dc-b48b-de354a6c6ebc": {
        "type": 1,
        "question": "通过以下哪条命令可以查询S1接口信令链路是否正常？（  ）",
        "answers": "DSP S1INTERFACE"
    },
    "7892fd78-c95c-4e44-9eee-b49f677ba40a": {
        "type": 1,
        "question": "下列哪条命令可以查询光模块的传输模式（    ）",
        "answers": "DSP SFP"
    },
    "d0d89092-23f6-4b0f-8f66-7ce54e28af76": {
        "type": 1,
        "question": "通过以下哪条命令可以查询操作维护通道是否正常？（  ）",
        "answers": "DSP OMCH"
    },
    "4093f1f2-aee3-4a8e-a362-b1a5c237a841": {
        "type": 2,
        "question": "下列哪些情况下需要近端登陆eNodeB(    )",
        "answers": ["当eNodeB开站，在eNodeB与M2000传输未到位时", "当eNodeB与M2000之间通信中断时", "当eNodeB产生告警，需要在近端更换单板等操作时"]
    },
    "397d5cb5-7d0a-4c4b-9a89-95ef1880b15b": {
        "type": 2,
        "question": "eNodeB的信令跟踪功能可以跟踪下列哪些接口信令。（   ）",
        "answers": ["S1", "X2", "Uu"]
    },
    "4be3d1dc-90aa-40fd-b62c-5c2c6112f98d": {
        "type": 2,
        "question": "进行驻波比测试时，使用MML命令（    ）。",
        "answers": ["STR VSWRTEST", "DSP VSWR"]
    },
    "7f814213-8f50-4998-b133-b9ce88070784": {
        "type": 1,
        "question": "TDLTE小区中，以下参数（）是TM3和TM8的转换门限",
        "answers": "dlSINRThresholdbetweenRank2BeamformingAndTM3"
    },
    "50712d2d-ca5d-4caa-bcd1-8a9e8fa0a230": {
        "type": 1,
        "question": "以下哪个参数用来控制周期性位置更新的周期大小（  ）。",
        "answers": "T3212"
    },
    "cd587adf-66a0-4afc-bebb-13b3218303c7": {
        "type": 1,
        "question": "PHICH持续时间模式对应的参数是什么",
        "answers": "PhichDuration"
    },
    "04c6cec1-30e3-4c09-b60f-58dc1bcebe60": {
        "type": 2,
        "question": "为有效支持Localized、Distributed和MIMIO传输，E-UTRA支持的CQI报告包括()",
        "answers": ["宽带类型", "多频带类型", "MIMO类型"]
    },
    "58050b00-b615-4fe0-bd77-35ff7769c616": {
        "type": 1,
        "question": "对于以下LTE邻区规划，描述不正确的是（）",
        "answers": "ANR功能可以完全取代初始网络的邻区规划"
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
