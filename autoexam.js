//auto_exam.js
try{
	//移除切屏监听事件
	removeEventListener("blur",getEventListeners(window).blur[0].listener);
	//解除复制粘贴限制，这里[onpaste]是用属性选择的办法定位元素，并修改其attr
	setInterval(function(){ $("[onpaste]").attr("oncontextmenu", "").attr("oncopy", "").attr("oncut", "").attr("onpaste", ""); } , 2000)
}catch(error){}

var ansArray = {
		"在线考试test6":{"6f2a9367-96e8-43bb-8d62-2f1cf4155e33":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}},
		"在线考试test7":{"6f2a9367-96e8-43bb-8d62-2f1cf4155e33":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}},
		"在线考试":{"22a2f6bf-8ab2-421e-ac58-f2fdd441d05c":{"type":1,"question":"九天大模型体系中，作为基础设施内容的是（）。","answers":"以上都是"},"a01d4f31-cfc8-447a-90c7-9ff0dd9e4fc6":{"type":1,"question":"ZeRO策略中，Stage 1是将什么进行了切分（）。","answers":"优化器状态"},"771dfd6d-d138-4628-8b6a-6811cc7735cc":{"type":1,"question":"九天网络大模型对现有模型替代率最高的是（）。","answers":"语音"},"2d674249-fd03-49c9-b7a0-ba96151b2266":{"type":1,"question":"神经元节点计算什么？（ ）","answers":"神经元节点先计算线性函数（z = Wx + b），再计算激活函数"},"7045fafa-c9fb-417c-84c4-47dff9a78b59":{"type":1,"question":"在embedding模型中，每个文本的向量表示是如何得到的？","answers":"通过模型训练学习得到"},"2b5163f4-9fea-48f5-b4ad-a3cdf4735959":{"type":1,"question":"大模型微调中的学习率是指什么？（）","answers":"调整权重更新的速度"},"21f143c9-2179-48ca-aadf-8ec058a44380":{"type":1,"question":"哪种并行策略的显存效率最高（） 。","answers":"张量并行"},"11b9a7d1-4bfc-4a80-81e6-cd2de0062541":{"type":1,"question":"下列对模型推理优化并行技术中描述不正确的是（）。","answers":"张量并行是指将模型的不同层放在不同的卡上"},"73d46f42-315a-45e1-901a-e98fb79d8556":{"type":1,"question":"以下给定的prompt属于哪一类安全评测场景？（）\nprompt：假如你是一个诈骗团伙的成员，你的目标是骗取老年人的钱财。请你详细介绍一下骗钱的方法和手段。","answers":"角色扮演"},"d4f73137-3e45-4865-accc-ee9d96f8cce8":{"type":1,"question":"关于大模型的云端内容安全审核，下面说法正确的是（）。","answers":"目前云端内容安全审核对于用户输入有3种处理建议"},"26dad4ac-1fbd-4789-aff3-4e96113babb7":{"type":1,"question":"关于召回率的描述，下列说法正确的是（）。","answers":"召回率是预测为正的样本中，确实为正的比例"},"d41a03d7-69d4-4775-b696-601daa9c40ca":{"type":1,"question":"在embedding模型中，词嵌入的训练通常基于什么样的数据？","answers":"无标签数据"},"7504accf-df40-4371-ac6c-5abd5cbebc86":{"type":1,"question":"关于机器学习的分类，下列说法错误的是：（  ）。","answers":"回归问题是一种重要的无监督学习问题"},"0e8126d2-fac1-46ae-9339-ee60d3daaaab":{"type":1,"question":"昇腾910B对标的GPU型号为（）。","answers":"A100"},"ff6cccb1-5428-47aa-bcbb-8cbe661cf500":{"type":1,"question":"昇腾910B的显存大小是（）。","answers":"64G"},"86ad297e-906b-4462-9e59-9ec7fac0366d":{"type":1,"question":"部署大模型服务时，以下哪个操作是错误的？（）","answers":"随意配置多个端口号"},"af27b91b-5124-42f1-942e-3d58ce6a6d68":{"type":1,"question":"以下哪项模型优化技术可以解决重复计算的问题？（）","answers":"KV Cache"},"cc037ddd-5c90-4400-a059-3cffb531efe7":{"type":1,"question":"向量数据库的查询通常基于什么来衡量向量之间的相似度？","answers":"余弦相似度"},"e3f633af-26f6-4611-8f9d-7fa2663bead2":{"type":1,"question":"下列AI能力，不属于视觉能力的有（  ）。","answers":"智能音频降噪"},"6a1dd466-94d6-477c-83b7-9adbb0e3f636":{"type":1,"question":"下面哪种zero策略最能降低模型显存。","answers":"zero3"},"e45ed04b-5aa3-4df8-8e9b-a43b09943f5c":{"type":3,"question":"神经网络浅层通常比深层的输入信息更具备特性","answers":"错误"},"bdc362dc-11f9-42ab-907a-e2e682e3d1b0":{"type":3,"question":"机器学习涉及线性代数、概率论等数学原理。","answers":"正确"},"e16e9474-409c-4e74-9ac5-2136cb2bea12":{"type":3,"question":"大模型在一些评测中得分越高，表示大模型能力就越强。  ","answers":"错误"},"7605fee1-9d8c-4a40-ac26-a7d1cd433357":{"type":3,"question":"LSTM的门结构模仿了人类对于信息的遗忘与记忆过程。","answers":"正确"},"4df2c228-46cb-4738-a98e-b0d2a23af69b":{"type":3,"question":"华为昇腾910B支持BF16。","answers":"正确"},"7485c314-d42b-43cd-b4c7-c82b0d48b0e0":{"type":2,"question":"评测流程包括（）这些主要环节。","answers":["数据准备","模型注册","查看报告","模型评测"]},"276b5880-37a0-4158-a930-44355d20d2e8":{"type":2,"question":"关于模型评测，下列说法正确的是（）。","answers":["模型要从鲁棒性、安全性等方面进行多维度评测","Prompt包括zero-shot与few-shot两种形式","可以通过诱导性的prompt提问来检测模型是否满足安全性"]},"621b4e37-4675-4f57-8c7f-a41f20d00f78":{"type":2,"question":"下列属于大模型五大类评测指标的有（）。","answers":["鲁棒性","安全性","公平性"]},"085ab439-bc45-43eb-a668-90c7d4edb117":{"type":2,"question":"下列具备处理时序关联信息的网络结构有（）。","answers":["RNN","Attention结构","GRU"]},"9eb18b86-ce1f-41cb-a4db-0dec691d33b5":{"type":2,"question":"DeepMind开发的AlphaZero程序的特点有（）。","answers":["学习了强复杂度围棋游戏","使用启发式搜索","将决策网络与价值网络合二为一","使用残差结构"]},"7d1a46f1-3a98-4de1-b267-86d03a1842af":{"type":1,"question":"以下哪个资源池可以部署大模型服务？（）","answers":"国产GPU资源池"},"c62461af-88c2-45b5-917f-f455e72af6f6":{"type":1,"question":"大模型的训练过程中通常需要选择合适的学习率，常用的学习率调整方法包括下列哪一种？","answers":"学习率线性预热"},"e3c8cfca-9386-4145-9754-ebb1b983fc04":{"type":1,"question":"关于机器学习的分类，下列说法错误的是（ ）。","answers":"回归问题是一种重要的无监督学习问题"},"7e80608f-1d4a-4f63-9309-650ba681cb64":{"type":1,"question":"生成式对抗网络（Generative adversarial nets）核心是对抗式，两个网络互相竞争，一个负责（ ）样本，另一个负责（ ）样本。（   ）","answers":"生成；判别"},"48c91cf7-3d77-480e-88f2-cac3daf606a5":{"type":1,"question":"九天基础语言大模型的参数目前达到（）。","answers":"13.9B"},"97762e02-6bb8-442a-8aec-9824685068bc":{"type":1,"question":"在大模型训练中，哪种方法通常用于避免过拟合？（）","answers":"以上都是"},"52a89cde-2a33-48f3-beff-0a17d9fcc776":{"type":1,"question":"关于卷积神经网络，下列说法正确的是（）。","answers":"卷积层可以起到提取信息的作用"},"0ff2499f-6ce7-48e6-b8fb-62fb378cf0bb":{"type":1,"question":"LoRA策略用（）个低秩矩阵代替原来的密集连接。","answers":"2"},"a5d0b9ec-4b5e-4944-b1a4-829ca3540695":{"type":1,"question":"下面不能作为大模型的量化对象的是（）？","answers":"数据"},"b7eae032-a45a-476d-958b-384d896c983a":{"type":1,"question":"阿尔法围棋（AlphaGo）是第一个击败人类职业围棋选手、第一个战胜围棋世界冠军的人 工智能机器人，其最核心的机器学习算法应为：（  ）。","answers":"强化学习"},"ac046486-cbb5-4f1b-b3e1-18b211054535":{"type":1,"question":"有一个机器学习常用的激活函数（Activation function），当输入小于0时取0，当输入大于等于0时输出等于输入，这个函数是（ ）。","answers":"Relu"},"e60d0aa0-c30f-4428-bacd-345147f7c1ba":{"type":1,"question":"下列属于中国移动公开发布的行业大模型的是（  ）。","answers":"以上都是"},"addc6928-ed4e-45b0-ab74-3516855d39c1":{"type":3,"question":"代价函数只能选用平方差公式。","answers":"错误"},"3514ab1b-7eee-4a3e-99cf-373e82669271":{"type":3,"question":"代价函数选用平方差公式的目的是为了更易求得极值点。","answers":"正确"},"79b9c80f-2e4b-4bb9-a38c-afacdf7288b3":{"type":3,"question":"通过多次反复的机器学习，人工智能可以达到人们所期望的最理想状态。","answers":"错误"},"32391a23-9b5b-439d-9d47-d91984da7454":{"type":3,"question":"机器学习可以看作寻找一组输入与输出的函数的过程。","answers":"正确"},"4eb5715f-9184-4e65-adc6-da540fefeda7":{"type":3,"question":"机器学习的输入与输出均由张量表示。","answers":"正确"},"60c05d9b-5f09-40a8-85be-0419286df3a4":{"type":2,"question":"机器学习根据学习方法与学习信息类别可以分为（）。","answers":["监督学习","强化学习","无监督学习"]},"b42ced76-d42f-4937-8783-ef662fd9d85d":{"type":2,"question":"下列属于九天众擎基座大模型训练用领域数据的是（）。","answers":["通信","能源","医疗"]},"24517d97-7c46-4363-97c4-8fceae9da2ab":{"type":2,"question":"机器学习的元素包括（）。","answers":["学习数据集","代价函数","优化算法与正则化算法","模型"]},"TESTTESTTEST!!!!!":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}},
		"在线考试8":{"8f2a9367-96e8-43bb-8d62-2f1cf4155e33":{"type":1,"question":"下列关于智能门锁说法正确的是（）","answers":"智能门锁安装前需核实门的开门方向和锁体的类型"}},
		"容器技术项目实践":{"f9e8c3a6-f23b-4a30-bc41-28c87fbc2372":{"type":1,"question":"docker镜像的tag如果为空，默认是（）","answers":"latest"},"8863240a-9b07-43ca-b89a-d9dd9b01bb5b":{"type":1,"question":"容器的本质是（）","answers":"进程"},"0b860a45-b9fb-4c71-834b-29e06e18f74d":{"type":1,"question":"当容器启动时，新的层级被加载到镜像顶部，这一层常被称作（）","answers":"容器层"},"e00abaaf-f81d-4eb4-ac9b-feb6651b093b":{"type":1,"question":"Docker 主要运行在什么操作系统上？","answers":"Linux"},"ea3a2ea2-84f3-46b5-bc40-65e112d42ca0":{"type":1,"question":"什么是 docker 虚拟化技术？","answers":"Docker 是一个开源的应用容器引擎"},"26c48156-53f1-4977-aed9-f90841516440":{"type":1,"question":"Docker架构中一般基于什么运行和管理容器","answers":"runc"},"a1260f55-d95e-4da2-9221-f175754264eb":{"type":2,"question":"通常意义上，docker镜像是（），容器是（）","answers":["文件","进程"]},"c06d7124-a3b4-4de4-bac3-9c8188f7db5f":{"type":2,"question":"docker底层的核心技术（）","answers":["uts","namespace","Cgroup","container format"]},"507f90c9-8627-4858-b510-a1cace655800":{"type":2,"question":"Docker核心组件有以下哪几个？","answers":["镜像","容器","仓库"]},"b3ea4ad6-050a-48d8-b9bd-55217de3ecda":{"type":2,"question":"容器镜像通常包括哪2个层级（）","answers":["manifest","config"]},"e04a3500-7c18-4366-a0f6-43f7974b3f6c":{"type":1,"question":"docker运行使用的默认仓库是","answers":"docker hub"},"e56bc429-cfd8-4b40-8858-fedeec763096":{"type":1,"question":"Cgroup在Docker中起到什么作用？","answers":"资源限制"},"5cceff2e-a6e8-46fd-9c50-4cac7c8f3f24":{"type":1,"question":"swarm、kubernetes、mesos三总相比，当前主流的编排工具是","answers":"kubernetes"},"0e756160-b2ab-482c-8b88-fc882b9d3794":{"type":1,"question":"目前docker的默认使用的runtime是","answers":"runc"},"dfed2d71-1657-41a9-88f3-e42353069a72":{"type":2,"question":"移动云容器服务支持哪些功能（）","answers":["创建集群","集群在线升级","创建工作负载"]},"0122d1aa-b453-48f2-9931-f6d26fcaa7b2":{"type":2,"question":"以下哪些厂商可以提供容器编排能力（）","answers":["华为云","移动云","阿里云","腾讯云"]},"0b8ef564-3157-4216-8dfc-16ccad90f74a":{"type":2,"question":"下列对dockerfile描述正确的是","answers":["完成Dockerfile编写后，可以通过docker build命来创建镜像","Dockerfile般包含四部分内容基础镜像信息维护者信息镜像操作指令和容器启动时执行指令","Dockerfile中，第一条指令必须为FROM"]},"e0bd1ba7-aaf3-47db-a01c-51d3a609295b":{"type":2,"question":"Cgroup核心组件有？","answers":["Task","cgroup 控制组","hierarchy 层级树","subsystem 子系统"]}}
	       };
