// 获取URL中的参数
const urlParams = new URLSearchParams(window.location.search);
const value = urlParams.get('value');

// 检查值是否在0到100的范围内
if (value !== null && !isNaN(value) && value >= 0 && value <= 100) {
  // 执行您的逻辑
  console.log('传递的值在0到100的范围内：', value);
} else {
  console.log('传递的值不在0到100的范围内或者未提供有效的值。');
}
