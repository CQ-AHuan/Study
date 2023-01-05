// 小三同学的信息
// 名字: 张三 (字符串 string)
// 年龄: 20 (数字 number)
// 是否已婚: 是 (布尔 boolean)

// 字符串
var studentName = '张三'; // '值'

// 数字
var age = 20; // 值
var large = Infinity; // 正无穷
var small = -Infinity; // 负无穷
// 判断一个值能否被转换为数字
var isNum = !isNaN('hello world!');

// 布尔(真/假)
var married = true; // true: 真  false: 否

// 判断类型
console.log(typeof studentName); // 'string'
console.log(typeof age); // 'number'
console.log(typeof married); // 'boolean'

// typeof studentName >>> 'string'
var studentNameType = typeof studentName;
console.log(studentNameType); // 'string'

// 练习: 输入(prompt)abc 打印它的类型
// 练习: 输入(prompt)123 打印它的类型
// 练习: 输入(prompt)true 打印它的类型