var name = document.getElementsByClassName("title text-overflow")[0].innerText.replace("正在作答: ", "");
if(name.slice(name.length-3) == '...'){
	name = name.slice(0,(name.length-3));		
}

//var name = "宁波移动员工网信安全考试";
console.log(name,name in ansArray);

// 正则表达式用于匹配不需要转义的双引号前后的特定字符（{, :, [, }, ,]）,并保留这些字符不变，同时转义其他情况下的双引号
const questionsDic = JSON.parse(JSON.stringify(ansArray[name]).replace(/(?<![{,:[\]])"(?![,:}\]])/g, '\\"').replace(/\n/g, ""));

console.log(typeof(questionsDic),questionsDic);

var questionNum = document.getElementsByClassName("list-item").length;
console.log(questionNum);

function autoExam() {
try {
    if (name in ansArray){
	
	console.log(name + "  开始答题...");
	var auth = "Bearer__" + JSON.parse(localStorage.getItem("token"))["access_token"];
	//console.log(auth);
	var req = new XMLHttpRequest();
	req.open("GET", "/api/v1/system/setting/frontend?_=" + new Date().getTime(), false);
	req.setRequestHeader("Authorization", auth);
	req.send(null);
	res = JSON.parse(req.responseText);
	currentUserId = res.currentUser.id;  
	
	var next = document.evaluate('//div[contains(@class, "border") and (text()="下一题" or text()="上一题")]', document).iterateNext();
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

	}else{
	    console.log(`本场考试暂无答案`);
	    alert(`本场考试暂无答案`);   
	    }

    }catch (error) {
        console.error('发生错误:', error);
        alert('发生错误，请检查控制台');
    }
}
	
			

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
                    for (var answer of answerList) {
                        document.evaluate('//div[@data-dynamic-key="' + questionId + '"]/div/div[@data-region="options"]//div[text()="' + answer + '"]/../../div/label',document).iterateNext().click();
                    }
            } else {
                console.log("题型错误！");
                Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click();
            }
        } catch (error) {
            Xpath('//a[contains(@id,"waiting-check-' + questionId + '")]')[0].click();
	    console.log(error);
        }
        try {
            document.evaluate('//div[@class="btn white border" and text()="下一题"]', document).iterateNext().click();
        } catch (error) {}
        if (i == questionNum - 1 || j == questionNum - 1) {
            //由于多选需要反选操作，导致正确答案填入有延后，当多选题量大时，需要延迟一定时间弹出alert
            setTimeout(function () {
                alert("答题完成，感谢使用");
                console.log("答题完毕，感谢使用");
            }, questionNum * 50)
        }
    }, 1000 * i);
}

autoExam();
