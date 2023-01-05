// 1.
var a = 1;
console.log(String(!!a)); // 'true'

// 2.
var b = 'hello world';
var typeB = typeof b; // 'string'
console.log(!!typeB); // true

// 3.
var c = 1;
var d = '';
var e = c + d;
console.log(typeof e); // 'string'

// 4.
var f;
var g = f + d;
console.log(typeof g); // 'string'

// 5.
// Number(b) >>> NaN
// !!NaN >>> false
// Number(false) >>> 0
var h = !!Number(b); // false
console.log(Number(h)); // 0

// 6.
console.log(h - a); // -1

// 7.
var i = '123';
console.log(Number(i) + Number(b)); // NaN

// 8.
var j = 'false';
console.log(!!j); // true

// 9.
var k = '0';
console.log(!!k); // true
