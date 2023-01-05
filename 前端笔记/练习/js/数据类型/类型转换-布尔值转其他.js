var boo = false;

// 布尔 >> 字符串 (不常用)
var str1 = String(boo); // 1. 无脑转换
var str2 = boo + ''; // 2. 隐式转换
// console.log(str1);
// console.log(str2);

// 布尔 >> 数字
var n1 = Number(boo); // 1. 无脑转换(推荐)
var n2 = boo - 0; // 2.1. 隐式转换(减法运算结果为数字)
var n3 = -(-boo); // 2.2. 隐式转换(负负)

console.log(n3);

