//auto_exam2.js

var name = "在线考试";
var filename = "https://raw.githubusercontent.com/GitHubChrisChen8035/zywd/main/" + name + ".txt";
console.log(filename);


// 使用 fetch API 获取文件内容，并赋值给 var questionsDic1
fetch(filename)
    .then(response => response.text())
    .then(text => {
        var questionsDic1 = text;
        console.log(typeof(questionsDic1),questionsDic1);
    })
    .catch(error => {
        console.error('Error fetching file:', error);
    });


