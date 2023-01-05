var n1 = 2;
var n2 = 3;

// 数字运算
var result1 = n1 + n2;
var result2 = n1 - n2;
var result3 = n1 * n2;
var result4 = n1 / n2;
var result5 = 33 % 2; // 余2为0是偶数 否则是奇数

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

var n3 = '4';
var n4 = 5;

// 字符串
// 加法如果有字符串参与 本语法就变成了字符串拼接
var result6 = n3 + n4 + 0; // '450'
var result7 = 'hello' + 'world'; // 'helloworld'
var result8 = '' + 2 + true; // '2true'

var result9 = n3 - n4; // -1
var result10 = 'hello' - 1; // NaN
var result11 = 'hello' * 1; // NaN
var result11 = 'hello' / 1; // NaN
var result11 = 'hello' % 1; // NaN

// 布尔
// false: 0  true: 1
var result12 = false + true; // 1
var result13 = false - true; // -1
var result14 = false * true; // 0
var result15 = false / true; // 0
var result16 = false % true; // 1
