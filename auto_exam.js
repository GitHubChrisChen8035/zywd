eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([4-8b-hklo-wyzA-Y]|1\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 o=e.location.href.match(/(H\\/|S-)([0-9a-zA-Z-]+)/)[2];4 y="Bearer__"+z.A(1l.1m("token"))["access_token"];4 8=d I();8.J(\'1n\',"/K/L/human/1o/edit-detail?_="+d T().U(),B);8.p("M",y);8.N(1p);1q=z.A(8.V).organization.shortName;4 8=d I();8.J(\'1n\',"/K/L/system/setting/frontend?_="+d T().U(),B);8.p("M",y);8.N(1p);1r=z.A(8.V);1s=1r.currentUser.C;D="Model.h.h/h/f-H.LS."+1s+"."+o;k=z.A(1l.1m(D));4 1t=k.W.1o["fullName"];4 X=k.W.C;4 1u=k.W.1v;4 O=k.H.O;4 7=k.H.7;4 g=d 1w();l(4 i=0;i<O;i++){g[7[i].C]={\'b\':7[i].b};c(7[i].b==1||7[i].b==2){4 Y=d 1w();l(4 j=0;j<7[i].10.q;j++){Y[7[i].10[j][\'1x\']]=7[i].10[j].k}g[7[i].C][\'11\']=Y}r c(7[i].b==3){g[7[i].C][\'11\']={\'1\':"正确",\'0\':"错误"}}}12 s(5,f){E=d I();4 1y="/K/L/h/h-1z/front/submitPaper";4 1A="o="+o+"&1B="+X+"&submitType=Hand&answerRecords=%5B%7B%15%22%t%22"+5+"%22%2C%16%22%t%22"+17(f)+"%22%7D%5D&1C=%5B%7B%15%22%t%22"+5+"%22%2C%16%22%t%22"+17(f)+"%22%7D%5D&clientType=1&lastCacheTime="+u(d T().U())+"&submitDetailType=2&clientVersion=Chrome%2F74.0.3729.169&noAnswerCount="+(O-1)+"&answeredCount=1";E.J("1D",1y,B);E.p("1E-b","1F/x-1G-1H-1I");E.p("M",y);E.N(1A);v=d I();4 1J="/K/L/h/h-1z/my-s";4 1K="o="+o+"&1B="+X+"&1v="+1u+"&1C=%5B%7B%15%22%t%22"+5+"%22%2C%16%22%t%22"+17(f)+"%22%7D%5D";v.J("1D",1J,B);v.p("1E-b","1F/x-1G-1H-1I");v.p("M",y);v.N(1K);return(z.A(v.V)["s"]>0)?true:B}c(1q.includes(decodeURI("%E7%BD%91%E4%BC%98"))||1t==""){1a.1b(\'已启用，请关闭开发者工具...\');$(e).ready(12(){$("body").on(\'F\',\'.S\',12(){4 5=$(1L).1M("a").attr("1x").replace(/S-/,"");4 G=$(1L).parent().next().1M("input");4 P=g[5][\'11\'];c(g[5][\'b\']==1){l(4 j=0;j<G.q;j++){4 Q=u(j);c(s(5,Q)){e.1c(\'//6[@w-1d-D="\'+u(5)+\'"]/6/6[@w-1e="1f"]//6[1g()="\'+P[j]+\'"]/../../6/1h\',e).1i().F();R}}}r c(g[5][\'b\']==3){l(4 j=0;j<G.q;j++){4 Q=u(j);c(s(5,Q)){e.1c(\'//6[@w-1d-D="\'+u(5)+\'"]/6/6[@w-1e="1f"]//span[1g()="\'+P[j]+\'"]/preceding-sibling::6[1]/1h\',e).1i().F();R}}}r c(g[5][\'b\']==2){4 1j=["0,1","0,2","1,2","0,3","1,3","2,3","0,1,2","0,1,3","0,2,3","1,2,3"];l(4 j=0;j<1j.q;j++){4 1k=1j[j];c(s(5,1k)){4 f=1k.split(",");l(4 m=0;m<f.q;m++){e.1c(\'//6[@w-1d-D="\'+u(5)+\'"]/6/6[@w-1e="1f"]//6[1g()="\'+P[f[m]]+\'"]/../../6/1h\',e).1i().F()}R}r{c(j==9){l(4 n=0;n<G.q;n++){G.eq(n)[0].F()}R}}}}r{1a.1b("Wrong Question Type!")}})})}r{1a.1b(\'您无使用权限！\')}',[],111,'||||var|questionId|div|questions|req|||type|if|new|document|answer|questionsDic|exam|||value|for|||examId|setRequestHeader|length|else|score|3A|String|xhr2|data||auth|JSON|parse|false|id|key|xhr1|click|answerOpts|paper|XMLHttpRequest|open|api|v1|Authorization|send|questionNum|answerList|curAnswer|break|question|Date|getTime|responseText|examRecord|recordId|answersDic||questionAttrCopys|answers|function|||22questionId|22answer|encodeURIComponent|||console|log|evaluate|dynamic|region|options|text|label|iterateNext|optList|curAnswers|localStorage|getItem|GET|member|null|org|res|currentUserId|fullname|paperId|paperInstanceId|Array|name|xhrurl1|record|xhrdata1|examRecordId|fullAnswerRecords|POST|Content|application|www|form|urlencoded|xhrurl2|xhrdata2|this|find'.split('|'),0,{}))
