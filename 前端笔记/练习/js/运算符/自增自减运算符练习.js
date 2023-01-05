var n = 10;

console.log(n++ + ++n); // 10 + 12 >>> 22

var a = n++; // 10
// n >> 11
var b = ++n; // 12

console.log(a + b);

// 1. 樊亮
var n1 = 10;
console.log(++n1 - ++n1); // -1

// 2. 陈迎银
var n2 = 10;
console.log(n2++ - --n2); // 10 - 10 >>> 0

// 3. 万原
var n3 = 10;
console.log(--n3 + n3-- + n3); // 9 + 9 + 8 >>> 26
