//auto_exam2.js

var name = "在线考试";
var filename = name + ".txt";
console.log(filename);

function fetchFileContent(filename) {
    return fetch(filename)
        .then(response => response.text())
        .then(text => {
            return text;
        })
        .catch(error => {
            console.error('Error fetching file:', error);
            return '';
        });
}

fetchFileContent(filename).then(content => {
    var questionsDic1 = content;
});

console.log(typeof(questionsDic1), questionsDic1);

