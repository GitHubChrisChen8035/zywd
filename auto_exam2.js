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
    "1653c6b5-d3e8-4233-88e4-ca4ac85023a9": {
        "type": 1,
        "question": "IDS系统中（ ）部件分析得到的数据，并产生分析结果",
        "answers": "事件分析器"
    },
    "84c0945b-35d3-4152-8020-816e68695a99": {
        "type": 1,
        "question": "下列哪些攻击方式能躲避IDS的检测（）",
        "answers": "\n0day攻击"
    },
    "bfcda772-c5cc-45bf-8fbf-84edb3c3b159": {
        "type": 1,
        "question": "IPS预警阀值过载时，应该采取哪种防御措施？",
        "answers": "将贝叶值调至最高"
    },
    "d069f9e7-63af-47e3-939d-acf7b860c9d5": {
        "type": 1,
        "question": "安全管控平台的绕行统计是通过什么方式实现的",
        "answers": "\nSYSLOG日志"
    },
    "16dbca00-3d5b-4098-8b4d-0073807d12e6": {
        "type": 1,
        "question": "管控平台可以记录（）",
        "answers": "\n所有通过管控平台登陆设备的操作过程"
    },
    "1d4d737a-bf7d-4868-8c2c-4e4a3d059866": {
        "type": 1,
        "question": "在集团要求各省的账户命名规范的格式为：XXX+连接符+AA，其中的连接符代表：",
        "answers": "_"
    },
    "5af40655-cef0-485c-a98d-93ac8609df7a": {
        "type": 1,
        "question": "Linux中哪些无关账号需锁定",
        "answers": "\n以上都是"
    },
    "0b8a4716-0f80-4b91-95c3-64a851cc3929": {
        "type": 1,
        "question": "以下哪些属于防火墙策略核查范畴",
        "answers": "\n以上都是"
    },
    "b842df01-6e2e-493f-bd57-461a758d8f45": {
        "type": 1,
        "question": "关于弱口令核查说法正确的为",
        "answers": "\n以上都是"
    },
    "b151a58d-6b96-4ea5-bcd5-7eb22c9b9d70": {
        "type": 1,
        "question": "采用静态口令认证的设备，用户不能重复使用最近（）次（含）内已使用的口令",
        "answers": "\n5"
    },
    "2b722d9d-dd92-4cf8-b6a9-a795de24341d": {
        "type": 1,
        "question": "关于防火墙的描述不正确的是",
        "answers": "\n防火墙可以防止伪装成外部信任主机的IP地址欺骗"
    },
    "fc70bb3c-2ec8-4a06-b739-540d6acdb73f": {
        "type": 1,
        "question": "以下不是防火墙的缺点和不足的是（）",
        "answers": "\n防火墙可以阻止内部主动发起连接的攻击"
    },
    "182603ce-f477-4950-a05f-c7532c41b575": {
        "type": 1,
        "question": "按照检测数据的来源可将入侵检测系统（IDS）分为",
        "answers": "基于主机的IDS和基于网络的IDS "
    },
    "ba0834c5-2466-4b61-813a-949dcb254bfe": {
        "type": 1,
        "question": "IP网络的安全威胁有两个方面：（）",
        "answers": "\n一是主机的安全，二是网络自身的安全"
    },
    "94b85950-d7a9-43ba-88a8-84e997c52578": {
        "type": 1,
        "question": "防火墙中地址翻译的作用的什么",
        "answers": "\n隐藏内部网络地址"
    },
    "bbdfb5c6-f04e-4793-96e6-e0e306368be6": {
        "type": 1,
        "question": "如果你怀疑一个黑客已经进入你的系统，要分析当前形势你首先采取的过程，同时采取一些有效的措施，这些措施不包括",
        "answers": "\n直接断开电源"
    },
    "a8bb22c5-884c-4c02-8e40-24b68e894f52": {
        "type": 1,
        "question": "以下哪项不是常见网络设备主要的安全风险？",
        "answers": "\n产品过保质期"
    },
    "55de38a9-b7a5-4668-9c67-b0f18fe13ca9": {
        "type": 1,
        "question": "以下那些是常见主机的主要安全风险？",
        "answers": "以上都是"
    },
    "8607f690-c650-4000-9339-08a119854eb3": {
        "type": 1,
        "question": "反向连接后门和普通后门的区别是()",
        "answers": "主动连接控制端、防火墙配置不严格时可以穿透防火墙"
    },
    "beae400d-82af-4db3-826f-3f04a475ef45": {
        "type": 1,
        "question": "网络安全日常工作落实包括",
        "answers": "\n以上都包括"
    },
    "dfe21e64-7a4d-4bdd-94f2-2faf5d81c7cb": {
        "type": 1,
        "question": "以下不能作为部门已配备专职网络安全人员的证明材料是",
        "answers": "\n正式的工位"
    },
    "552eaed8-4ab4-49ac-ae62-8aa1fb837337": {
        "type": 1,
        "question": "以下哪种安全威胁在IDC、DNS、CMNET和网厅等4种网络单元中均需要具备安全监测能力",
        "answers": "\n防入侵"
    },
    "e7787db6-6734-42c2-a868-b7e3e2c65b63": {
        "type": 1,
        "question": "通讯网络安全防护工作依据的最主要政策文件是",
        "answers": "\n工业信息化部第11号令《通信网络安全防护管理办法》"
    },
    "21c88b04-c060-46a2-9d38-fad7ccde7f51": {
        "type": 1,
        "question": "等保分为几级？",
        "answers": "\n5"
    },
    "af301d47-9bc1-44d2-9d88-cc9aa80f6326": {
        "type": 1,
        "question": "防火墙配置有三种：（）。",
        "answers": "\n以上均是"
    },
    "a9b52068-72e9-4030-b3a4-29703d8e7dec": {
        "type": 1,
        "question": "在中国移动安全要求框架第三层面中，通常由哪几类安全要求组成？",
        "answers": "\n以上都是"
    },
    "162e87af-5ded-4e3f-889f-2bcae6326287": {
        "type": 1,
        "question": "下列关于口令安全要求描述错误的是？",
        "answers": "\n应支持口令始终生效的要求"
    },
    "cb9de7e0-3cf0-4117-962a-ab25849a9ad7": {
        "type": 1,
        "question": "Windows的主要日志不包括（）",
        "answers": "\n失败登录请求日志"
    },
    "c07f02f6-0cf3-4336-bb9c-aa53daae9815": {
        "type": 1,
        "question": "包过滤防火墙对信息流不检测的信息有（）",
        "answers": "\n连接状态信息"
    },
    "c49d3bac-bd1a-4911-9e45-e7cff11b7a97": {
        "type": 1,
        "question": "在oracle数据库里面检查审计配置的命令是（）",
        "answers": "show parameter audit_trail;"
    },
    "5a10cf64-1a48-40b6-8bcc-7f4426980999": {
        "type": 1,
        "question": "Windows系统基本命令中的“命令模式”的指令是（）",
        "answers": "\ncmd"
    },
    "e00ff711-e267-4163-9609-d4504c5b5cb5": {
        "type": 1,
        "question": "Windows系统基本命令中的“网络连接状态命令”的指令是（）",
        "answers": "\nnetstat"
    },
    "68f5b4f5-0770-48e6-a9fa-c1b26f6ae0ee": {
        "type": 1,
        "question": "Windows系统基本命令中的“IP状态参数”的指令是（）",
        "answers": "ipconfig"
    },
    "1bf6136b-362e-4d34-bd0a-837b65ab18dd": {
        "type": 1,
        "question": "Linux系统基本命令中的“查看系统进程”的指令是（）",
        "answers": "ps"
    },
    "9b48d162-d7d0-47dc-9646-77391a657288": {
        "type": 1,
        "question": "SQL注入是指由于()",
        "answers": "\n恶意用户通过提交特殊的参数从而达到获取数据库中存储的数据、得到数据库用户的权限"
    },
    "5eaca5e5-0365-4458-a43e-a675f0fd58e6": {
        "type": 1,
        "question": "恶意代码类安全事件是指（）",
        "answers": "\n恶意用户利用病毒、蠕虫、特洛伊木马等其他恶意代码破坏网络可用性或窃取网络中数据"
    },
    "466e6d21-7ffa-4f5c-9d4b-fc34b1f94c0e": {
        "type": 1,
        "question": "操作误用类安全事件是指（）",
        "answers": "\n合法用户由于误操作造成网络或系统不能正常提供服务"
    },
    "e98447ec-5f77-44b9-a114-a28b82a1ac0c": {
        "type": 1,
        "question": "外单位人员进入机房需申请“机房出入证”，（），原则上需由当地公司相关部门人员陪同，相关部门须对外单位人员在通信机房的行为负全责。安全主管部门负责审核机房的出入人员的资格，管理“机房出入证”。",
        "answers": "一人一证"
    },
    "7b915dfa-4709-4c73-abfb-a92f788d65e3": {
        "type": 1,
        "question": "以下属于客户通信内容信息的有（）",
        "answers": "\n以上都是"
    },
    "aa79bfc6-8354-40cb-a3e4-ee82b1eb97c1": {
        "type": 1,
        "question": "对于重要的敏感数据应使用（）算法加密",
        "answers": "\nAES"
    },
    "d181bcec-89fc-4f94-97c0-77ddc017eba3": {
        "type": 1,
        "question": "热消磁技术的优点是（  ），缺点是需要的额、温度较高，硬件成本比较高。",
        "answers": "\n消磁速度快"
    },
    "a9f9e24c-3501-4938-aef3-8242beeeeaca": {
        "type": 1,
        "question": "以下哪种数据销毁技术具备设备简单，体积小，成本低，使用方便的特点（ ）。",
        "answers": "直流消磁法"
    },
    "00236c12-bfd6-4ef2-9cdb-179096bd97ec": {
        "type": 1,
        "question": "用户访问控制，有集中4A管控、角色与权限、（  ）、口令管理等措施",
        "answers": "\n账号与授权 "
    },
    "fe01f541-dbab-4a5b-896c-c370ee10c7e2": {
        "type": 1,
        "question": "客户信息模糊化处理要求中客户通信内容信息的模糊化原则为允许使用客户（  ）以前的客户消费信息数据。",
        "answers": "\n6个月"
    },
    "ad7c4a7c-ea21-4059-b162-06a3fd11f3b5": {
        "type": 1,
        "question": "以下哪种设备所存储的数据销毁难道最小（）",
        "answers": "\nU盘"
    },
    "fcfd3eb0-4a61-4f2a-8406-8877a95280d6": {
        "type": 1,
        "question": "哪种数据销毁技术对数据的屋里层面产生了影响（    ）",
        "answers": "\n低级格式化"
    },
    "38f5aca5-7a16-4d54-a65f-5ee03a8e2d98": {
        "type": 1,
        "question": "在采用中国移动设备框架规范时，应当遵循（）的原则。",
        "answers": "全面、唯一"
    },
    "3b40471a-6217-476f-81fd-cffa86262b4f": {
        "type": 1,
        "question": "账号管理及认证授权要求中认证功能主要用于确认登录系统的用户真实身份，必要时可以采取（）。",
        "answers": "\n访问控制机制"
    },
    "bda743b7-64c8-477a-9cb2-e70fad8202df": {
        "type": 1,
        "question": "账号管理及认证授权要求中授权功能主要指赋予系统账号的（），如有需要，尽量将权限设置为“最小化”即“合法用户接入合法网络或资源”。",
        "answers": "\n操纵权限"
    },
    "e2d2cc61-fd42-4c01-a191-ef69cb154aae": {
        "type": 1,
        "question": "AAA级业务同一专线故障重复发生次数指标要求为",
        "answers": "\n≤2次/年"
    },
    "adfe057b-8c70-4368-819b-f47029c8bd9c": {
        "type": 1,
        "question": "AA级业务同一专线故障重复发生次数指标要求为",
        "answers": "\n≤3次/年"
    },
    "e86aa6e3-53b0-4048-a6cf-40453487eebd": {
        "type": 1,
        "question": "普通级业务同一专线故障重复发生次数指标要求为",
        "answers": "\n≤4次/年"
    },
    "dd9d00e5-e17d-4b04-8b51-5d424069e905": {
        "type": 1,
        "question": "AAA级业务同一专线年业务中断历时指标要求为",
        "answers": "\n≤3小时"
    },
    "0cd649a9-683b-4502-9068-f75554acdc4a": {
        "type": 1,
        "question": "AA级业务同一专线年业务中断历时指标要求为",
        "answers": "\n≤6小时"
    },
    "29238bd5-f3f9-4e79-a8a6-f4f63f94a7c8": {
        "type": 1,
        "question": "A级业务同一专线年业务中断历时指标要求为",
        "answers": "\n≤12小时"
    },
    "d6f9cca5-07e6-428d-9425-d86b1d121a4a": {
        "type": 1,
        "question": "输入输出端口（Input/Output,I/O): I/O端口就是数据进出路由的接口，可以使用Cisco命令",
        "answers": "Show Interface"
    },
    "341c5d76-dcb5-4362-9909-b2b13e4314ce": {
        "type": 1,
        "question": "交换机工作在OSI七层的哪一层？",
        "answers": "\n二层"
    },
    "417a70fb-02bc-49ca-88bf-ad03ce7d478f": {
        "type": 1,
        "question": "通过console口管理交换机在超级终端里应设为",
        "answers": "波特率：9600  数据位：8  停止位：1   奇偶校验：无"
    },
    "0ee56b29-6634-4018-bf7f-af50072a2091": {
        "type": 1,
        "question": "BGP直接承载于以下哪种协议之上",
        "answers": "TCP"
    },
    "95023905-40f5-4e44-b6c4-d9ae782718a6": {
        "type": 1,
        "question": "在BGP路由协议中，命令aggregate 10.110.0.0 255.255.0.0 origin-policy 的含义是",
        "answers": "\n当通告路由时通告聚合路由和部分符合过滤条件的参与聚合的具体路由"
    },
    "658d6bae-619f-46a2-941a-b156f35eda1f": {
        "type": 1,
        "question": "在RIP协议中，计算metric值的参数是",
        "answers": "路由跳数"
    },
    "957391b1-f577-45fb-9059-b4de5fa4d5c8": {
        "type": 1,
        "question": "在RIP协议中，将路由跳数（）定为不可达",
        "answers": "\n16"
    },
    "a032ae1a-8633-48c9-adc2-41f497216b13": {
        "type": 1,
        "question": "RIP是在（）之上的一种路由协议",
        "answers": "\nUDP"
    },
    "92e3e67d-f97b-4da4-ac38-3168ef7a107f": {
        "type": 1,
        "question": "OSPF协议以（）报文来封装自己的协议报文，协议号是89。",
        "answers": "IP 报文"
    },
    "00e03835-f540-478e-a1b0-7c9f224006e8": {
        "type": 1,
        "question": "PING 主机202.38.160.2 成功，路由器应出现",
        "answers": "Reply from202.38.160.2 ......"
    },
    "16333a25-3073-4e2b-931c-4e641b9e430a": {
        "type": 1,
        "question": "如下访问控制列表的含义是：（）\naccess-list 100 deny icmp  10.1.10.10   0.0.255.255  any host-unreachable\n",
        "answers": "\n 规则序列号是100，禁止从10.1.0.0/16网段来的所有主机不可达报文"
    },
    "b918086a-d9ff-4668-8082-006e63c1c9dd": {
        "type": 1,
        "question": "路由器上（ ）不能作为其它接口或逻辑通道的备份接口。",
        "answers": "\nETH口"
    },
    "07869d7a-fe37-420d-8963-93c4b73796ba": {
        "type": 1,
        "question": "两台Quidway路由器之间通过两个串口（Serial 0、Serial 1）运行MP协议进行互连，则关于Serial 0口的配置，下面____ _不是必须配置的。（）",
        "answers": "IP 地址"
    },
    "d435dad6-a4a0-4d1d-9ae6-85551c59ee97": {
        "type": 1,
        "question": " 小于（  ）的端口号已保留与现有服务一一对应，此数字以上的端口号可自由分配。",
        "answers": "\n1024"
    },
    "4dcf5abf-7ab6-47f8-9614-3484e30c3674": {
        "type": 2,
        "question": "当企业网络遭受拒绝服务攻击时，可能会出现哪些现象（）",
        "answers": ["数据接收延迟", "\nPing服务器出现丢包", "\n访问Web资源较慢"]
    },
    "3e5309fa-abc1-4e1d-8b64-98238293eab8": {
        "type": 2,
        "question": "4A系统是什么？",
        "answers": ["管控平台的缩写", "\n对设备和应用的帐号、登录、授权和审计进行集中管控的IT系统。"]
    },
    "de4ab25c-a1a7-40e6-b637-cb45e2f6a44b": {
        "type": 2,
        "question": "4A系统管控的对象",
        "answers": ["\n数据库", "\n应用资源", "系统资源", "\n主机"]
    },
    "03af9961-b02f-4569-ad68-9504e567b5b5": {
        "type": 2,
        "question": "管控平台从账号是什么？",
        "answers": ["\n4A系统管控的设备和应用系统的帐号，如Unix的root帐号等", "\n接入管控平台的数据库账号如sys账号等"]
    },
    "605ac21d-7486-4693-8801-1f5fa5d202dd": {
        "type": 2,
        "question": "管控平台有哪几种认证方式",
        "answers": ["短信认证", "\n静态密码认证", "\n票据认证"]
    },
    "2341cf2c-55ac-4343-81ab-7ea4b43f2e39": {
        "type": 2,
        "question": "防火墙的一般部署方法包括",
        "answers": ["串联部署", "\n透明部署"]
    },
    "17b02f34-2cb5-43bf-b993-a149644ff676": {
        "type": 2,
        "question": "防火墙的作用",
        "answers": ["\n记录通过防火墙的信息内容和活动", "\n封堵某些禁止的行为", "过滤进出网络的数据", "\n管理进出网络的访问行为"]
    },
    "28b47ca2-db73-4e09-9bec-0663502925e3": {
        "type": 2,
        "question": "入侵检测系统的作用包括：",
        "answers": ["监控网络和系统", "\n实时报警", "\n审计跟踪"]
    },
    "49a49620-09ba-4a94-b454-2fdd403fef4d": {
        "type": 2,
        "question": "下列对于安全配置规范中授权要求描述正确的是？",
        "answers": ["\n对于用户可通过人机交互界面访问文件系统的设备，设备应支持对文件系统中的目录和文件，给不同用户或用户组分别授予读、写、执行权限。", "设备应支持对不同用户授权不同的权限即人权分离", "\n对于存在关系型数据库的设备，设备应支持对数据库表，给不同数据库用户或用户组分别授予读取、修改的权限。", "\n在设备权限配置能力内，根据用户的业务需要，配置其所需的最小权限。"]
    },
    "93ad3029-e404-4a61-8c36-a3477328fd96": {
        "type": 2,
        "question": "防病毒软件能做到的是",
        "answers": ["\n检查计算机是否染有已知病毒，并作相应处理", "\n查出计算机已感染的已知病毒，消除其中的一部分"]
    },
    "eab40f78-8c62-43fc-8553-8dc1cefa7dab": {
        "type": 2,
        "question": "用户访问控制手段一般有（）",
        "answers": ["\n账号授权控制", "\n口令管理", "集中4A管控", "\n角色与权限控制"]
    },
    "ca4951eb-4037-48b8-9b29-352a4724c562": {
        "type": 2,
        "question": "以下属于客户信息保护操作手段的有（）",
        "answers": ["\n防泄密系统", "\n客户信息模糊化", "\n日志管理与审计", "金库模式"]
    },
    "44babca4-1b68-41c3-8073-698f76f1ae4a": {
        "type": 2,
        "question": "处理较为重要的敏感数据的方法有（）",
        "answers": ["使用操作系统命令删除数据", "\n格式化硬盘", "\n使用数据粉碎软件"]
    },
    "b12ba54b-7881-4335-9f13-4db9e738a9fa": {
        "type": 2,
        "question": "选择口令的原则？",
        "answers": ["\n不要选择简单字母组成的口令", "\n 采取数字混合并且易于记忆", "\n 不要选择可以在任何字典或语言中找到的口令", "严禁使用空口令和与用户名相同的口令"]
    },
    "fd5ea21f-fe3a-4bf9-9290-dd6cb6fb161c": {
        "type": 2,
        "question": "以下密码属于弱口令的是？",
        "answers": ["\npassword", "admin", "\n123456", "\nabc23"]
    },
    "62834f73-928f-4450-b2ec-a16a6293260b": {
        "type": 2,
        "question": "数据专线验收测试记录表（互联网接入类）中，需要测试的项目包含下面哪些项",
        "answers": ["\n网站浏览", "\n带宽", "平均时延", "\n丢包率"]
    },
    "2e296161-d28d-47d3-a833-8f22055f12ae": {
        "type": 2,
        "question": "数据专线验收测试记录表（电路租赁类），在测试“平均时延”时，测试标准涉及到下面哪两种大小的数据包",
        "answers": ["64字节数据包", "\n1518字节数据包"]
    },
    "418bd377-c694-4ae9-90d9-40ba63b8f051": {
        "type": 2,
        "question": "数据专线验收测试记录表（互联网接入类），在测试“丢包率”时，下面哪几项指标是作为测试标准",
        "answers": ["对于接入网关：丢包率＝0%", "\n对于互联网网站：丢包率≤1%"]
    },
    "b16dff9d-8390-4d1f-af7c-93b10cf8b27f": {
        "type": 2,
        "question": "数据专线验收测试记录表（互联网接入类），在测试“平均时延”时，下面哪几项指标是作为测试标准？",
        "answers": ["\n对于接入网关：平均时延≤50MS", "\n对于互联网网站：平均时延≤100MS"]
    },
    "80634ad7-9cfb-4057-92d3-402761136257": {
        "type": 2,
        "question": "属于VLAN优点的是",
        "answers": ["\n增强网络的安全性", "\n隔离用", "广播风暴的控制 户组", "\n无须考虑用户的实际物理位置"]
    },
    "e1d75fbf-4234-4749-b43b-f7e513ffd3ac": {
        "type": 2,
        "question": "安装了10/100M自适应以太网卡的计算机跟LAN交换机（支持自动协商）通过UTP链路连接，在加电以后，链路两端设备将进行自动协商。下面哪些项将作为自动协商的内容？",
        "answers": ["双工模式是全双工还是半双工", "\n工作速率是10M还是100M", "\n是否采用流量控制，如果采用，协商采用的流量控制方式"]
    },
    "47aeba68-ea60-41fd-87bd-c412dc1a3ee4": {
        "type": 2,
        "question": "路由器硬件组成",
        "answers": ["CPU", "\n输入输出端口", "\n内存"]
    },
    "fb27ee37-135d-4546-a981-fb2c93d85de0": {
        "type": 2,
        "question": "路由器采用了以下几种不同类型的内存",
        "answers": ["只读内存(ROM)", "\n非易失性RAM(NVRAM)", "\n随机存取内存(RAM)", "\n闪存(FLASH)"]
    },
    "e968a64e-33b9-427c-8942-475e67a53efb": {
        "type": 2,
        "question": "交换机硬件组成",
        "answers": ["\nFLASH", "\n主处理器", "\n内存", "接口"]
    },
    "8e4609bf-8cb6-4101-9caa-ca4a16f55e75": {
        "type": 2,
        "question": "路由器（交换机）加电启动过程",
        "answers": ["IOS装载完毕，系统在NVRAM中搜索保存的Startup-Config文件，进行系统的配置。如果NVRAM中存在Startup-Config文件，则将该文件调入RAM中并逐条执行。否则，系统进入Setup模式，进行路由器初始配置。", "软件初始化过程。运行ROM中的BootStrap程序，进行初步引导工作。", "系统硬件加电自检。运行ROM中的硬件检测程序，检测各组件能否正常工作。完成硬件检测后，开始软件初始化工作。", "寻找并载入IOS系统文件。IOS系统文件可以存放在多处，至于到底采用哪一个IOS，是通过命令设置指定的。"]
    },
    "e8f465b0-d43f-4d7d-a367-524fcfd33e59": {
        "type": 2,
        "question": "通过配置口访问以太网交换机\n",
        "answers": ["\n终端上显示以太网交换机自检信息，自检结束后提示用户键入回车，直到出现命令行提示符（如>）", "\n键入命令，配置以太网交换机或查看以太网交换机运行状态，需要帮助可以随时键入“?”，", "建立本地配置环境，只需将微机（或终端）的串口通过配置口电缆与以太网交换机的配置口连接。", "\n在微机上运行终端仿真程序（Windows 的超级终端等），设置终端通信参数为：波特率为9600bit/s、8位数据位、1位停止位、无校验和无流控，如图所示。"]
    },
    "26634f2e-99ae-47de-9c89-3002bbdcbe0c": {
        "type": 2,
        "question": "显示交换机初始启动的状态",
        "answers": ["Switch#show version", "\nSwitch#show running-config", "\nSwitch#show interfaces"]
    },
    "a5afda7a-987f-49bb-b4a3-5db805d5264e": {
        "type": 2,
        "question": "路由表中的路由可能有以下几种来源",
        "answers": ["接口上报的直接路由", "\n手工配置的静态路由", "\n动态路由协议发现的路由"]
    },
    "fe710416-cac8-4ee8-80c9-44966d764d7d": {
        "type": 2,
        "question": "以下关于三层交换机（L3）和千兆交换式路由器（GSR）的说法中正确的是",
        "answers": ["路由方面，L3采用的是\"一次慢速路由，多次快速路由\"，GSR则采用最长匹配的方式", "\nGSR支持丰富的域内、域间路由协议，如OSPF、IS-IS、RIPII、BGP等，而L3支持的路由协议一般比较简单", "\n通常L3 只支持GE/FE接口，采用ASIC实现硬件转发，不支持POS和ATM接口，这是L3比GSR廉价的原因之一"]
    },
    "4029a8fe-3ddb-49ac-941b-e2552ee88dae": {
        "type": 2,
        "question": "同一个备份组内 活动路由器,备份路由器各为多少?",
        "answers": ["活动路由器 1 个,  备份路由器 1 个", "\n活动路由器 1 个,  备份路由器多 个"]
    },
    "f440b961-f226-4524-987e-5096d7c48843": {
        "type": 2,
        "question": "中低端路由器都支持哪些隧道协议",
        "answers": ["\nL2TP", "\nGRE", "\nIPSEC"]
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
			console.log(questionId,answerList)
			if (questionsDic1[questionId]['type'] == 1) {

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
					}
					/*左侧list-item改变背景颜色为淡绿。需延迟生效，否则Xpath获取不到元素。原因为：list-item实时监测答案选择情况（已选/未选），并更新元素。无法实现除了“待检查”外的标记，因为元素都是通过XHR从后台获取显示*/


				
		}catch(error){
			console.log("本题无答案")
			//通过点击“待检查”标识无答案题目
			setTimeout(window.onload = function (){
				var item = Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0];  
				if (item){item.click();}
			},1000)
		}
		
		try{
			document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
		}catch(error){}
		
		if (i == questionNum-1 || j == questionNum-1){
			//alert("答题完成，请记住个人码，重新进入考试");
			//window.opener=null;window.top.open('','_self','');window.close();
			//document.getElementsByClassName("text-right")[0].getElementsByClassName("btn")[0].innerText = "我要交卷!";	
			alert("答题完成，感谢使用");
			console.log("答题完毕，感谢使用");
			
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
