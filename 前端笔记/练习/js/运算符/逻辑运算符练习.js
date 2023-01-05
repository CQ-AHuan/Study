// // &&
// // 1.
// var n1 = 1;
// console.log(--n1 && n1++); // 0

// // 2.
// var n2 = 1;
// console.log(n2++ && n2++ && n2); // 1 && 2 && 3

// // 3.
// var n3 = '1';
// console.log(Number(1) && Number('')); // 1 && 0

// // 4.
// var n4 = '0';
// console.log(n4 && ++n4 && n4); // '0' && 1 && 1

// // 5.
// var n5 = '';
// console.log(n5 && n5--); // ''

// ||
// // 1.
// var n1 = 1;
// console.log(--n1 || n1++); // 0

// // 2.
// var n2 = 1;
// console.log(n2++ || n2++ || n2); // 1

// // 3.
// var n3 = '1';
// console.log(Number(n3) || Number('')); // 1

// // 4.
// var n4 = '0';
// console.log(n4 || ++n4 || n4); // '0'

// // 5.
// var n5 = '';
// console.log(n5 || n5--); // 0

// !
// 1.
console.log(!Number('hello')); // true

// 2.
var n6 = 0;
console.log(!n6 || ++n6); // true
