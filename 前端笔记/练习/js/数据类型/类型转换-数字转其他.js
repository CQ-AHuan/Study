var num = NaN;

// 1. 数字 >>> 字符串 (不常见)
var str1 = String(num); // 1. 无脑转换(推荐)
var str2 = num + ''; // 2. 隐式转换(规则: 任何东西+字符串 都会变成字符串)*

// console.log(str1);
// console.log(str2);

// 2. 数字 >>> 布尔
var b1 = Boolean(num); // 1. 无脑转换
var b2 = !!num; // 2. 装x转换(推荐)

// 0 >>> false
// NaN >>> false
// 其他任何数字 >>> true

console.log(b1);
console.log(b2);
