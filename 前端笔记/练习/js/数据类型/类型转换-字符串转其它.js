var content = prompt('请输入'); // string类型

// 1. 字符串 >>> 数字
var n1 = Number(content); // 1. 无脑转换
var n2 = +content; // 2. 装x转换(推荐)
var n3 = parseInt(content); // 3. 大材小用转换

// '123' >>> 123
// 'hello world!' >>> NaN (not a number)
// 'abc' >>> NaN
// 0, 1, 123, 9999, NaN(来自于一个不是数字的东西)
// console.log(n1);
// console.log(typeof n3);
// 面试题
// console.log(NaN == NaN); // false

// 2. 字符串 >>> 布尔值
var b1 = Boolean(content); // 1. 无脑转换
var b2 = !!content; // 2. 装x转换(推荐)

// 'abc' >>> true
// '123' >>> true
// 'hello world' >>> true
// 'true' / 'false' >>> true
// '' >>> false

console.log(b2);

