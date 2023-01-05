var n = 1;
var m = 10;

// 普通语法
// n = n + 1;

// 简写语法
// n += 1;

// 自增/减语法(只能表示加1)
// n++;
// n--;
// ++n;
// --n;

var a = n--; // a是--之前的结果
var b = ++m; // b是++之后的结果

console.log(a); // 1
console.log(n); // 0

console.log(b); // 11
console.log(m); // 11
